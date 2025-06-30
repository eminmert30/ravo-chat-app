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

    const { friendId } = await request.json();

    if (!friendId) {
      return NextResponse.json(
        { error: 'Arkadaş ID\'si gerekli' },
        { status: 400 }
      );
    }

    // Kendini arkadaş olarak eklemeyi engelle
    if (friendId === session.user.id) {
      return NextResponse.json(
        { error: 'Kendinizi arkadaş olarak ekleyemezsiniz' },
        { status: 400 }
      );
    }

    // Arkadaşlık isteği zaten var mı kontrol et
    const existingRequest = await db.friendRequest.findFirst({
      where: {
        OR: [
          {
            senderId: session.user.id,
            receiverId: friendId,
          },
          {
            senderId: friendId,
            receiverId: session.user.id,
          },
        ],
      },
    });

    if (existingRequest) {
      return NextResponse.json(
        { error: 'Bu kullanıcı ile zaten bir arkadaşlık isteği mevcut' },
        { status: 400 }
      );
    }

    // Alıcı kullanıcıyı bul
    const receiver = await db.user.findUnique({
      where: { id: friendId }
    });

    if (!receiver) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    // Yeni arkadaşlık isteği oluştur
    const friendRequest = await db.friendRequest.create({
      data: {
        senderId: session.user.id,
        receiverId: friendId,
        status: 'pending'
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      }
    });

    // Socket.io ile bildirim gönder
    io.to(receiver.email).emit('friendRequest', {
      type: 'friendRequest',
      data: friendRequest
    });

    return NextResponse.json(friendRequest);
  } catch (error) {
    console.error('Arkadaş ekleme hatası:', error);
    return NextResponse.json(
      { error: 'Arkadaş eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
