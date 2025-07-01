import { Server as NetServer } from "http";
import { NextRequest } from "next/server";
import { Server as ServerIO } from "socket.io";
import { NextApiResponseServerIO } from "@/lib/socket";
import { prisma } from "@/lib/prisma"; // prisma importunu ekledik
import {
  handleSendMessage,
  handleDeleteMessage,
} from "@/services/messageService";

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

export async function GET(req: NextRequest) {
  if (!io) {
    console.log("Socket.io sunucusu başlatılıyor...");

    // @ts-ignore - Next.js global'e eklediğimiz özelliği tanımıyor
    if (!global.io) {
      console.log("Yeni Socket.io sunucusu oluşturuluyor...");
      // @ts-ignore
      const httpServer = global.server;
      io = new ServerIO(httpServer, {
        path: "/api/socket",
        addTrailingSlash: false,
        cors: {
          origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          methods: ["GET", "POST"],
          credentials: true,
        },
      });

      io.on("connection", (socket) => {
        console.log("Yeni bağlantı:", socket.id);

        socket.on("userConnected", (email: string) => {
          console.log(`Kullanıcı bağlandı: ${email}`);
          socket.join(email);
        });

        socket.on(
          "sendMessage",
          async (data: { chatId: string; message: any }) => {
            console.log("Yeni mesaj alındı:", data);
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
            console.log("Mesaj silme olayı alındı:", data);
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

        socket.on("disconnect", () => {
          console.log("Bağlantı kesildi:", socket.id);
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
