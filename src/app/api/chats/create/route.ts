import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req: Request) {
  try {
    // JWT ile userId bulmaya çalış
    let userId: string | null = null;
    const authHeader = req.headers.get("authorization");
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
    const { friendId } = await req.json();

    // Kullanıcıyı bul
    const user = await db.user.findUnique({ where: { id: userId } });

    if (!user) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı" },
        { status: 404 }
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
      return NextResponse.json(
        { error: "Bu kullanıcı ile arkadaş değilsiniz" },
        { status: 403 }
      );
    }

    // Mevcut sohbeti kontrol et
    const existingChat = await db.chat.findFirst({
      where: {
        type: "private",
        AND: [
          { participants: { some: { userId: userId } } },
          { participants: { some: { userId: friendId } } },
        ],
      },
    });

    if (existingChat) {
      return NextResponse.json(existingChat);
    }

    // Yeni sohbet oluştur
    const newChat = await db.chat.create({
      data: {
        type: "private",
        participants: {
          create: [{ userId: userId }, { userId: friendId }],
        },
      },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
      },
    });

    return NextResponse.json(newChat);
  } catch (error) {
    console.error("[CHAT_CREATE]", error);
    return NextResponse.json(
      { error: "Sohbet oluşturulurken bir hata oluştu" },
      { status: 500 }
    );
  }
}
