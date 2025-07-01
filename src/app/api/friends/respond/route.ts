import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { respondFriendRequest } from "@/services/friendService";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
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
        userId: session.user.id,
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
