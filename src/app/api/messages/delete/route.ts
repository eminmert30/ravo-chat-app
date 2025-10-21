import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import jwt from "jsonwebtoken";
import { Server as ServerIO } from "socket.io";

// Global type declaration for socket.io
declare global {
  var io: ServerIO | undefined;
}

export async function DELETE(request: Request) {
  console.log("[DELETE API] Starting message deletion process");

  try {
    // JWT token'ı Authorization header'dan al
    const authHeader = request.headers.get("authorization");
    console.log("[DELETE API] Auth header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("[DELETE API] No valid authorization header");
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // "Bearer " kısmını çıkar
    console.log("[DELETE API] JWT token extracted");

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET || "supersecret");
      console.log("[DELETE API] JWT token verified:", {
        userId: decodedToken.userId,
        email: decodedToken.email,
      });
    } catch (jwtError) {
      console.log("[DELETE API] JWT verification failed:", jwtError);
      return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
    }

    const userId = decodedToken.userId;
    if (!userId) {
      console.log("[DELETE API] No userId in token");
      return NextResponse.json(
        { error: "Geçersiz kullanıcı bilgisi" },
        { status: 401 }
      );
    }

    const requestBody = await request.text();
    console.log("[DELETE API] Raw request body:", requestBody);

    let body;
    try {
      body = JSON.parse(requestBody);
      console.log("[DELETE API] Parsed request body:", body);
    } catch (parseError) {
      console.log("[DELETE API] Failed to parse request body:", parseError);
      return NextResponse.json(
        { error: "Geçersiz JSON formatı" },
        { status: 400 }
      );
    }

    const { messageId, isAudio } = body;

    console.log("[DELETE API] Request parameters:", {
      messageId,
      isAudio,
      userId: userId,
    });

    if (!messageId) {
      console.log("[DELETE API] Missing messageId");
      return NextResponse.json(
        { error: "Mesaj ID'si gerekli" },
        { status: 400 }
      );
    }

    // Mesajı bul ve sahibi olduğunu kontrol et
    console.log("[DELETE API] Looking for message in database:", messageId);
    const message = await db.message.findUnique({
      where: { id: messageId },
    });

    console.log("[DELETE API] Database query result:", {
      messageFound: !!message,
      messageId: message?.id,
      messageSenderId: message?.senderId,
      currentUserId: userId,
      isOwner: message?.senderId === userId,
    });

    if (!message) {
      console.log("[DELETE API] Message not found in database");
      return NextResponse.json({ error: "Mesaj bulunamadı" }, { status: 404 });
    }

    if (message.senderId !== userId) {
      console.log("[DELETE API] User not authorized to delete this message:", {
        messageSenderId: message.senderId,
        currentUserId: userId,
      });
      return NextResponse.json(
        { error: "Bu mesajı silme yetkiniz yok" },
        { status: 403 }
      );
    }

    // Mesajı tamamen sil
    console.log("[DELETE API] Deleting message from database:", messageId);
    await db.message.delete({
      where: { id: messageId },
    });
    console.log("[DELETE API] Message successfully deleted from database");

    // Sohbet katılımcılarını bul
    console.log(
      "[DELETE API] Finding chat participants for chatId:",
      message.chatId
    );
    const chat = await db.chat.findUnique({
      where: { id: message.chatId },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
      },
    });

    console.log("[DELETE API] Chat participants found:", {
      chatId: chat?.id,
      participantCount: chat?.participants?.length,
      participants: chat?.participants?.map((p) => ({
        userId: p.user.id,
        userEmail: p.user.email,
      })),
    });

    // Socket.io üzerinden mesaj silme bildirimini gönder
    if (global.io && chat) {
      console.log("[DELETE API] Sending socket notifications to participants");
      chat.participants.forEach((participant) => {
        if (participant.user.email) {
          const socketData = {
            messageId,
            chatId: message.chatId,
          };
          console.log("[DELETE API] Emitting to user:", {
            userEmail: participant.user.email,
            socketData,
          });
          global.io
            .to(participant.user.email)
            .emit("messageDeleted", socketData);
        }
      });
      console.log("[DELETE API] Socket notifications sent");
    } else {
      console.log("[DELETE API] Socket.io not available or chat not found:", {
        hasIo: !!global.io,
        hasChat: !!chat,
      });
    }

    console.log("[DELETE API] Message deletion completed successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[DELETE API] Error during message deletion:", error);
    console.error("[DELETE API] Error details:", {
      name: (error as any)?.name,
      message: (error as any)?.message,
      stack: (error as any)?.stack,
    });
    return NextResponse.json(
      { error: "Mesaj silinirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
