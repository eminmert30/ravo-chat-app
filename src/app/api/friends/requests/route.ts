import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getPendingFriendRequests } from "@/services/friendService";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }
    try {
      const friendRequests = await getPendingFriendRequests(session.user.id);
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
