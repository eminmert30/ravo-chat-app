import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/lib/db";

// Mesaj gönderme
export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const { chatId, content, fileUrl, fileType, fileName, isAudio } =
      await req.json();
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    // Kullanıcının bu sohbete erişimi var mı kontrol et
    const participant = await prisma.chatParticipant.findUnique({
      where: {
        userId_chatId: {
          userId: user.id,
          chatId: chatId,
        },
      },
    });

    if (!participant) {
      return NextResponse.json(
        { error: "Bu sohbete erişiminiz yok" },
        { status: 403 }
      );
    }

    // Mesajı oluştur
    const message = await prisma.message.create({
      data: {
        content,
        chatId,
        senderId: user.id,
        fileUrl,
        fileType,
        fileName,
        isAudio: isAudio || false,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    // Socket.io ile mesajı diğer kullanıcılara ilet
    // @ts-ignore
    if (global.io) {
      // @ts-ignore
      global.io.emit("newMessage", {
        chatId,
        message,
      });
    }

    return NextResponse.json(message);
  } catch (error) {
    console.error("Mesaj gönderme hatası:", error);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

// Mesajları getirme
export async function GET(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");
    const limit = parseInt(searchParams.get("limit") || "50");
    const before = searchParams.get("before");

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    // Kullanıcının bu sohbete erişimi var mı kontrol et
    const participant = await prisma.chatParticipant.findUnique({
      where: {
        userId_chatId: {
          userId: user.id,
          chatId: chatId!,
        },
      },
    });

    if (!participant) {
      return NextResponse.json(
        { error: "Bu sohbete erişiminiz yok" },
        { status: 403 }
      );
    }

    // Mesajları getir
    const messages = await prisma.message.findMany({
      where: {
        chatId: chatId!,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
      take: limit,
      ...(before
        ? {
            cursor: {
              id: before,
            },
            skip: 1,
          }
        : {}),
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Mesaj getirme hatası:", error);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
