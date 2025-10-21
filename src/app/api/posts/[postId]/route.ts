import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function DELETE(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    console.log(
      "🗑️ [BACKEND] DELETE /api/posts/[postId] - Post silme isteği başladı"
    );
    console.log("🗑️ [BACKEND] Post ID:", params.postId);

    // Request body'den userId'yi al
    const body = await request.json();
    const { userId } = body;

    console.log("🗑️ [BACKEND] Request body:", { userId });

    if (!userId) {
      console.log("❌ [BACKEND] userId eksik");
      return NextResponse.json(
        { error: "Kullanıcı ID'si gerekli" },
        { status: 400 }
      );
    }

    // Post'u bul ve kullanıcı kontrolü yap
    const post = await prisma.post.findUnique({
      where: { id: params.postId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!post) {
      console.log("❌ [BACKEND] Post bulunamadı:", params.postId);
      return NextResponse.json({ error: "Post bulunamadı" }, { status: 404 });
    }

    console.log("🔍 [BACKEND] Post bulundu:");
    console.log("🔍 [BACKEND] - Post ID:", post.id);
    console.log("🔍 [BACKEND] - Post userId:", post.userId);
    console.log("🔍 [BACKEND] - Request userId:", userId);
    console.log("🔍 [BACKEND] - Post user:", post.user);

    // Kullanıcı kendi postunu siliyor mu kontrol et
    if (post.userId !== userId) {
      console.log("❌ [BACKEND] Yetkisiz silme denemesi:");
      console.log("❌ [BACKEND] - Post sahibi:", post.userId);
      console.log("❌ [BACKEND] - Silmeye çalışan:", userId);
      return NextResponse.json(
        { error: "Bu postu silme yetkiniz yok" },
        { status: 403 }
      );
    }

    // Önce post'a bağlı like'ları sil
    console.log("🗑️ [BACKEND] Post like'ları siliniyor...");
    await prisma.like.deleteMany({
      where: { postId: params.postId },
    });

    // Post'a bağlı yorumları sil
    console.log("🗑️ [BACKEND] Post yorumları siliniyor...");
    await prisma.comment.deleteMany({
      where: { postId: params.postId },
    });

    // Post'u sil
    console.log("🗑️ [BACKEND] Post siliniyor...");
    await prisma.post.delete({
      where: { id: params.postId },
    });

    console.log("✅ [BACKEND] Post başarıyla silindi:", params.postId);

    return NextResponse.json(
      { message: "Post başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("💥 [BACKEND] Post silme hatası:", error);
    console.error(
      "💥 [BACKEND] Error message:",
      error instanceof Error ? error.message : "Unknown error"
    );
    console.error(
      "💥 [BACKEND] Error stack:",
      error instanceof Error ? error.stack : undefined
    );

    return NextResponse.json(
      {
        error: "Post silinirken bir hata oluştu",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
