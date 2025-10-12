import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// // import authOptions removed
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(request: NextRequest) {
  try {
    console.log("=== VOICE ROOMS GET REQUEST ===");

    // JWT token kontrolü ekleyelim
    const authHeader = request.headers.get("authorization");
    console.log("Auth header:", authHeader ? "Var" : "Yok");

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      console.log("Token alındı, uzunluk:", token.length);

      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        console.log("JWT decoded successfully:", decoded);
        console.log("User ID from JWT:", decoded.userId);
      } catch (error) {
        console.error("JWT verification failed:", error);
      }
    }

    // JWT ile userId bulmaya çalış
    let userId: string | null = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        console.log("JWT decoded successfully:", decoded);
        userId = decoded.userId || decoded.id;
        console.log("User ID from JWT:", userId);
      } catch (error) {
        console.error("JWT verification failed:", error);
      }
    }

    // Eğer JWT yoksa NextAuth session ile devam et
    if (!userId) {
      const session = await getServerSession();
      console.log("Session user:", session?.user?.email);

      if (!session?.user?.id) {
        console.log("No session found, returning 401");
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      userId = session.user.id;
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const where: any = {
      isActive: true,
    };

    if (category && category !== "all") {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { tags: { contains: search } },
      ];
    }

    const rooms = await prisma.voiceRoom.findMany({
      where,
      include: {
        host: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        participants: {
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
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log("Bulunan odalar:", rooms.length);
    return NextResponse.json(rooms);
  } catch (error) {
    console.error("Error fetching voice rooms:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // JWT ile userId bulmaya çalış
    let userId: string | null = null;
    const authHeader = request.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        console.log("JWT decoded:", decoded);
        userId = decoded.userId || decoded.id;
        console.log("User ID from token:", userId);
      } catch (error) {
        console.error("JWT verification error:", error);
        return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
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

    const body = await request.json();
    const { name, description, category, maxParticipants, isPrivate, tags } =
      body;

    if (!name || !category) {
      return NextResponse.json(
        { error: "Name and category are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const room = await prisma.voiceRoom.create({
      data: {
        name,
        description: description || "",
        category,
        maxParticipants: maxParticipants || 10,
        isPrivate: isPrivate || false,
        tags: JSON.stringify(tags || []),
        hostId: user.id,
        participants: {
          create: {
            userId: user.id,
            isHost: true,
            isMuted: false,
            isDeafened: false,
          },
        },
      },
      include: {
        host: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        participants: {
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
      },
    });

    console.log("Oda oluşturuldu:", room.id, room.name);
    return NextResponse.json(room, { status: 201 });
  } catch (error) {
    console.error("Error creating voice room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
