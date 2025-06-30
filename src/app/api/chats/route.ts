import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { db } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Kullanıcının sohbetlerini getir
    const chats = await db.chat.findMany({
      where: {
        OR: [
          { userId: session.user.id },
          { participants: { some: { userId: session.user.id } } }
        ]
      },
      include: {
        participants: {
          include: {
            user: true
          }
        },
        messages: {
          take: 1,
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    return NextResponse.json(chats);
  } catch (error) {
    console.error('[CHATS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
