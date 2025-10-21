// Render.com için basit server.js
// Standalone mode'da Next.js kendi server'ını çalıştırır
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

console.log(`🚀 Starting server on ${HOST}:${PORT}`);
console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
console.log(`📦 Next.js Standalone Mode`);

// Next.js standalone server'ı otomatik olarak başlatılır
// Bu dosya sadece port ve host konfigürasyonu için
