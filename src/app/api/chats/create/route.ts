import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { db } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Oturum açmanız gerekiyor' }, { status: 401 });
    }

    const { friendId } = await req.json();

    // Kullanıcıyı bul
    const user = await db.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Arkadaşlık durumunu kontrol et
    const friendship = await db.friend.findFirst({
      where: {
        OR: [
          { userId: user.id, friendId: friendId },
          { userId: friendId, friendId: user.id }
        ]
      }
    });

    if (!friendship) {
      return NextResponse.json({ error: 'Bu kullanıcı ile arkadaş değilsiniz' }, { status: 403 });
    }

    // Mevcut sohbeti kontrol et
    const existingChat = await db.chat.findFirst({
      where: {
        type: 'private',
        AND: [
          {
            participants: {
              some: { userId: user.id }
            }
          },
          {
            participants: {
              some: { userId: friendId }
            }
          }
        ]
      }
    });

    if (existingChat) {
      return NextResponse.json(existingChat);
    }

    // Yeni sohbet oluştur
    const newChat = await db.chat.create({
      data: {
        type: 'private',
        participants: {
          create: [
            { userId: user.id },
            { userId: friendId }
          ]
        }
      },
      include: {
        participants: {
          include: {
            user: true
          }
        }
      }
    });

    return NextResponse.json(newChat);
  } catch (error) {
    console.error('[CHAT_CREATE]', error);
    return NextResponse.json({ error: 'Sohbet oluşturulurken bir hata oluştu' }, { status: 500 });
  }
}
