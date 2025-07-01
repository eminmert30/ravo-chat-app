import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(request: Request) {
  try {
    // JWT ile userId bulmaya çalış
    let userId: string | null = null;
    const authHeader = request.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        userId = decoded.userId;
      } catch {
        console.log("[API][send] JWT token doğrulama başarısız");
        return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
      }
    }
    // Eğer JWT yoksa NextAuth session ile devam et
    let session = null;
    if (!userId) {
      session = await getServerSession(authOptions);
      if (!session?.user?.id) {
        console.log("[API][send] Oturum yok, userId bulunamadı");
        return NextResponse.json(
          { error: "Oturum açmanız gerekiyor" },
          { status: 401 }
        );
      }
      userId = session.user.id;
    }
    // Parametreleri al
    const { friendId, content, fileUrl, fileType, fileName } =
      await request.json();
    console.log("[API][send] Parametreler:", {
      userId,
      friendId,
      content,
      fileUrl,
      fileType,
      fileName,
    });
    if (!friendId || (!content && !fileUrl)) {
      console.log("[API][send] Eksik parametre!", {
        friendId,
        content,
        fileUrl,
      });
      return NextResponse.json(
        { error: "Alıcı ID ve mesaj içeriği veya dosya gerekli" },
        { status: 400 }
      );
    }
    // Arkadaşlık durumunu kontrol et
    const friendship = await db.friend.findFirst({
      where: {
        OR: [
          { userId: userId, friendId: friendId },
          { userId: friendId, friendId: userId },
        ],
      },
    });
    if (!friendship) {
      console.log("[API][send] Arkadaşlık yok!", { userId, friendId });
      return NextResponse.json(
        { error: "Bu kullanıcıya mesaj gönderme yetkiniz yok" },
        { status: 403 }
      );
    }
    // Chat var mı kontrol et, yoksa oluştur
    let chat = await db.chat.findFirst({
      where: {
        type: "private",
        participants: {
          every: {
            OR: [{ userId: userId }, { userId: friendId }],
          },
        },
      },
    });
    if (!chat) {
      chat = await db.chat.create({
        data: {
          type: "private",
          participants: {
            create: [
              { user: { connect: { id: userId } } },
              { user: { connect: { id: friendId } } },
            ],
          },
        },
      });
    }
    // Mesajı oluştur
    const message = await db.message.create({
      data: {
        senderId: userId,
        chatId: chat.id,
        content: content || "",
        fileUrl,
        fileType,
        fileName,
        isAudio: fileType?.startsWith("audio/") || false,
      },
    });
    console.log("[API][send] Mesaj oluşturuldu:", message);
    return NextResponse.json(message);
  } catch (error) {
    console.error("[API][send] Mesaj gönderme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
