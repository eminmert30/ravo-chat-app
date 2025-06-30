import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { io } from '@/lib/socket';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Oturum açmanız gerekiyor' },
        { status: 401 }
      );
    }

    const { requestId, action } = await request.json();

    if (!requestId || !action) {
      return NextResponse.json(
        { error: 'İstek ID ve aksiyon gerekli' },
        { status: 400 }
      );
    }

    if (!['accept', 'reject'].includes(action)) {
      return NextResponse.json(
        { error: 'Geçersiz aksiyon' },
        { status: 400 }
      );
    }

    // İsteği bul
    const friendRequest = await db.friendRequest.findFirst({
      where: {
        id: requestId,
        receiverId: session.user.id,
        status: 'pending'
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!friendRequest) {
      return NextResponse.json(
        { error: 'Arkadaşlık isteği bulunamadı' },
        { status: 404 }
      );
    }

    if (action === 'accept') {
      console.log('Accepting friend request:', requestId);
      console.log('Current user:', session.user.id);
      console.log('Friend request:', friendRequest);

      // İsteği kabul et ve arkadaşlık ilişkisi oluştur
      await db.$transaction([
        // İsteği güncelle
        db.friendRequest.update({
          where: { id: requestId },
          data: { status: 'accepted' }
        }),
        // İki yönlü arkadaşlık ilişkisi oluştur
        db.friend.create({
          data: {
            userId: session.user.id,
            friendId: friendRequest.senderId
          }
        }),
        db.friend.create({
          data: {
            userId: friendRequest.senderId,
            friendId: session.user.id
          }
        })
      ]);

      console.log('Friend request accepted and relationships created');

      // Her iki kullanıcıya da bildirim gönder
      if (global.io) {

      global.io.to(friendRequest.sender.email).emit('friendRequestAccepted', {
        type: 'friendRequestAccepted',
        data: {
          requestId,
          acceptedBy: {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email
          }
        }
      });

      // Arkadaş listesini yenilemek için event gönder
      global.io.to(friendRequest.sender.email).emit('refreshFriendsList');
      global.io.to(session.user.email).emit('refreshFriendsList');
    }
      return NextResponse.json({ message: 'Arkadaşlık isteği kabul edildi' });
    } else {
      // İsteği reddet
      await db.friendRequest.update({
        where: { id: requestId },
        data: { status: 'rejected' }
      });
      if (global.io) {

      // Gönderene bildirim gönder
      global.io.to(friendRequest.sender.email).emit('friendRequestRejected', {
        type: 'friendRequestRejected',
        data: { requestId }
      });
    }

      return NextResponse.json({ message: 'Arkadaşlık isteği reddedildi' });
    }
  } catch (error) {
    console.error('Arkadaşlık isteği yanıtlama hatası:', error);
    return NextResponse.json(
      { error: 'İstek yanıtlanırken bir hata oluştu' },
      { status: 500 }
    );
  }
}
