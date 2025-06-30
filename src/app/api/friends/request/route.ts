import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Arkadaşlık isteği gönderme
export async function POST(req: Request) {
  try {
    console.log("Arkadaşlık isteği endpoint başladı");

    // JWT ile userId bulmaya çalış
    let userId: string | null = null;
    let userEmail: string | null = null;
    const authHeader = req.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        userId = decoded.userId;
        userEmail = decoded.email;
      } catch {
        return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
      }
    }
    // Eğer JWT yoksa NextAuth session ile devam et
    let session = null;
    if (!userId && !userEmail) {
      session = await getServerSession(authOptions);
      console.log("Session durumu:", session);
      if (!session?.user?.email) {
        console.log("Oturum hatası: Kullanıcı oturumu bulunamadı");
        return NextResponse.json(
          { error: "Oturum açmanız gerekiyor" },
          { status: 401 }
        );
      }
      userEmail = session.user.email;
    }
    const { receiverId } = await req.json();
    console.log("Alıcı ID:", receiverId);

    // Gönderen kullanıcıyı bul
    let sender = null;
    if (userId) {
      sender = await db.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true },
      });
    } else if (userEmail) {
      sender = await db.user.findUnique({
        where: { email: userEmail },
        select: { id: true, name: true, email: true },
      });
    }

    console.log("Gönderen kullanıcı:", sender);

    if (!sender) {
      console.log("Gönderen kullanıcı bulunamadı hatası");
      return NextResponse.json(
        { error: "Gönderen kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    // Alıcı kullanıcıyı bul
    const receiver = await db.user.findUnique({
      where: { id: receiverId },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    console.log("Alıcı kullanıcı:", receiver);

    if (!receiver) {
      console.log("Alıcı kullanıcı bulunamadı hatası");
      return NextResponse.json(
        { error: "Alıcı kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    // Zaten arkadaş mı kontrol et
    const existingFriend = await db.friend.findFirst({
      where: {
        OR: [
          { userId: sender.id, friendId: receiverId },
          { userId: receiverId, friendId: sender.id },
        ],
      },
    });

    console.log("Mevcut arkadaşlık:", existingFriend);

    if (existingFriend) {
      console.log("Zaten arkadaş hatası");
      return NextResponse.json(
        { error: "Zaten arkadaşsınız" },
        { status: 400 }
      );
    }

    // Bekleyen istek var mı kontrol et
    const existingRequest = await db.friendRequest.findFirst({
      where: {
        AND: [
          {
            OR: [
              { senderId: sender.id, receiverId: receiverId },
              { senderId: receiverId, receiverId: sender.id },
            ],
          },
          { status: "pending" },
        ],
      },
    });

    console.log("Mevcut istek:", existingRequest);

    if (existingRequest) {
      console.log("Bekleyen istek hatası");
      return NextResponse.json(
        { error: "Zaten bir arkadaşlık isteği mevcut" },
        { status: 400 }
      );
    }

    // Reddedilmiş eski isteği güncelle veya yeni istek oluştur
    const friendRequest = await db.friendRequest.upsert({
      where: {
        senderId_receiverId: {
          senderId: sender.id,
          receiverId: receiverId,
        },
      },
      update: {
        status: "pending",
      },
      create: {
        senderId: sender.id,
        receiverId: receiverId,
        status: "pending",
      },
    });

    console.log("Oluşturulan istek:", friendRequest);

    // Socket.io üzerinden bildirim gönder
    // @ts-ignore - global.io tanımı için
    if (global.io) {
      // @ts-ignore
      global.io.to(receiver.email).emit("friendRequest", {
        type: "friendRequest",
        data: {
          requestId: friendRequest.id,
          sender: {
            id: sender.id,
            name: sender.name,
            email: sender.email,
          },
          receiver: {
            id: receiver.id,
            name: receiver.name,
            email: receiver.email,
          },
        },
      });
    }

    return NextResponse.json({
      message: "Arkadaşlık isteği başarıyla gönderildi",
      request: {
        ...friendRequest,
        sender,
        receiver,
      },
    });
  } catch (error: any) {
    console.error("Arkadaşlık isteği gönderme hatası:", error);
    return NextResponse.json(
      { error: "Arkadaşlık isteği gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
