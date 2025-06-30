import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Server as ServerIO } from 'socket.io';

// Global type declaration for socket.io
declare global {
  var io: ServerIO | undefined;
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Oturum açmanız gerekiyor' },
        { status: 401 }
      );
    }

    const { messageId, isAudio } = await request.json();

    if (!messageId) {
      return NextResponse.json(
        { error: 'Mesaj ID\'si gerekli' },
        { status: 400 }
      );
    }

    // Mesajı bul ve sahibi olduğunu kontrol et
    const message = await db.message.findUnique({
      where: { id: messageId }
    });

    if (!message) {
      return NextResponse.json(
        { error: 'Mesaj bulunamadı' },
        { status: 404 }
      );
    }

    if (message.senderId !== session.user.id) {
      return NextResponse.json(
        { error: 'Bu mesajı silme yetkiniz yok' },
        { status: 403 }
      );
    }

    // Mesajı güncelle
    const updatedMessage = await db.message.update({
      where: { id: messageId },
      data: {
        content: "Bu mesaj silindi"
      }
    });

    // Sohbet katılımcılarını bul
    const chat = await db.chat.findUnique({
      where: { id: message.chatId },
      include: {
        participants: {
          include: {
            user: true
          }
        }
      }
    });

    // Socket.io üzerinden mesaj silme bildirimini gönder
    if (global.io && chat) {
      chat.participants.forEach((participant) => {
        if (participant.user.email) {
          global.io.to(participant.user.email).emit('messageDeleted', {
            messageId,
            chatId: message.chatId,
            isAudio: isAudio,
            content: isAudio ? "🎤 Bu sesli mesaj silindi" : "Bu mesaj silindi",
          });
        }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mesaj silme hatası:', error);
    return NextResponse.json(
      { error: 'Mesaj silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
