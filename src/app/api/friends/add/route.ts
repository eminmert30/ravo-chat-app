import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { addFriend } from "@/services/friendService";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const { friendId } = await request.json();

    try {
      const friendRequest = await addFriend({
        userId: session.user.id,
        friendId,
      });
      return NextResponse.json(friendRequest);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || "Arkadaş eklenirken bir hata oluştu" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Arkadaş ekleme hatası:", error);
    return NextResponse.json(
      { error: "Arkadaş eklenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
