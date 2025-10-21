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
        message: "Email ve şifre gerekli"
      });
    }

    // Basit login kontrolü (gerçek authentication için database gerekli)
    if (email === "yusa@gmail.com" && password === "123456") {
      res.json({
        success: true,
        message: "Giriş başarılı",
        user: {
          id: "1",
          email: email,
          name: "Yusa"
        },
        token: "mock-jwt-token"
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Email veya şifre hatalı"
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Sunucu hatası"
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
        message: "Tüm alanlar gerekli"
      });
    }

    res.json({
      success: true,
      message: "Kayıt başarılı",
      user: {
        id: "2",
        email: email,
        name: name
      },
      token: "mock-jwt-token"
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Sunucu hatası"
    });
  }
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({
    message: "API test endpoint çalışıyor",
    timestamp: new Date().toISOString()
  });
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
