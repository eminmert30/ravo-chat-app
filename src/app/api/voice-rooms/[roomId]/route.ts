import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(
  request: NextRequest,
  { params }: { params: { roomId: string } }
) {
  try {
    const { roomId } = params;

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
    if (!userId) {
      const session = await getServerSession();
      if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      userId = user?.id;
    }

    if (!userId) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const room = await prisma.voiceRoom.findUnique({
      where: { id: roomId },
      include: {
        host: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (!room) {
      return NextResponse.json({ error: "Room not found" }, { status: 404 });
    }

    // Özel odalar için erişim kontrolü
    if (room.isPrivate) {
      const isParticipant = room.participants.some((p) => p.userId === userId);
      if (!isParticipant) {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
      }
    }

    return NextResponse.json(room);
  } catch (error) {
    console.error("Error fetching voice room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { roomId: string } }
) {
  try {
    console.log("=== DELETE VOICE ROOM ===");
    console.log("Room ID:", params.roomId);

    // JWT ile userId bulmaya çalış
    let userId: string | null = null;
    const authHeader = request.headers.get("authorization");

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        console.log("JWT decoded:", decoded);
        userId = decoded.userId || decoded.id;
        console.log("User ID from token:", userId);
      } catch (error) {
        console.error("JWT verification error:", error);
        return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
      }
    }

    // Eğer JWT yoksa NextAuth session ile devam et
    if (!userId) {
      const session = await getServerSession();
      if (!session?.user?.id) {
        return NextResponse.json(
          { error: "Oturum açmanız gerekiyor" },
          { status: 401 }
        );
      }
      userId = session.user.id;
    }

    // Odayı bul ve host kontrolü yap
    const room = await prisma.voiceRoom.findUnique({
      where: { id: params.roomId },
      include: {
        host: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!room) {
      return NextResponse.json({ error: "Oda bulunamadı" }, { status: 404 });
    }

    // Sadece oda sahibi silebilir
    if (room.hostId !== userId) {
      return NextResponse.json(
        { error: "Bu odayı silme yetkiniz yok" },
        { status: 403 }
      );
    }

    // Odayı sil (participants otomatik silinecek cascade ile)
    await prisma.voiceRoom.delete({
      where: { id: params.roomId },
    });

    console.log("Oda başarıyla silindi:", params.roomId);
    return NextResponse.json({ message: "Oda başarıyla silindi" });
  } catch (error) {
    console.error("Error deleting voice room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
