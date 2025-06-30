import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(
  request: Request,
  { params }: { params: { friendId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    let userId: string | null = null;

    if (session?.user?.id) {
      userId = session.user.id;
    } else {
      const authHeader = request.headers.get("authorization");
      if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.replace("Bearer ", "");
        try {
          const decoded: any = jwt.verify(token, JWT_SECRET);
          userId = decoded.userId;
        } catch (e) {
          return NextResponse.json(
            { error: "Geçersiz token" },
            { status: 401 }
          );
        }
      }
    }

    if (!userId) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const { friendId } = params;

    // Arkadaşlık kontrolü
    const friendship = await db.friend.findFirst({
      where: {
        OR: [
          { userId, friendId },
          { userId: friendId, friendId: userId },
        ],
      },
    });

    if (!friendship) {
      return NextResponse.json(
        { error: "Bu kullanıcıyla mesajlaşma yetkiniz yok" },
        { status: 403 }
      );
    }

    // Ortak private chat bul
    const chatParticipant = await db.chatParticipant.findFirst({
      where: {
        userId,
        chat: {
          type: "private",
          participants: {
            some: {
              userId: friendId,
            },
          },
        },
      },
      include: {
        chat: true,
      },
    });

    if (!chatParticipant || !chatParticipant.chat) {
      return NextResponse.json(
        { error: "Mesajlaşma geçmişi bulunamadı" },
        { status: 404 }
      );
    }

    // Mesajları getir (chatId üzerinden)
    const messages = await db.message.findMany({
      where: {
        chatId: chatParticipant.chat.id,
      },
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        senderId: true,
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Mesaj getirme hatası:", error);
    return NextResponse.json(
      { error: "Mesajlar alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
