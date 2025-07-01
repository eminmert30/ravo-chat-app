import { db } from "@/lib/db";
import { io } from "@/lib/socket";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function addFriend({
  userId,
  friendId,
}: {
  userId: string;
  friendId: string;
}) {
  if (!friendId) {
    throw new Error("Arkadaş ID'si gerekli");
  }
  if (friendId === userId) {
    throw new Error("Kendinizi arkadaş olarak ekleyemezsiniz");
  }
  // Arkadaşlık isteği zaten var mı kontrol et
  const existingRequest = await db.friendRequest.findFirst({
    where: {
      OR: [
        { senderId: userId, receiverId: friendId },
        { senderId: friendId, receiverId: userId },
      ],
    },
  });
  if (existingRequest) {
    throw new Error("Bu kullanıcı ile zaten bir arkadaşlık isteği mevcut");
  }
  // Alıcı kullanıcıyı bul
  const receiver = await db.user.findUnique({ where: { id: friendId } });
  if (!receiver) {
    throw new Error("Kullanıcı bulunamadı");
  }
  // Yeni arkadaşlık isteği oluştur
  const friendRequest = await db.friendRequest.create({
    data: {
      senderId: userId,
      receiverId: friendId,
      status: "pending",
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
  // Socket.io ile bildirim gönder
  if (receiver.email) {
    io.to(receiver.email).emit("friendRequest", {
      type: "friendRequest",
      data: friendRequest,
    });
  }
  return friendRequest;
}

export async function sendFriendRequest({
  senderId,
  receiverId,
}: {
  senderId: string;
  receiverId: string;
}) {
  // Gönderen ve alıcıyı bul
  const sender = await db.user.findUnique({
    where: { id: senderId },
    select: { id: true, name: true, email: true },
  });
  const receiver = await db.user.findUnique({
    where: { id: receiverId },
    select: { id: true, name: true, email: true },
  });
  if (!sender) throw new Error("Gönderen kullanıcı bulunamadı");
  if (!receiver) throw new Error("Alıcı kullanıcı bulunamadı");
  // Zaten arkadaş mı kontrol et
  const existingFriend = await db.friend.findFirst({
    where: {
      OR: [
        { userId: senderId, friendId: receiverId },
        { userId: receiverId, friendId: senderId },
      ],
    },
  });
  if (existingFriend) throw new Error("Zaten arkadaşsınız");
  // Bekleyen istek var mı kontrol et
  const existingRequest = await db.friendRequest.findFirst({
    where: {
      AND: [
        {
          OR: [
            { senderId: senderId, receiverId: receiverId },
            { senderId: receiverId, receiverId: senderId },
          ],
        },
        { status: "pending" },
      ],
    },
  });
  if (existingRequest) throw new Error("Zaten bir arkadaşlık isteği mevcut");
  // Reddedilmiş eski isteği güncelle veya yeni istek oluştur
  const friendRequest = await db.friendRequest.upsert({
    where: {
      senderId_receiverId: {
        senderId: senderId,
        receiverId: receiverId,
      },
    },
    update: {
      status: "pending",
    },
    create: {
      senderId: senderId,
      receiverId: receiverId,
      status: "pending",
    },
  });
  // Socket.io ile bildirim gönder
  if (receiver.email && global.io) {
    global.io.to(receiver.email).emit("friendRequest", {
      type: "friendRequest",
      data: {
        requestId: friendRequest.id,
        sender,
        receiver,
      },
    });
  }
  return {
    message: "Arkadaşlık isteği başarıyla gönderildi",
    request: {
      ...friendRequest,
      sender,
      receiver,
    },
  };
}

export async function respondFriendRequest({
  userId,
  requestId,
  action,
  session,
}: {
  userId: string;
  requestId: string;
  action: "accept" | "reject";
  session?: any;
}) {
  // İsteği bul
  const friendRequest = await db.friendRequest.findFirst({
    where: {
      id: requestId,
      receiverId: userId,
      status: "pending",
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  if (!friendRequest) throw new Error("Arkadaşlık isteği bulunamadı");
  if (action === "accept") {
    await db.$transaction([
      db.friendRequest.update({
        where: { id: requestId },
        data: { status: "accepted" },
      }),
      db.friend.create({
        data: {
          userId: userId,
          friendId: friendRequest.senderId,
        },
      }),
      db.friend.create({
        data: {
          userId: friendRequest.senderId,
          friendId: userId,
        },
      }),
    ]);
    if (global.io && friendRequest.sender.email) {
      global.io.to(friendRequest.sender.email).emit("friendRequestAccepted", {
        type: "friendRequestAccepted",
        data: {
          requestId,
          acceptedBy: {
            id: userId,
            name: session?.user?.name || "",
            email: session?.user?.email || "",
          },
        },
      });
      global.io.to(friendRequest.sender.email).emit("refreshFriendsList");
    }
    return { message: "Arkadaşlık isteği kabul edildi" };
  } else {
    await db.friendRequest.update({
      where: { id: requestId },
      data: { status: "rejected" },
    });
    if (global.io && friendRequest.sender.email) {
      global.io.to(friendRequest.sender.email).emit("friendRequestRejected", {
        type: "friendRequestRejected",
        data: { requestId },
      });
    }
    return { message: "Arkadaşlık isteği reddedildi" };
  }
}

export async function getFriendsList(userId: string) {
  // Arkadaşları getir
  const friends = await db.friend.findMany({
    where: {
      OR: [{ userId: userId }, { friendId: userId }],
    },
    include: {
      friend: true,
      user: true,
    },
  });
  // Arkadaş listesini düzenle ve tekrar eden kayıtları engelle
  const uniqueFriends = new Map();
  friends.forEach((friendship) => {
    const isFriend = friendship.userId === userId;
    const otherUser = isFriend ? friendship.friend : friendship.user;
    if (!uniqueFriends.has(otherUser.id)) {
      uniqueFriends.set(otherUser.id, {
        id: otherUser.id,
        name: otherUser.name,
        email: otherUser.email,
        isOnline: otherUser.isOnline || false,
      });
    }
  });
  return Array.from(uniqueFriends.values());
}

export async function getPendingFriendRequests(userId: string) {
  // Bekleyen arkadaşlık isteklerini getir
  const friendRequests = await db.friendRequest.findMany({
    where: {
      receiverId: userId,
      status: "pending",
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
  return friendRequests;
}
