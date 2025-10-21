import { NextRequest } from "next/server";
import { Server as SocketIOServer } from "socket.io";
import { Server as NetServer } from "http";
import { Socket as NetSocket } from "net";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Socket.IO server instance'ını global olarak sakla
let io: SocketIOServer | null = null;

// Socket.IO server'ı başlat
function getSocketIOServer() {
  if (!io) {
    const httpServer = new NetServer();
    io = new SocketIOServer(httpServer, {
      path: "/api/socket",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    // Socket.IO event handlers
    io.on("connection", (socket) => {
      console.log(`[SOCKET] Client connected: ${socket.id}`);

      // Kullanıcı kendi odasına join olsun
      socket.on("userConnected", (email, userId) => {
        if (userId) {
          socket.join(userId);
          console.log(`[SOCKET] userConnected: socket ${socket.id} joined room (userId): ${userId}`);
        }
        if (email) {
          socket.join(email);
          console.log(`[SOCKET] userConnected: socket ${socket.id} joined room (email): ${email}`);
        }
      });

      // Kullanıcı online olduğunda arkadaşlarına bildir
      socket.on("userOnline", async (data) => {
        console.log("[SOCKET] userOnline event received", { data, socketId: socket.id });
        try {
          const friends = await getFriendsList(data.userId);
          friends.forEach((friend) => {
            if (friend.id) {
              io?.to(friend.id).emit("userOnline", { userId: data.userId });
              console.log(`[SOCKET] userOnline emit to room (userId): ${friend.id}`);
            }
            if (friend.email) {
              io?.to(friend.email).emit("userOnline", { userId: data.userId });
              console.log(`[SOCKET] userOnline emit to room (email): ${friend.email}`);
            }
          });
        } catch (e) {
          console.error("[SOCKET] userOnline error:", e);
        }
      });

      // Kullanıcı offline olduğunda arkadaşlarına bildir
      socket.on("userOffline", async (data) => {
        console.log("[SOCKET] userOffline event received", { data, socketId: socket.id });
        try {
          const friends = await getFriendsList(data.userId);
          friends.forEach((friend) => {
            if (friend.id) {
              io?.to(friend.id).emit("userOffline", { userId: data.userId });
              console.log(`[SOCKET] userOffline emit to room (userId): ${friend.id}`);
            }
            if (friend.email) {
              io?.to(friend.email).emit("userOffline", { userId: data.userId });
              console.log(`[SOCKET] userOffline emit to room (email): ${friend.email}`);
            }
          });
        } catch (e) {
          console.error("[SOCKET] userOffline error:", e);
        }
      });

      // Chat mesajları
      socket.on("sendMessage", async (data) => {
        console.log("[SOCKET] sendMessage event received", { data, socketId: socket.id });
        try {
          // Mesajı veritabanına kaydet
          const message = await prisma.message.create({
            data: {
              content: data.content,
              senderId: data.senderId,
              receiverId: data.receiverId,
              chatRoomId: data.chatRoomId,
            },
            include: {
              sender: true,
              receiver: true,
            },
          });

          // Alıcıya mesajı gönder
          if (data.receiverId) {
            io?.to(data.receiverId).emit("newMessage", message);
          }
          if (data.receiverEmail) {
            io?.to(data.receiverEmail).emit("newMessage", message);
          }
        } catch (e) {
          console.error("[SOCKET] sendMessage error:", e);
        }
      });

      // Disconnect
      socket.on("disconnect", () => {
        console.log(`[SOCKET] Client disconnected: ${socket.id}`);
      });
    });
  }
  return io;
}

// Arkadaş listesini al
async function getFriendsList(userId: string) {
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
  
  return friends.map((f) => {
    const other = f.userId === userId ? f.friend : f.user;
    return { id: other.id, email: other.email };
  });
}

// API Route handler
export async function GET(request: NextRequest) {
  try {
    const io = getSocketIOServer();
    return new Response(JSON.stringify({ 
      status: "Socket.IO server running",
      connected: io?.engine?.clientsCount || 0 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[SOCKET] API Error:", error);
    return new Response(JSON.stringify({ 
      status: "error", 
      message: "Socket.IO server error" 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const io = getSocketIOServer();
    return new Response(JSON.stringify({ 
      status: "Socket.IO server running",
      connected: io?.engine?.clientsCount || 0 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[SOCKET] API Error:", error);
    return new Response(JSON.stringify({ 
      status: "error", 
      message: "Socket.IO server error" 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}