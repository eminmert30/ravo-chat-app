import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
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
    // friendId parametresini al
    const { searchParams } = new URL(request.url);
    const friendId = searchParams.get("friendId");
    if (!friendId) {
      return NextResponse.json(
        { error: "friendId parametresi gerekli" },
        { status: 400 }
      );
    }
    const user = await db.user.findUnique({ where: { id: friendId } });
    if (!user) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }
    return NextResponse.json({ lastSeen: user.lastSeen });
  } catch (error) {
    console.error("[USERS_LAST_SEEN]", error);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
