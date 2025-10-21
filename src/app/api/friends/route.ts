import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getFriendsList } from "@/services/friendService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
  try {
    // Authorization header'ını kontrol et
    const authHeader = request.headers.get("authorization");

    let userId: string | null = null;

    // JWT token kontrolü (mobil uygulama için)
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);

      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        userId = decoded.userId || decoded.id;
      } catch (jwtError) {}
    }

    // JWT token yoksa NextAuth session kontrolü (web uygulama için)
    if (!userId) {
      const session = await getServerSession(authOptions);
      userId = session?.user?.id;
    }

    if (!userId) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    try {
      const friends = await getFriendsList(userId);
      return NextResponse.json(friends);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || "Arkadaş listesi alınırken bir hata oluştu" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Arkadaş listesi alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
