import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { db } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Oturum açmanız gerekiyor' },
        { status: 401 }
      );
    }

    // Bekleyen arkadaşlık isteklerini getir
    const friendRequests = await db.friendRequest.findMany({
      where: {
        receiverId: session.user.id,
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

    return NextResponse.json(friendRequests);
  } catch (error) {
    console.error('Arkadaşlık istekleri getirme hatası:', error);
    return NextResponse.json(
      { error: 'İstekler alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}
