import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { addFriend } from "@/services/friendService";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }
    const token = authHeader.split(" ")[1];
    let userId;
    try {
      const payload = jwt.verify(token, JWT_SECRET) as any;
      userId = payload.userId;
    } catch {
      return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
    }
    const { friendId } = await request.json();
    try {
      const friendRequest = await addFriend({
        userId,
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
