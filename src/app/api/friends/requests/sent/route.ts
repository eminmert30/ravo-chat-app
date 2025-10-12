import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// // import authOptions removed
import { getSentFriendRequests } from "@/services/friendService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: Request) {
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
  if (!userId) {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }
    userId = session.user.id;
  }
  try {
    const sentRequests = await getSentFriendRequests(userId);
    return NextResponse.json(sentRequests);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "İstekler alınırken bir hata oluştu" },
      { status: 400 }
    );
  }
}
