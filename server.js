const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let io;

app.prepare().then(() => {
  const server = express();
  const httpServer = createServer(server);

  // Socket.IO server
  io = new Server(httpServer, {
    path: '/api/socket',
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  // Socket.IO event handlers
  io.on('connection', (socket) => {
    console.log(`[SOCKET] Client connected: ${socket.id}`);

    socket.on('userConnected', (email, userId) => {
      if (userId) {
        socket.join(userId);
        console.log(`[SOCKET] userConnected: socket ${socket.id} joined room (userId): ${userId}`);
      }
      if (email) {
        socket.join(email);
        console.log(`[SOCKET] userConnected: socket ${socket.id} joined room (email): ${email}`);
      }
    });

    socket.on('userOnline', async (data) => {
      console.log('[SOCKET] userOnline event received', { data, socketId: socket.id });
      // Broadcast to friends
      socket.broadcast.emit('userOnline', { userId: data.userId });
    });

    socket.on('userOffline', async (data) => {
      console.log('[SOCKET] userOffline event received', { data, socketId: socket.id });
      // Broadcast to friends
      socket.broadcast.emit('userOffline', { userId: data.userId });
    });

    socket.on('sendMessage', async (data) => {
      console.log('[SOCKET] sendMessage event received', { data, socketId: socket.id });
      // Broadcast message
      socket.broadcast.emit('newMessage', data);
    });

    socket.on('disconnect', () => {
      console.log(`[SOCKET] Client disconnected: ${socket.id}`);
    });
  });

  // Health check endpoint
  server.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
    });
  });

  // Next.js pages/api ve frontend
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  const HOST = '0.0.0.0';

  httpServer.listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
    console.log(`📦 Next.js + Express + Socket.IO`);
  });
});
