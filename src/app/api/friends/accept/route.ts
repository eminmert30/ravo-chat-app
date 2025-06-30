import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';

// Arkadaşlık isteğini kabul etme
export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Oturum açmanız gerekiyor' }, { status: 401 });
    }

    const { requestId } = await req.json();
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // İsteği bul ve kontrol et
    const request = await prisma.friendRequest.findUnique({
      where: { id: requestId }
    });

    if (!request) {
      return NextResponse.json({ error: 'İstek bulunamadı' }, { status: 404 });
    }

    if (request.receiverId !== user.id) {
      return NextResponse.json({ error: 'Bu isteği kabul etme yetkiniz yok' }, { status: 403 });
    }

    // Arkadaşlık ilişkisini oluştur
    await prisma.$transaction([
      // İsteği güncelle
      prisma.friendRequest.update({
        where: { id: requestId },
        data: { status: 'accepted' }
      }),
      // Karşılıklı arkadaşlık ilişkisi oluştur
      prisma.friend.createMany({
        data: [
          { userId: request.senderId, friendId: request.receiverId },
          { userId: request.receiverId, friendId: request.senderId }
        ]
      }),
      // Özel sohbet oluştur
      prisma.chat.create({
        data: {
          type: 'private',
          participants: {
            create: [
              { userId: request.senderId },
              { userId: request.receiverId }
            ]
          }
        }
      })
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Arkadaşlık isteği kabul hatası:', error);
    return NextResponse.json({ error: 'Bir hata oluştu' }, { status: 500 });
  }
}
