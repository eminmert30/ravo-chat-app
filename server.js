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
    console.log("🔌 Yeni socket bağlantısı:", socket.id);

    socket.on("userConnected", (email, userId) => {
      console.log("👤 Kullanıcı bağlandı:", email, userId);
      if (email) socket.join(email);
      if (userId) socket.join(userId);
    });

    // --- Çevrimiçi eventleri ---
    socket.on("userOnline", async (data) => {
      console.log("[SOCKET] userOnline event received", {
        data,
        socketId: socket.id,
      });
      try {
        const friends = await getFriendsList(data.userId);
        console.log(`[DEBUG] userOnline emit, friends:`, friends);
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
      } catch (e) {
        console.log("[ERROR] userOnline emit:", e);
      }
    });

    socket.on("userOffline", async (data) => {
      console.log("[SOCKET] userOffline event received", {
        data,
        socketId: socket.id,
      });
      try {
        // Kullanıcının lastSeen'ini güncelle
        await prisma.user.update({
          where: { id: data.userId },
          data: { lastSeen: new Date() },
        });
        console.log(
          "[SOCKET] userOffline ile lastSeen güncellendi",
          data.userId,
          new Date()
        );
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
      } catch (e) {
        console.log("[ERROR] userOffline lastSeen update:", e);
      }
    });

    // Chat room'a join olma
    socket.on("joinChat", (chatId) => {
      console.log("🏠 Kullanıcı chat room'a katıldı:", chatId);
      socket.join(chatId);
    });

    // Chat room'dan ayrılma
    socket.on("leaveChat", (chatId) => {
      console.log("🚪 Kullanıcı chat room'dan ayrıldı:", chatId);
      socket.leave(chatId);
    });

    // Mesaj gönderme event'ini dinle
    socket.on("sendMessage", async (data) => {
      try {
        // Veri kontrolü
        if (!data || !data.chatId || !data.message) {
          console.log("⚠️ Eksik veri ile sendMessage çağrıldı:", data);
          return;
        }

        // Mesaj verilerini logla
        console.log("📨 Mesaj gönderildi:", {
          chatId: data.chatId,
          messageId: data.message?.id || 'id yok',
          senderId: data.message?.senderId || 'senderId yok',
          content: data.message?.content || 'content yok',
          timestamp: new Date().toISOString(),
        });

        // Room üyelerini logla
        if (io && data.chatId) {
          try {
            const socketsInRoom = await io.in(data.chatId).allSockets();
            console.log(
              "[ROOM DEBUG] Room üyeleri (chatId:",
              data.chatId,
              "):",
              Array.from(socketsInRoom)
            );
          } catch (roomErr) {
            console.log("⚠️ Room üyeleri alınırken hata:", roomErr);
          }
        }

        // Mesajı sohbetteki diğer kullanıcılara ilet
        if (data.chatId && data.message) {
          socket.to(data.chatId).emit("newMessage", {
            chatId: data.chatId,
            message: data.message,
          });
          console.log("📤 newMessage event'i gönderildi chat room'a:", data.chatId);
        } else {
          console.log("⚠️ Eksik veri nedeniyle newMessage event'i gönderilemedi");
        }
      } catch (err) {
        console.error("⚠️ sendMessage event işlenirken hata:", err);
      }
    });

    // Typing event'ini dinle
    socket.on("typing", (data) => {
      console.log("⌨️ Yazıyor:", data);
      socket.to(data.chatId).emit("userTyping", {
        chatId: data.chatId,
        userId: data.userId,
        userName: data.userName,
      });
    });

    // Stop typing event'ini dinle
    socket.on("stopTyping", (data) => {
      console.log("⏹️ Yazmayı durdurdu:", data);
      socket.to(data.chatId).emit("userStopTyping", {
        chatId: data.chatId,
        userId: data.userId,
      });
    });

    // Arkadaş listesi yenileme event'ini dinle
    socket.on("refreshFriendsList", () => {
      console.log("🔄 Arkadaş listesi yenileniyor");
      socket.broadcast.emit("refreshFriendsList");
    });

    socket.on("disconnect", () => {
      console.log("🔌 Socket bağlantısı kesildi:", socket.id);
    });
  });

  // Next.js pages/api ve frontend
  server.use((req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || '0.0.0.0';
  const LOCAL_IP = process.env.LOCAL_IP;
  
  httpServer.listen(PORT, HOST, () => {
    console.log(`> Server listening at http://${HOST}:${PORT}`);
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
    if (LOCAL_IP) {
      console.log(`> Local Network: http://${LOCAL_IP}:${PORT}`);
    }
    console.log(`> Mobile Access: Make sure firewall allows port ${PORT}`);
  });
});
