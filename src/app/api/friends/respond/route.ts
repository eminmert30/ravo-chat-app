import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { io } from "@/lib/socket";
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
    const { requestId, action } = await request.json();
    if (!requestId || !action) {
      return NextResponse.json(
        { error: "İstek ID ve aksiyon gerekli" },
        { status: 400 }
      );
    }
    if (!["accept", "reject"].includes(action)) {
      return NextResponse.json({ error: "Geçersiz aksiyon" }, { status: 400 });
    }
    // İsteği bul
    const friendRequest = await db.friendRequest.findFirst({
      where: {
        id: requestId,
        receiverId: userId,
        status: "pending",
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    if (!friendRequest) {
      return NextResponse.json(
        { error: "Arkadaşlık isteği bulunamadı" },
        { status: 404 }
      );
    }
    if (action === "accept") {
      await db.$transaction([
        db.friendRequest.update({
          where: { id: requestId },
          data: { status: "accepted" },
        }),
        db.friend.create({
          data: {
            userId: userId,
            friendId: friendRequest.senderId,
          },
        }),
        db.friend.create({
          data: {
            userId: friendRequest.senderId,
            friendId: userId,
          },
        }),
      ]);
      if (global.io) {
        global.io.to(friendRequest.sender.email).emit("friendRequestAccepted", {
          type: "friendRequestAccepted",
          data: {
            requestId,
            acceptedBy: {
              id: userId,
              name: session?.user?.name || "",
              email: session?.user?.email || "",
            },
          },
        });
        global.io.to(friendRequest.sender.email).emit("refreshFriendsList");
        global.io.to(friendRequest.sender.email).emit("refreshFriendsList");
      }
      return NextResponse.json({ message: "Arkadaşlık isteği kabul edildi" });
    } else {
      await db.friendRequest.update({
        where: { id: requestId },
        data: { status: "rejected" },
      });
      if (global.io) {
        global.io.to(friendRequest.sender.email).emit("friendRequestRejected", {
          type: "friendRequestRejected",
          data: { requestId },
        });
      }
      return NextResponse.json({ message: "Arkadaşlık isteği reddedildi" });
    }
  } catch (error) {
    console.error("Arkadaşlık isteği yanıtlama hatası:", error);
    return NextResponse.json(
      { error: "İstek yanıtlanırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
