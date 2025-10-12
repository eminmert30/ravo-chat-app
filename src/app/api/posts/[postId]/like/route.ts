import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Singleton Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Helper function to get or create user
async function getOrCreateUser(userInfo: any) {
  console.log("🔍 [BACKEND] getOrCreateUser called with:", {
    email: userInfo?.email,
    name: userInfo?.name,
    hasImage: !!userInfo?.image,
    imageUrl: userInfo?.image,
  });

  if (!userInfo?.email) {
    console.log("❌ [BACKEND] No email provided");
    return {
      error: NextResponse.json(
        { error: "User email is required" },
        { status: 400 }
      ),
    };
  }

  let user = await prisma.user.findUnique({
    where: { email: userInfo.email },
    select: { id: true, name: true, email: true, image: true },
  });

  console.log("🔍 [BACKEND] Existing user found:", {
    found: !!user,
    userId: user?.id,
    userName: user?.name,
    userEmail: user?.email,
    hasUserImage: !!user?.image,
    userImageUrl: user?.image,
  });

  if (!user) {
    const userName =
      userInfo.name || userInfo.displayName || userInfo.email.split("@")[0];
    const userImage = userInfo.image || null; // Avatar yoksa null döndür, frontend'de View-based avatar kullanılacak

    console.log("➕ [BACKEND] Creating new user:", {
      email: userInfo.email,
      name: userName,
      hasImage: !!userImage,
      imageUrl: userImage,
    });

    user = await prisma.user.create({
      data: {
        email: userInfo.email,
        name: userName,
        image: userImage,
      },
      select: { id: true, name: true, email: true, image: true },
    });

    console.log("✅ [BACKEND] New user created:", {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      hasUserImage: !!user.image,
      userImageUrl: user.image,
    });
  } else {
    // Mevcut kullanıcının image'ı yoksa güncelle
    if (!user.image) {
      const userName = user.name || user.email.split("@")[0];
      const userImage = null; // Avatar yoksa null döndür, frontend'de View-based avatar kullanılacak

      console.log("🔄 [BACKEND] Updating existing user image:", {
        userId: user.id,
        userName,
        hasImage: !!userImage,
        imageUrl: userImage,
      });

      user = await prisma.user.update({
        where: { id: user.id },
        data: { image: userImage },
        select: { id: true, name: true, email: true, image: true },
      });

      console.log("✅ [BACKEND] User image updated:", {
        userId: user.id,
        userName: user.name,
        hasUserImage: !!user.image,
        userImageUrl: user.image,
      });
    } else {
      console.log("ℹ️ [BACKEND] User already has image, no update needed");
    }
  }

  return { user };
}

export async function POST(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;
    const body = await request.json();

    console.log("❤️ Like request:", { postId, body });

    // Frontend'den kullanıcı bilgisi gelmiş olmalı
    if (!body?.userInfo || !body.userInfo.email) {
      return NextResponse.json(
        { error: "Kullanıcı bilgisi gerekli" },
        { status: 400 }
      );
    }

    const userInfo = body.userInfo;

    console.log("📥 [BACKEND] Received userInfo:", {
      email: userInfo?.email,
      name: userInfo?.name,
      hasImage: !!userInfo?.image,
      imageUrl: userInfo?.image,
    });

    // Avatar yoksa null olarak bırak, frontend'de View-based avatar kullanılacak
    if (!userInfo.image) {
      console.log("🔄 [BACKEND] Setting image to null (no image provided)");
      userInfo.image = null;
    } else {
      console.log("🖼️ [BACKEND] User provided image:", userInfo.image);
    }

    console.log("👤 [BACKEND] Final userInfo:", {
      email: userInfo?.email,
      name: userInfo?.name,
      hasImage: !!userInfo?.image,
      imageUrl: userInfo?.image,
    });

    // Get or create user
    const userResult = await getOrCreateUser(userInfo);
    if (userResult.error) return userResult.error;

    // PostId string olarak geldiği için direct kullan
    const existingLike = await prisma.like.findFirst({
      where: {
        userId: userResult.user.id,
        postId: postId,
      },
    });

    if (existingLike) {
      // Unlike - remove the like
      await prisma.like.delete({
        where: { id: existingLike.id },
      });

      console.log("💔 Post unliked");

      // Return updated like count
      const likeCount = await prisma.like.count({
        where: { postId: postId },
      });

      return NextResponse.json({
        success: true,
        isLiked: false,
        likeCount: likeCount,
      });
    } else {
      // Like - create new like
      await prisma.like.create({
        data: {
          userId: userResult.user.id,
          postId: postId,
        },
      });

      console.log("❤️ Post liked");

      // Return updated like count
      const likeCount = await prisma.like.count({
        where: { postId: postId },
      });

      return NextResponse.json({
        success: true,
        isLiked: true,
        likeCount: likeCount,
      });
    }
  } catch (error) {
    console.error("💥 Like error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
