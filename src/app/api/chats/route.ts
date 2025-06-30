import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
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
        return new NextResponse("Geçersiz token", { status: 401 });
      }
    }
    // Eğer JWT yoksa NextAuth session ile devam et
    let session = null;
    if (!userId) {
      session = await getServerSession(authOptions);
      if (!session?.user?.id) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
      userId = session.user.id;
    }
    // Kullanıcının sohbetlerini getir
    const chats = await db.chat.findMany({
      where: {
        participants: { some: { userId: userId } },
      },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
        messages: {
          take: 1,
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return NextResponse.json(chats);
  } catch (error) {
    console.error("[CHATS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
