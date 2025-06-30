import { Server as NetServer } from 'http';
import { NextRequest } from 'next/server';
import { Server as ServerIO } from 'socket.io';
import { NextApiResponseServerIO } from '@/lib/socket';
import { prisma } from '@/lib/prisma'; // prisma importunu ekledik

export const dynamic = 'force-dynamic';

let io: ServerIO;

export async function GET(req: NextRequest) {
  if (!io) {
    console.log('Socket.io sunucusu başlatılıyor...');
    
    // @ts-ignore - Next.js global'e eklediğimiz özelliği tanımıyor
    if (!global.io) {
      console.log('Yeni Socket.io sunucusu oluşturuluyor...');
      // @ts-ignore
      const httpServer = global.server;
      io = new ServerIO(httpServer, {
        path: '/api/socket',
        addTrailingSlash: false,
        cors: {
          origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          methods: ['GET', 'POST'],
          credentials: true
        },
      });

      io.on('connection', (socket) => {
        console.log('Yeni bağlantı:', socket.id);

        socket.on('userConnected', (email: string) => {
          console.log(`Kullanıcı bağlandı: ${email}`);
          socket.join(email);
        });

        socket.on('sendMessage', async (data: { chatId: string, message: any }) => {
          console.log('Yeni mesaj alındı:', data);
          
          try {
            // Sohbetin katılımcılarını bul
            const chat = await prisma.chat.findUnique({
              where: { id: data.chatId },
              include: {
                participants: {
                  include: {
                    user: true
                  }
                }
              }
            });

            if (chat) {
              console.log('Katılımcılara mesaj gönderiliyor:', chat.participants.map(p => p.user.email));
              // Tüm katılımcılara mesajı ilet
              chat.participants.forEach((participant) => {
                if (participant.user.email) {
                  io.to(participant.user.email).emit('newMessage', {
                    chatId: data.chatId,
                    message: data.message
                  });
                }
              });
            } else {
              console.error('Sohbet bulunamadı:', data.chatId);
            }
          } catch (error) {
            console.error('Mesaj iletme hatası:', error);
          }
        });

        socket.on('messageDeleted', async (data: { chatId: string, messageId: string, isAudio: boolean, messageType?: string }) => {
          console.log('Mesaj silme olayı alındı:', data);
          
          try {
            // Mesajı veritabanından kontrol et
            const message = await prisma.message.findUnique({
              where: { id: data.messageId }
            });

            // Mesajın tipini belirle
            const isAudioMessage = data.isAudio || message?.isAudio || data.messageType === 'audio';
            
            // Sohbetin katılımcılarını bul
            const chat = await prisma.chat.findUnique({
              where: { id: data.chatId },
              include: {
                participants: {
                  include: {
                    user: true
                  }
                }
              }
            });

            if (chat) {
              console.log('Katılımcılara mesaj silme bildirimi gönderiliyor:', {
                participants: chat.participants.map(p => p.user.email),
                isAudio: isAudioMessage
              });
              
              // Tüm katılımcılara mesajı ilet
              chat.participants.forEach((participant) => {
                if (participant.user.email) {
                  io.to(participant.user.email).emit('messageDeleted', {
                    chatId: data.chatId,
                    messageId: data.messageId,
                    isAudio: isAudioMessage,
                    messageType: isAudioMessage ? 'audio' : 'text'
                  });
                }
              });
            }
          } catch (error) {
            console.error('Mesaj silme bildirimi hatası:', error);
          }
        });

        socket.on('disconnect', () => {
          console.log('Bağlantı kesildi:', socket.id);
        });
      });

      // @ts-ignore
      global.io = io;
    } else {
      // @ts-ignore
      io = global.io;
    }
  }

  return new Response('Socket.io sunucusu başlatıldı', { status: 200 });
}
