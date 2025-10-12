import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import authOptions removed
import { respondFriendRequest } from "@/services/friendService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(request: Request) {
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
    let session = null;
    if (!userId) {
      session = await getServerSession();
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
    try {
      const result = await respondFriendRequest({
        userId,
        requestId,
        action,
        session,
      });
      return NextResponse.json(result);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || "Arkadaşlık isteği yanıtlanamadı" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Arkadaşlık isteği yanıtlama hatası:", error);
    return NextResponse.json(
      { error: "İstek yanıtlanırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
