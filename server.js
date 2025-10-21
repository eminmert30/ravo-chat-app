const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

// Socket.IO server
const io = new Server(httpServer, {
  path: "/api/socket",
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  });
});

// Socket.IO event handlers
io.on("connection", (socket) => {
  console.log(`[SOCKET] Client connected: ${socket.id}`);

  socket.on("userConnected", (email, userId) => {
    if (userId) {
      socket.join(userId);
      console.log(
        `[SOCKET] userConnected: socket ${socket.id} joined room (userId): ${userId}`
      );
    }
    if (email) {
      socket.join(email);
      console.log(
        `[SOCKET] userConnected: socket ${socket.id} joined room (email): ${email}`
      );
    }
  });

  socket.on("userOnline", async (data) => {
    console.log("[SOCKET] userOnline event received", {
      data,
      socketId: socket.id,
    });
    // Broadcast to friends
    socket.broadcast.emit("userOnline", { userId: data.userId });
  });

  socket.on("userOffline", async (data) => {
    console.log("[SOCKET] userOffline event received", {
      data,
      socketId: socket.id,
    });
    // Broadcast to friends
    socket.broadcast.emit("userOffline", { userId: data.userId });
  });

  socket.on("sendMessage", async (data) => {
    console.log("[SOCKET] sendMessage event received", {
      data,
      socketId: socket.id,
    });
    // Broadcast message
    socket.broadcast.emit("newMessage", data);
  });

  socket.on("disconnect", () => {
    console.log(`[SOCKET] Client disconnected: ${socket.id}`);
  });
});

// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "RavoChat Server is running!",
    timestamp: new Date().toISOString(),
    status: "online",
  });
});

// Mobile login endpoint
app.post("/api/mobile-login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email ve şifre gerekli",
      });
    }

    // Basit login kontrolü (gerçek authentication için database gerekli)
    if (email === "yusa@gmail.com" && password === "123456") {
      res.json({
        success: true,
        message: "Giriş başarılı",
        id: "1",
        email: email,
        name: "Yusa",
        token: "mock-jwt-token",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Email veya şifre hatalı",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Sunucu hatası",
    });
  }
});

// Mobile register endpoint
app.post("/api/mobile-register", (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "Tüm alanlar gerekli",
      });
    }

    res.json({
      success: true,
      message: "Kayıt başarılı",
      id: "2",
      email: email,
      name: name,
      token: "mock-jwt-token",
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Sunucu hatası",
    });
  }
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({
    message: "API test endpoint çalışıyor",
    timestamp: new Date().toISOString(),
  });
});

// Friends endpoint
app.get("/api/friends", (req, res) => {
  try {
    // Mock friends data
    const friends = [
      {
        id: "2",
        name: "Ahmet",
        email: "ahmet@gmail.com",
        isOnline: true,
        lastSeen: new Date().toISOString(),
        avatar: "https://via.placeholder.com/50",
      },
      {
        id: "3",
        name: "Mehmet",
        email: "mehmet@gmail.com",
        isOnline: false,
        lastSeen: new Date(Date.now() - 3600000).toISOString(),
        avatar: "https://via.placeholder.com/50",
      },
      {
        id: "4",
        name: "Ayşe",
        email: "ayse@gmail.com",
        isOnline: true,
        lastSeen: new Date().toISOString(),
        avatar: "https://via.placeholder.com/50",
      },
    ];

    res.json({
      success: true,
      friends: friends,
    });
  } catch (error) {
    console.error("Friends error:", error);
    res.status(500).json({
      success: false,
      message: "Arkadaşlar yüklenemedi",
    });
  }
});

// Chats endpoint
app.get("/api/chats", (req, res) => {
  try {
    // Mock chats data
    const chats = [
      {
        id: "1",
        name: "Ahmet",
        lastMessage: "Merhaba, nasılsın?",
        timestamp: new Date().toISOString(),
        unreadCount: 2,
        avatar: "https://via.placeholder.com/50",
      },
      {
        id: "2",
        name: "Mehmet",
        lastMessage: "Görüşürüz!",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        unreadCount: 0,
        avatar: "https://via.placeholder.com/50",
      },
      {
        id: "3",
        name: "Ayşe",
        lastMessage: "Teşekkürler!",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        unreadCount: 1,
        avatar: "https://via.placeholder.com/50",
      },
    ];

    res.json({
      success: true,
      chats: chats,
    });
  } catch (error) {
    console.error("Chats error:", error);
    res.status(500).json({
      success: false,
      message: "Sohbetler yüklenemedi",
    });
  }
});

// Voice rooms endpoint
app.get("/api/voice-rooms", (req, res) => {
  try {
    // Mock voice rooms data
    const voiceRooms = [
      {
        id: "1",
        name: "Genel Sohbet",
        description: "Herkesin katılabileceği genel sohbet odası",
        category: "Genel",
        participantCount: 5,
        maxParticipants: 20,
        isActive: true,
      },
      {
        id: "2",
        name: "Müzik Odası",
        description: "Müzik dinleyenler için özel oda",
        category: "Müzik",
        participantCount: 3,
        maxParticipants: 10,
        isActive: true,
      },
      {
        id: "3",
        name: "Oyun Odası",
        description: "Oyun oynayanlar için oda",
        category: "Oyun",
        participantCount: 8,
        maxParticipants: 15,
        isActive: true,
      },
    ];

    res.json({
      success: true,
      voiceRooms: voiceRooms,
    });
  } catch (error) {
    console.error("Voice rooms error:", error);
    res.status(500).json({
      success: false,
      message: "Sesli odalar yüklenemedi",
    });
  }
});

// User profile endpoint
app.get("/api/user/profile", (req, res) => {
  try {
    // Mock user profile data
    const profile = {
      id: "1",
      name: "Yusa",
      email: "yusa@gmail.com",
      avatar: "https://via.placeholder.com/150",
      isOnline: true,
      lastSeen: new Date().toISOString(),
      bio: "RavoChat kullanıcısı",
      friendsCount: 3,
      chatsCount: 3,
    };

    res.json({
      success: true,
      profile: profile,
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({
      success: false,
      message: "Profil yüklenemedi",
    });
  }
});

// Error handling
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

httpServer.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  console.log(`📦 Express + Socket.IO`);
});
