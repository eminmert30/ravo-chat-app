import { Server as NetServer } from "http";
import { NextRequest } from "next/server";
import { Server as ServerIO } from "socket.io";
import { NextApiResponseServerIO } from "@/lib/socket";
import { prisma } from "@/lib/prisma"; // prisma importunu ekledik
import {
  handleSendMessage,
  handleDeleteMessage,
} from "@/services/messageService";
import { getFriendsList } from "@/services/friendService";

export const dynamic = "force-dynamic";

let io: ServerIO;

const EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send";

async function sendExpoPushNotification(token, title, body) {
  if (!token || !token.startsWith("Exponent")) return;
  await fetch(EXPO_PUSH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: token,
      sound: "default",
      title,
      body,
    }),
  });
}

// Oda katılımcılarını güncelle
async function updateRoomParticipants(roomId: string) {
  try {
    console.log(`[VOICE] Updating participants for room: ${roomId}`);

    // Odadaki aktif kullanıcıları al
    const room = await prisma.voiceRoom.findUnique({
      where: { id: roomId },
      include: {
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (room) {
      console.log(
        `[VOICE] Found ${room.participants.length} participants in room`
      );

      const participants = room.participants.map((p) => ({
        id: p.user.id,
        name: p.user.name || "Kullanıcı",
        avatar: p.user.image,
        isHost: p.isHost,
        isSpeaking: false,
        isMuted: p.isMuted || false,
        isCurrentUser: false,
      }));

      console.log(`[VOICE] Sending participants to room:`, participants);

      // Odadaki tüm kullanıcılara güncel listeyi gönder
      io.to(`voice_room_${roomId}`).emit("room_participants", { participants });
    } else {
      console.log(`[VOICE] Room ${roomId} not found`);
    }
  } catch (error) {
    console.error("Update room participants error:", error);
  }
}

export async function GET(req: NextRequest) {
  if (!io) {
    // @ts-ignore - Next.js global'e eklediğimiz özelliği tanımıyor
    if (!global.io) {
      // @ts-ignore
      const httpServer = global.server;
      io = new ServerIO(httpServer, {
        path: "/api/socket",
        addTrailingSlash: false,
        cors: {
          origin: "*", // Geliştirme için tüm kaynaklara izin ver
          methods: ["GET", "POST"],
          credentials: true,
        },
      });

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
        // Sadece userOnline ve userOffline ile ilgili loglar kalsın
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
                io.to(friend.email).emit("userOffline", {
                  userId: data.userId,
                });
                console.log(
                  `[SOCKET] userOffline emit to room (email): ${friend.email}`
                );
              }
            });
          } catch (e) {}
        });

        socket.on(
          "sendMessage",
          async (data: { chatId: string; message: any }) => {
            try {
              await handleSendMessage({
                chatId: data.chatId,
                message: data.message,
                io,
              });
            } catch (error) {
              console.error("Mesaj iletme hatası:", error);
            }
          }
        );

        socket.on(
          "messageDeleted",
          async (data: {
            chatId: string;
            messageId: string;
            isAudio: boolean;
            messageType?: string;
          }) => {
            try {
              await handleDeleteMessage({
                chatId: data.chatId,
                messageId: data.messageId,
                isAudio: data.isAudio,
                messageType: data.messageType,
                io,
              });
            } catch (error) {
              console.error("Mesaj silme bildirimi hatası:", error);
            }
          }
        );

        // Kullanıcı online olduğunda arkadaşlarına bildir
        socket.on("userOnline", async (data: { userId: string }) => {
          try {
            const friends = await getFriendsList(data.userId);
            friends.forEach((friend) => {
              if (friend.id) {
                io.to(friend.id).emit("userOnline", { userId: data.userId });
              }
              if (friend.email) {
                io.to(friend.email).emit("userOnline", { userId: data.userId });
              }
            });
          } catch (e) {}
        });

        // Kullanıcı offline olduğunda arkadaşlarına bildir
        socket.on("userOffline", async (data: { userId: string }) => {
          try {
            const friends = await getFriendsList(data.userId);
            friends.forEach((friend) => {
              if (friend.id) {
                io.to(friend.id).emit("userOffline", { userId: data.userId });
              }
              if (friend.email) {
                io.to(friend.email).emit("userOffline", {
                  userId: data.userId,
                });
              }
            });
          } catch (e) {}
        });

        socket.on("disconnect", () => {
          // console.log("Bağlantı kesildi:", socket.id);
        });

        // WebRTC Voice Room Handlers
        socket.on("join_voice_room", async (data) => {
          const { roomId, userId } = data;
          socket.join(`voice_room_${roomId}`);
          console.log(`[VOICE] User ${userId} joined voice room ${roomId}`);

          try {
            // Kullanıcı bilgilerini veritabanından al
            const user = await prisma.user.findUnique({
              where: { id: userId },
              select: { id: true, name: true, email: true, image: true },
            });

            console.log(`[VOICE] User data from DB:`, user);

            // Kullanıcıyı odaya participant olarak ekle (eğer yoksa)
            const existingParticipant =
              await prisma.voiceRoomParticipant.findUnique({
                where: {
                  userId_roomId: {
                    userId: userId,
                    roomId: roomId,
                  },
                },
              });

            if (!existingParticipant) {
              await prisma.voiceRoomParticipant.create({
                data: {
                  userId: userId,
                  roomId: roomId,
                  isHost: false,
                  isMuted: false,
                  isDeafened: false,
                },
              });
              console.log(
                `[VOICE] User ${userId} added as participant to room ${roomId}`
              );
            }

            // Odadaki diğer kullanıcılara yeni kullanıcıyı bildir
            socket.to(`voice_room_${roomId}`).emit("user_joined", {
              userId,
              user: user || { id: userId, name: "Kullanıcı" },
            });

            // Mevcut kullanıcıları güncelle
            await updateRoomParticipants(roomId);
          } catch (error) {
            console.error("Voice room join error:", error);
          }
        });

        socket.on("leave_voice_room", async (data) => {
          const { roomId, userId } = data;
          socket.leave(`voice_room_${roomId}`);
          console.log(`[VOICE] User ${userId} left voice room ${roomId}`);

          try {
            // Kullanıcıyı participant listesinden çıkar
            await prisma.voiceRoomParticipant.deleteMany({
              where: {
                userId: userId,
                roomId: roomId,
              },
            });
            console.log(
              `[VOICE] User ${userId} removed from participants in room ${roomId}`
            );

            // Odadaki diğer kullanıcılara ayrılan kullanıcıyı bildir
            socket.to(`voice_room_${roomId}`).emit("user_left", { userId });

            // Mevcut kullanıcıları güncelle
            await updateRoomParticipants(roomId);
          } catch (error) {
            console.error("Voice room leave error:", error);
          }
        });

        socket.on("get_room_participants", async (data) => {
          const { roomId } = data;
          try {
            await updateRoomParticipants(roomId);
          } catch (error) {
            console.error("Get room participants error:", error);
          }
        });

        socket.on("update_participant_mic", async (data) => {
          const { userId, isMuted } = data;
          try {
            // Participant mikrofon durumunu güncelle
            await updateRoomParticipants(data.roomId);
          } catch (error) {
            console.error("Update participant mic error:", error);
          }
        });

        socket.on("update_participant_speaking", async (data) => {
          const { userId, isSpeaking } = data;
          try {
            // Participant konuşma durumunu güncelle
            await updateRoomParticipants(data.roomId);
          } catch (error) {
            console.error("Update participant speaking error:", error);
          }
        });

        socket.on("offer", (data) => {
          const { to, offer } = data;
          console.log(`[VOICE] Forwarding offer from ${socket.id} to ${to}`);
          io.to(to).emit("offer", { from: socket.id, offer });
        });

        socket.on("answer", (data) => {
          const { to, answer } = data;
          console.log(`[VOICE] Forwarding answer from ${socket.id} to ${to}`);
          io.to(to).emit("answer", { from: socket.id, answer });
        });

        socket.on("ice_candidate", (data) => {
          const { to, candidate } = data;
          console.log(
            `[VOICE] Forwarding ICE candidate from ${socket.id} to ${to}`
          );
          io.to(to).emit("ice_candidate", { from: socket.id, candidate });
        });

        socket.on("toggle_mic", (data) => {
          const { roomId, isMuted } = data;
          console.log(`[VOICE] User ${socket.id} toggled mic: ${isMuted}`);
          socket.to(`voice_room_${roomId}`).emit("mic_toggled", {
            userId: socket.id,
            isMuted,
          });
        });

        socket.on("speaking_changed", (data) => {
          const { roomId, isSpeaking } = data;
          console.log(`[VOICE] User ${socket.id} speaking: ${isSpeaking}`);
          socket.to(`voice_room_${roomId}`).emit("speaking_changed", {
            userId: socket.id,
            isSpeaking,
          });
        });

        socket.on("voice_message", (data) => {
          const { roomId, audioUrl, userId } = data;
          console.log(`[VOICE] Voice message from ${userId} in room ${roomId}`);
          socket.to(`voice_room_${roomId}`).emit("voice_message", {
            userId,
            audioUrl,
          });
        });
      });

      // @ts-ignore
      global.io = io;
    } else {
      // @ts-ignore
      io = global.io;
    }
  }

  return new Response("Socket.io sunucusu başlatıldı", { status: 200 });
}
