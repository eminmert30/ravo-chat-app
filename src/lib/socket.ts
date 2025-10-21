import { io, Socket } from "socket.io-client";

// Socket.IO client instance
let socket: Socket | null = null;

// Socket.IO bağlantısını başlat
export function connectSocket() {
  if (!socket) {
    const socketUrl =
      process.env.NODE_ENV === "production"
        ? "https://ravo-chat-app.onrender.com"
        : "http://localhost:3000";

    socket = io(socketUrl, {
      path: "/api/socket",
      transports: ["websocket", "polling"],
      autoConnect: true,
    });

    // Connection events
    socket.on("connect", () => {
      console.log("[SOCKET] Connected:", socket?.id);
    });

    socket.on("disconnect", () => {
      console.log("[SOCKET] Disconnected");
    });

    socket.on("connect_error", (error) => {
      console.error("[SOCKET] Connection error:", error);
    });
  }

  return socket;
}

// Socket.IO bağlantısını kapat
export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

// Socket instance'ını al
export function getSocket(): Socket | null {
  return socket;
}

// Socket.IO server instance'ını al (server-side için)
export function getSocketIOServer() {
  return socket;
}

// Kullanıcı bağlantısını bildir
export function userConnected(email: string, userId: string) {
  const socket = getSocket();
  if (socket) {
    socket.emit("userConnected", email, userId);
  }
}

// Kullanıcı online durumunu bildir
export function userOnline(userId: string) {
  const socket = getSocket();
  if (socket) {
    socket.emit("userOnline", { userId });
  }
}

// Kullanıcı offline durumunu bildir
export function userOffline(userId: string) {
  const socket = getSocket();
  if (socket) {
    socket.emit("userOffline", { userId });
  }
}

// Mesaj gönder
export function sendMessage(data: {
  content: string;
  senderId: string;
  receiverId: string;
  chatRoomId?: string;
  receiverEmail?: string;
}) {
  const socket = getSocket();
  if (socket) {
    socket.emit("sendMessage", data);
  }
}

// Event listener'ları ekle
export function onUserOnline(callback: (data: { userId: string }) => void) {
  const socket = getSocket();
  if (socket) {
    socket.on("userOnline", callback);
  }
}

export function onUserOffline(callback: (data: { userId: string }) => void) {
  const socket = getSocket();
  if (socket) {
    socket.on("userOffline", callback);
  }
}

export function onNewMessage(callback: (message: any) => void) {
  const socket = getSocket();
  if (socket) {
    socket.on("newMessage", callback);
  }
}

// Event listener'ları kaldır
export function offUserOnline(callback: (data: { userId: string }) => void) {
  const socket = getSocket();
  if (socket) {
    socket.off("userOnline", callback);
  }
}

export function offUserOffline(callback: (data: { userId: string }) => void) {
  const socket = getSocket();
  if (socket) {
    socket.off("userOffline", callback);
  }
}

export function offNewMessage(callback: (message: any) => void) {
  const socket = getSocket();
  if (socket) {
    socket.off("newMessage", callback);
  }
}
