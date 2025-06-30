import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // @ts-ignore - Next.js global'e eklediğimiz özelliği tanımıyor
  global.server = server;

  const io = new Server(server, {
    path: '/api/socket',
    addTrailingSlash: false,
    cors: {
      origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true
    },
  });

  // @ts-ignore
  global.io = io;

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

  const port = parseInt(process.env.PORT || '3000', 10);
  server.listen(port, () => {
    console.log(`> Server listening at http://localhost:${port}`);
  });
});
