import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getFriendsList } from "@/services/friendService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
  try {
    console.log("[Friends API] GET request başladı");

    // Authorization header'ını kontrol et
    const authHeader = request.headers.get("authorization");
    console.log("[Friends API] Auth header:", authHeader);

    let userId: string | null = null;

    // JWT token kontrolü (mobil uygulama için)
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);
      console.log("[Friends API] JWT token alındı");

      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        console.log("[Friends API] JWT decoded:", decoded);
        userId = decoded.userId || decoded.id;
        console.log("[Friends API] JWT userId:", userId);
      } catch (jwtError) {
        console.log("[Friends API] JWT verify error:", jwtError);
      }
    }

    // JWT token yoksa NextAuth session kontrolü (web uygulama için)
    if (!userId) {
      console.log("[Friends API] NextAuth session kontrol ediliyor");
      const session = await getServerSession(authOptions);
      console.log("[Friends API] Session:", session);
      userId = session?.user?.id;
      console.log("[Friends API] Session userId:", userId);
    }

    if (!userId) {
      console.log("[Friends API] HATA: Kullanıcı kimliği bulunamadı");
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    console.log("[Friends API] Friends listesi alınıyor, userId:", userId);
    try {
      const friends = await getFriendsList(userId);
      console.log("[Friends API] Friends alındı:", friends);
      return NextResponse.json(friends);
    } catch (error: any) {
      console.log("[Friends API] getFriendsList error:", error);
      return NextResponse.json(
        { error: error.message || "Arkadaş listesi alınırken bir hata oluştu" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("[Friends API] Genel hata:", error);
    return NextResponse.json(
      { error: "Arkadaş listesi alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
