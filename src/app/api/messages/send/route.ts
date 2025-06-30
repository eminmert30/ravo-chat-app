import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const { receiverId, content, fileUrl, fileType, fileName } =
      await request.json();

    if (!receiverId || (!content && !fileUrl)) {
      return NextResponse.json(
        { error: "Alıcı ID ve mesaj içeriği veya dosya gerekli" },
        { status: 400 }
      );
    }

    // Arkadaşlık durumunu kontrol et
    const friendship = await db.friendship.findFirst({
      where: {
        OR: [
          {
            userId: session.user.id,
            friendId: receiverId,
          },
          {
            userId: receiverId,
            friendId: session.user.id,
          },
        ],
        status: "ACCEPTED",
      },
    });

    if (!friendship) {
      return NextResponse.json(
        { error: "Bu kullanıcıya mesaj gönderme yetkiniz yok" },
        { status: 403 }
      );
    }

    // Mesajı oluştur
    const message = await db.message.create({
      data: {
        senderId: session.user.id,
        receiverId: receiverId,
        content: content || "",
        fileUrl,
        fileType,
        fileName,
        isAudio: fileType?.startsWith("audio/") || false,
      },
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error("Mesaj gönderme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
