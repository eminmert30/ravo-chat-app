import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import authOptions removed
import { sendFriendRequest } from "@/services/friendService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Arkadaşlık isteği gönderme
export async function POST(req: Request) {
  try {
    // Önce JWT ile userId bulmaya çalış
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
    const { receiverId } = await req.json();
    try {
      const result = await sendFriendRequest({
        senderId: userId,
        receiverId,
      });
      return NextResponse.json(result);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || "Arkadaşlık isteği gönderilemedi" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Arkadaşlık isteği gönderme hatası:", error);
    return NextResponse.json(
      { error: "Arkadaşlık isteği gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
