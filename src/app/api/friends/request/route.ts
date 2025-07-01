import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { sendFriendRequest } from "@/services/friendService";

// Arkadaşlık isteği gönderme
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }
    const { receiverId } = await req.json();
    try {
      const result = await sendFriendRequest({
        senderId: session.user.id,
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
