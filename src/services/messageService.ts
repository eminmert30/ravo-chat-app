import { prisma } from "@/lib/prisma";

const EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send";

async function sendExpoPushNotification(
  token: string,
  title: string,
  body: string
) {
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

export async function handleSendMessage({
  chatId,
  message,
  io,
}: {
  chatId: string;
  message: any;
  io: any;
}) {
  // Sohbetin katılımcılarını bul
  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    include: {
      participants: {
        include: {
          user: {
            select: {
              id: true,
              email: true,
              expoPushToken: true,
            },
          },
        },
      },
    },
  });

  if (!chat) throw new Error("Sohbet bulunamadı");

  for (const participant of chat.participants) {
    const user = participant.user as {
      id: string;
      email: string;
      expoPushToken?: string;
    };
    if (user.email) {
      io.to(user.email).emit("newMessage", {
        chatId,
        message,
      });
    }
    // Push notification gönder (gönderen hariç)
    if (user.expoPushToken && user.id !== message.senderId) {
      await sendExpoPushNotification(
        user.expoPushToken,
        message.sender || "Yeni Mesaj",
        message.content || "Yeni mesajınız var."
      );
    }
  }
}

export async function handleDeleteMessage({
  chatId,
  messageId,
  isAudio,
  messageType,
  io,
}: {
  chatId: string;
  messageId: string;
  isAudio: boolean;
  messageType?: string;
  io: any;
}) {
  // Mesajı veritabanından kontrol et
  const message = await prisma.message.findUnique({ where: { id: messageId } });
  const isAudioMessage = isAudio || message?.isAudio || messageType === "audio";

  // Sohbetin katılımcılarını bul
  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    include: {
      participants: {
        include: {
          user: {
            select: {
              id: true,
              email: true,
            },
          },
        },
      },
    },
  });
  if (!chat) throw new Error("Sohbet bulunamadı");

  for (const participant of chat.participants) {
    const user = participant.user as { id: string; email: string };
    if (user.email) {
      io.to(user.email).emit("messageDeleted", {
        chatId,
        messageId,
        isAudio: isAudioMessage,
        messageType: isAudioMessage ? "audio" : "text",
      });
    }
  }
}
