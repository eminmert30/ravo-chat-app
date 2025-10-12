import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import authOptions removed
import { getPendingFriendRequests } from "@/services/friendService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
  try {
    // Önce JWT ile userId bulmaya çalış
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
      if (!session?.user?.id) {
        return NextResponse.json(
          { error: "Oturum açmanız gerekiyor" },
          { status: 401 }
        );
      }
      userId = session.user.id;
    }
    try {
      const friendRequests = await getPendingFriendRequests(userId);
      return NextResponse.json(friendRequests);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || "İstekler alınırken bir hata oluştu" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Arkadaşlık istekleri getirme hatası:", error);
    return NextResponse.json(
      { error: "İstekler alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
