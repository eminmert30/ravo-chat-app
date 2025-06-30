import { Server as NetServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { NextApiResponse } from 'next';

export type NextApiResponseServerIO = NextApiResponse & {
  socket: {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

let io: SocketIOServer;

export const initSocket = (res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log('Socket.io sunucusu başlatılıyor...');
    const httpServer: NetServer = res.socket.server as any;
    io = new SocketIOServer(httpServer, {
      path: '/api/socket',
      addTrailingSlash: false,
      cors: {
        origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
      }
    });

    io.on('connection', (socket) => {
      console.log('Yeni bağlantı:', socket.id);

      socket.on('userConnected', (email: string) => {
        console.log(`Kullanıcı bağlandı: ${email}`);
        socket.join(email);
      });

      socket.on('disconnect', () => {
        console.log('Bağlantı kesildi:', socket.id);
      });
    });

    res.socket.server.io = io;
  }
  return res.socket.server.io;
};

export { io };
