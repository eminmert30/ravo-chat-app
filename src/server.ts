import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

const dev = process.env.NODE_ENV !== "production";
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
    path: "/api/socket",
    addTrailingSlash: false,
    cors: {
      origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // @ts-ignore
  global.io = io;

  // --- Arkadaş listesini almak için Prisma fonksiyonu ---
  const prisma = new PrismaClient();
  async function getFriendsList(userId: string) {
    const friends = await prisma.friend.findMany({
      where: {
        OR: [{ userId: userId }, { friendId: userId }],
      },
      include: {
        user: true,
        friend: true,
      },
    });
    console.log(
      `[DEBUG] getFriendsList for userId=${userId}:`,
      friends.map((f) => ({ user: f.user.email, friend: f.friend.email }))
    );
    return friends.map((f) => {
      const other = f.userId === userId ? f.friend : f.user;
      return { id: other.id, email: other.email };
    });
  }

  io.on("connection", (socket) => {
    console.log("🔌 Yeni socket bağlantısı:", socket.id);

    socket.on("userConnected", (email: string, userId?: string) => {
      console.log("👤 Kullanıcı bağlandı:", email, userId);
      if (email) socket.join(email);
      if (userId) socket.join(userId);
    });

    // --- Çevrimiçi eventleri ---
    socket.on("userOnline", async (data: { userId: string }) => {
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
    socket.on("userOffline", async (data: { userId: string }) => {
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
    socket.on("joinChat", (chatId: string) => {
      console.log("🏠 Kullanıcı chat room'a katıldı:", chatId);
      socket.join(chatId);
    });

    // Chat room'dan ayrılma
    socket.on("leaveChat", (chatId: string) => {
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

  const port = parseInt(process.env.PORT || "3000", 10);
  const host = process.env.HOST || "0.0.0.0";
  server.listen(port, host, () => {
    console.log(`> Server listening at http://${host}:${port}`);
  });
});
