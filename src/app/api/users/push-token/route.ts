import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
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
    const { userId: bodyUserId, expoPushToken } = await request.json();
    if (!bodyUserId || !expoPushToken) {
      return NextResponse.json(
        { error: "userId ve expoPushToken gerekli" },
        { status: 400 }
      );
    }
    if (userId !== bodyUserId) {
      return NextResponse.json(
        { error: "Kendi tokenını kaydedebilirsin" },
        { status: 403 }
      );
    }
    await db.user.update({
      where: { id: userId },
      data: { expoPushToken },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[USERS_PUSH_TOKEN]", error);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
