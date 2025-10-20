const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let io;

app.prepare().then(() => {
  const server = express();
  const httpServer = createServer(server);

  // Socket.IO server
  io = new Server(httpServer, {
    path: "/api/socket",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // --- Buraya event handler'ları ekleyeceğiz ---

  // --- Arkadaş listesini almak için gerçek Prisma fonksiyonu ---
  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  async function getFriendsList(userId) {
    // Kullanıcının arkadaşlarını çek (her iki yönde de friend kabul edilmiş olanlar)
    const friends = await prisma.friend.findMany({
      where: {
        OR: [{ userId: userId }, { friendId: userId }],
        status: "ACCEPTED",
      },
      include: {
        user: true,
        friend: true,
      },
    });
    // Her arkadaş için id ve email döndür
    return friends.map((f) => {
      // userId ile friendId'yi ayır
      const other = f.userId === userId ? f.friend : f.user;
      return { id: other.id, email: other.email };
    });
  }

  io.on("connection", (socket) => {
    // Kullanıcı kendi odasına join olsun (userId ve email)
    socket.on("userConnected", (email, userId) => {
      if (userId) {
        socket.join(userId);
        console.log(
          `[SOCKET] userConnected: socket ${socket.id} joined room (userId): ${userId}`
        );
      }
      if (email) {
        socket.join(email);
        console.log(
          `[SOCKET] userConnected: socket ${socket.id} joined room (email): ${email}`
        );
      }
    });

    // Kullanıcı online olduğunda arkadaşlarına bildir
    socket.on("userOnline", async (data) => {
      console.log("[SOCKET] userOnline event received", {
        data,
        socketId: socket.id,
      });
      try {
        const friends = await getFriendsList(data.userId);
        friends.forEach((friend) => {
          if (friend.id) {
            io.to(friend.id).emit("userOnline", { userId: data.userId });
            console.log(
              `[SOCKET] userOnline emit to room (userId): ${friend.id}`
            );
          }
          if (friend.email) {
            io.to(friend.email).emit("userOnline", { userId: data.userId });
            console.log(
              `[SOCKET] userOnline emit to room (email): ${friend.email}`
            );
          }
        });
      } catch (e) {}
    });

    // Kullanıcı offline olduğunda arkadaşlarına bildir
    socket.on("userOffline", async (data) => {
      console.log("[SOCKET] userOffline event received", {
        data,
        socketId: socket.id,
      });
      try {
        const friends = await getFriendsList(data.userId);
        friends.forEach((friend) => {
          if (friend.id) {
            io.to(friend.id).emit("userOffline", { userId: data.userId });
            console.log(
              `[SOCKET] userOffline emit to room (userId): ${friend.id}`
            );
          }
          if (friend.email) {
            io.to(friend.email).emit("userOffline", { userId: data.userId });
            console.log(
              `[SOCKET] userOffline emit to room (email): ${friend.email}`
            );
          }
        });
      } catch (e) {}
    });
  });

  // Next.js pages/api ve frontend
  server.use((req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || '0.0.0.0';
  const LOCAL_IP = process.env.LOCAL_IP;
  httpServer.listen(PORT, HOST, () => {
    console.log(`> Ready on http://${HOST}:${PORT}`);
    if (LOCAL_IP) {
      console.log(`> Local Network: http://${LOCAL_IP}:${PORT}`);
    }
    console.log(`> Mobile Access: Make sure firewall allows port ${PORT}`);
  });
});
