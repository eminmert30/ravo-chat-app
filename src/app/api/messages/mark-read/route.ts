import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
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
        return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
      }
    }
    // Eğer JWT yoksa NextAuth session ile devam et
    let session = null;
    if (!userId) {
      session = await getServerSession(authOptions);
      if (!session?.user?.id) {
        return NextResponse.json(
          { error: "Oturum açmanız gerekiyor" },
          { status: 401 }
        );
      }
      userId = session.user.id;
    }

    const { chatId } = await request.json();

    if (!chatId) {
      return NextResponse.json({ error: "Chat ID gerekli" }, { status: 400 });
    }

    // Belirtilen chat'teki başkalarından gelen okunmamış mesajları okundu olarak işaretle
    await prisma.message.updateMany({
      where: {
        chatId: chatId,
        senderId: {
          not: userId, // Kendi mesajlarını değil, başkalarının mesajlarını işaretle
        },
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mesajları okundu olarak işaretleme hatası:", error);
    return NextResponse.json(
      { error: "Mesajlar işaretlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
