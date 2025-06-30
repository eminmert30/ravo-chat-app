import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { messageIds } = await request.json();

    await prisma.message.updateMany({
      where: {
        id: {
          in: messageIds
        }
      },
      data: {
        isRead: true
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mesajları okundu olarak işaretleme hatası:', error);
    return NextResponse.json(
      { error: 'Mesajlar işaretlenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
