import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import authOptions removed
import { db } from "@/lib/db";
import jwt from "jsonwebtoken";
import { io } from "@/lib/socket";
import { getFriendsList } from "@/services/friendService";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function PATCH(request: Request) {
  try {
    // Önce JWT token ile userId bul
    let userId: string | null = null;
    const authHeader = request.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        userId = decoded.userId;
      } catch {
        // Token hatalıysa session ile devam et
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
    const { image } = await request.json();
    if (!image) {
      return NextResponse.json(
        { error: "Resim URL'si gerekli" },
        { status: 400 }
      );
    }
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: { image },
      select: { id: true, name: true, email: true, image: true },
    });

    // Arkadaşlara socket ile bildirim gönder
    try {
      const friends = await getFriendsList(userId);
      friends.forEach((friend: any) => {
        if (friend.email && io && typeof io.to === "function") {
          io.to(friend.email).emit("profileImageUpdated", {
            userId,
            image,
          });
        }
      });
    } catch (e) {
      console.error("Profil fotoğrafı güncelleme socket emit hatası:", e);
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    return NextResponse.json(
      { error: "Profil fotoğrafı güncellenemedi" },
      { status: 500 }
    );
  }
}
