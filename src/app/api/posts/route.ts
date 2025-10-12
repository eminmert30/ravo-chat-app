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
  try {
    console.log("🔍 Getting or creating user:", userInfo);

    if (!userInfo?.email) {
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

    if (!user) {
      console.log("🆕 Creating new user");
      user = await prisma.user.create({
        data: {
          email: userInfo.email,
          name:
            userInfo.name ||
            userInfo.displayName ||
            userInfo.email.split("@")[0],
          image: userInfo.image || null,
        },
        select: { id: true, name: true, email: true, image: true },
      });
    }

    console.log("✅ User found/created:", user);
    return { user };
  } catch (error) {
    console.error("💥 Database error:", error);
    return {
      error: NextResponse.json({ error: "Database error" }, { status: 500 }),
    };
  }
}

export async function GET(request: NextRequest) {
  try {
    // console.log("GET /api/posts - Fetching posts..."); // Debug logu kapat

    // URL'den userId parametresini al
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // console.log("Posts API - userId parameter:", userId); // Debug logu kapat

    // Eğer userId varsa sadece o kullanıcının postları, yoksa tüm postlar
    const whereClause = userId ? { userId: userId } : {};

    const posts = await prisma.post.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        likes: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
          },
        },
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // console.log(
    //   "🔍 [POSTS DEBUG] Fetched posts:",
    //   posts.map((post) => ({
    //     id: post.id,
    //     imageUrl: post.imageUrl,
    //     caption: post.caption,
    //     userId: post.userId,
    //     createdAt: post.createdAt,
    //   }))
    // ); // Debug logu kapat

    // User bilgilerini daha okunaklı hale getir
    const postsWithUserInfo = posts.map((post) => ({
      ...post,
      user: {
        ...post.user,
        displayName:
          post.user.name || post.user.email?.split("@")[0] || "Anonymous User",
      },
    }));

    // console.log(`Found ${postsWithUserInfo.length} posts`); // Debug logu kapat
    return NextResponse.json(postsWithUserInfo);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("🚀 [BACKEND] POST /api/posts - Starting request...");
    console.log("🕐 [BACKEND] Request timestamp:", new Date().toISOString());
    console.log("🌐 [BACKEND] Request URL:", request.url);
    console.log("🔧 [BACKEND] Request method:", request.method);
    console.log(
      "📏 [BACKEND] Request content-length:",
      request.headers.get("content-length")
    );

    // Parse request body
    console.log("📦 [BACKEND] Parsing request body...");
    let body;
    try {
      body = await request.json();
      console.log("✅ [BACKEND] JSON parse başarılı");
      console.log(
        "📋 [BACKEND] Raw request body:",
        JSON.stringify(body, null, 2)
      );
    } catch (parseError) {
      console.error("💥 [BACKEND] JSON parse error:", parseError);
      console.error(
        "💥 [BACKEND] Parse error message:",
        parseError instanceof Error ? parseError.message : "Unknown parse error"
      );
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Extract and validate data
    const {
      imageUrl,
      caption,
      visibility = "public",
      user: userInfo,
      userId,
    } = body;

    console.log("🔍 [BACKEND] Extracted values:");
    console.log("🔍 [BACKEND] - imageUrl:", imageUrl);
    console.log("🔍 [BACKEND] - caption:", caption);
    console.log("🔍 [BACKEND] - visibility:", visibility);
    console.log("🔍 [BACKEND] - userId:", userId);
    console.log("🔍 [BACKEND] - userInfo:", userInfo);

    console.log("👤 [BACKEND] User bilgileri detaylı analiz:");
    console.log("👤 [BACKEND] - hasUserInfo:", !!userInfo);
    console.log("👤 [BACKEND] - userInfo type:", typeof userInfo);
    console.log(
      "👤 [BACKEND] - userInfoKeys:",
      userInfo ? Object.keys(userInfo) : []
    );
    console.log("👤 [BACKEND] - userId:", userId);
    console.log("👤 [BACKEND] - userInfoId:", userInfo?.id);
    console.log("👤 [BACKEND] - userInfoName:", userInfo?.name);
    console.log("👤 [BACKEND] - userInfoEmail:", userInfo?.email);
    console.log("👤 [BACKEND] - userInfoImage:", userInfo?.image);
    console.log("👤 [BACKEND] - userInfo displayName:", userInfo?.displayName);

    // Validation
    if (!imageUrl || typeof imageUrl !== "string" || imageUrl.trim() === "") {
      console.log("⚠️ [BACKEND] Invalid or missing imageUrl");
      console.log("⚠️ [BACKEND] - imageUrl value:", imageUrl);
      console.log("⚠️ [BACKEND] - imageUrl type:", typeof imageUrl);
      console.log("⚠️ [BACKEND] - imageUrl trimmed:", imageUrl?.trim());
      return NextResponse.json(
        { error: "Valid Image URL is required" },
        { status: 400 }
      );
    }

    console.log(
      "✅ [BACKEND] Validation passed, proceeding with user lookup..."
    );

    // Eğer userId varsa direkt o kullanıcıyı kullan, yoksa user bilgilerini kullan
    let finalUser;

    if (userId) {
      // userId varsa direkt o kullanıcıyı bul
      console.log("�� [BACKEND] userId ile kullanıcı aranıyor:", userId);
      console.log("🔍 [BACKEND] userId type:", typeof userId);
      console.log("🔍 [BACKEND] userId length:", userId?.length);

      try {
        finalUser = await prisma.user.findUnique({
          where: { id: userId },
          select: { id: true, name: true, email: true, image: true },
        });
        console.log("✅ [BACKEND] Database query completed");
      } catch (dbError) {
        console.error("💥 [BACKEND] Database query error:", dbError);
        console.error(
          "💥 [BACKEND] Database error message:",
          dbError instanceof Error ? dbError.message : "Unknown database error"
        );
        throw dbError;
      }

      if (!finalUser) {
        console.log("❌ [BACKEND] User not found with userId:", userId);
        console.log(
          "❌ [BACKEND] Database returned null/undefined for userId:",
          userId
        );
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      console.log("✅ [BACKEND] Kullanıcı bulundu:");
      console.log("✅ [BACKEND] - id:", finalUser.id);
      console.log("✅ [BACKEND] - name:", finalUser.name);
      console.log("✅ [BACKEND] - email:", finalUser.email);
      console.log("✅ [BACKEND] - image:", finalUser.image);
    } else {
      console.log("⚠️ [BACKEND] userId yok, user bilgileri kullanılacak");
      // userId yoksa user bilgilerini kullan
      const defaultUserInfo = {
        email: "default@user.com",
        name: "Default User",
        displayName: "Default User",
      };

      const finalUserInfo =
        userInfo && userInfo.email ? userInfo : defaultUserInfo;

      console.log("👤 [BACKEND] Using user info:");
      console.log("👤 [BACKEND] - email:", finalUserInfo.email);
      console.log("👤 [BACKEND] - name:", finalUserInfo.name);
      console.log("👤 [BACKEND] - isDefault:", !userInfo || !userInfo.email);

      // Get or create user
      console.log("👤 [BACKEND] Getting/creating user...");
      const userResult = await getOrCreateUser(finalUserInfo);
      if (userResult.error) {
        console.log("❌ [BACKEND] Failed to get/create user");
        return userResult.error;
      }

      finalUser = userResult.user;
    }

    console.log("✅ [BACKEND] Final user ready:");
    console.log("✅ [BACKEND] - id:", finalUser.id);
    console.log("✅ [BACKEND] - name:", finalUser.name);
    console.log("✅ [BACKEND] - email:", finalUser.email);
    console.log("✅ [BACKEND] - image:", finalUser.image);

    // Create post
    console.log("📝 [BACKEND] Post oluşturuluyor...");
    console.log("📝 [BACKEND] Post data:");
    console.log("📝 [BACKEND] - imageUrl:", imageUrl.trim());
    console.log("📝 [BACKEND] - caption:", caption?.trim() || null);
    console.log("📝 [BACKEND] - visibility:", visibility);
    console.log("📝 [BACKEND] - userId:", finalUser.id);

    let post;
    try {
      post = await prisma.post.create({
        data: {
          imageUrl: imageUrl.trim(),
          caption: caption?.trim() || null,
          visibility,
          userId: finalUser.id,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
          likes: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          comments: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
          },
          _count: {
            select: {
              likes: true,
              comments: true,
            },
          },
        },
      });
      console.log("✅ [BACKEND] Post database insert completed");
    } catch (postError) {
      console.error("💥 [BACKEND] Post creation error:", postError);
      console.error(
        "💥 [BACKEND] Post error message:",
        postError instanceof Error ? postError.message : "Unknown post error"
      );
      throw postError;
    }

    console.log("📝 [BACKEND] Post oluşturuldu:");
    console.log("📝 [BACKEND] - postId:", post.id);
    console.log("📝 [BACKEND] - userId:", post.userId);
    console.log("📝 [BACKEND] - userName:", post.user?.name);
    console.log("📝 [BACKEND] - userEmail:", post.user?.email);
    console.log("📝 [BACKEND] - userImage:", post.user?.image);
    console.log("📝 [BACKEND] - imageUrl:", post.imageUrl);
    console.log("📝 [BACKEND] - caption:", post.caption);
    console.log("📝 [BACKEND] - visibility:", post.visibility);
    console.log("📝 [BACKEND] - createdAt:", post.createdAt);

    // Add display name
    const postWithUserInfo = {
      ...post,
      user: {
        ...post.user,
        displayName:
          post.user.name ||
          `${post.user.email?.split("@")[0]}` ||
          "Anonymous User",
      },
    };

    console.log("🎉 [BACKEND] Post created successfully!");
    console.log("📊 [BACKEND] Created by:", postWithUserInfo.user.displayName);
    console.log(
      "📊 [BACKEND] Final response data:",
      JSON.stringify(postWithUserInfo, null, 2)
    );

    return NextResponse.json(postWithUserInfo, { status: 201 });
  } catch (error) {
    console.error("💥 [BACKEND] Unexpected error in POST /api/posts:");
    console.error(
      "💥 [BACKEND] Error message:",
      error instanceof Error ? error.message : "Unknown error"
    );
    console.error(
      "💥 [BACKEND] Error stack:",
      error instanceof Error ? error.stack : undefined
    );
    console.error("💥 [BACKEND] Error type:", typeof error);
    console.error("💥 [BACKEND] Error constructor:", error?.constructor?.name);

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
