import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
  try {
    // Önce NextAuth session kontrolü
    let userId: string | null = null;
    const session = await getServerSession(authOptions);
    if (session?.user?.id) {
      userId = session.user.id;
    } else {
      // JWT ile kontrol
      const authHeader = request.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.replace("Bearer ", "");
        try {
          const decoded: any = jwt.verify(token, JWT_SECRET);
          userId = decoded.userId;
        } catch (e) {
          return NextResponse.json(
            { error: "Geçersiz token" },
            { status: 401 }
          );
        }
      }
    }
    if (!userId) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }
    // Arkadaşları getir
    const friends = await db.friend.findMany({
      where: {
        OR: [{ userId: userId }, { friendId: userId }],
      },
      include: {
        friend: true,
        user: true,
      },
    });
    // Arkadaş listesini düzenle ve tekrar eden kayıtları engelle
    const uniqueFriends = new Map();
    friends.forEach((friendship) => {
      const isFriend = friendship.userId === userId;
      const otherUser = isFriend ? friendship.friend : friendship.user;
      if (!uniqueFriends.has(otherUser.id)) {
        uniqueFriends.set(otherUser.id, {
          id: otherUser.id,
          name: otherUser.name,
          email: otherUser.email,
          isOnline: otherUser.isOnline || false,
        });
      }
    });
    const formattedFriends = Array.from(uniqueFriends.values());
    return NextResponse.json(formattedFriends);
  } catch (error) {
    console.error("Arkadaş listesi getirme hatası:", error);
    return NextResponse.json(
      { error: "Arkadaş listesi alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
