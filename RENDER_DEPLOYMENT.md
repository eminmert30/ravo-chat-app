# Render.com Deployment Guide

## 🚀 RavoChat App - Render.com Deployment

Bu rehber, RavoChat uygulamanızı Render.com'a deploy etmek için gerekli adımları içerir.

## 📋 Ön Gereksinimler

1. **Render.com hesabı** (ücretsiz plan yeterli)
2. **GitHub repository** (kodunuz GitHub'da olmalı)
3. **PostgreSQL database** (Render.com'da oluşturulacak)

## 🔧 Deployment Adımları

### 1. GitHub Repository Hazırlığı

```bash
# Tüm değişiklikleri commit edin
git add .
git commit -m "Prepare for Render.com deployment"
git push origin main
```

### 2. Render.com'da Yeni Web Service Oluşturma

1. **Render.com Dashboard**'a gidin
2. **"New +"** butonuna tıklayın
3. **"Web Service"** seçin
4. GitHub repository'nizi bağlayın

### 3. Service Konfigürasyonu

#### Temel Ayarlar:

- **Name**: `ravochat-backend`
- **Environment**: `Node`
- **Region**: `Oregon (US West)`
- **Branch**: `main`
- **Root Directory**: `/` (boş bırakın)

#### Build & Deploy Ayarları:

- **Build Command**:
  ```bash
  npm install && npx prisma generate && npx prisma db push && npm run build
  ```
- **Start Command**:
  ```bash
  npm start
  ```

### 4. Environment Variables

Render.com dashboard'da **Environment** sekmesinde şu değişkenleri ekleyin:

```env
NODE_ENV=production
NEXTAUTH_URL=https://ravochat-backend.onrender.com
NEXTAUTH_SECRET=your-secret-key-here
JWT_SECRET=your-jwt-secret-here
NEXT_PUBLIC_SITE_URL=https://ravochat-backend.onrender.com
```

### 5. PostgreSQL Database Oluşturma

1. **Render.com Dashboard**'da **"New +"** → **"PostgreSQL"**
2. **Database Name**: `ravochat-db`
3. **Plan**: `Starter` (ücretsiz)
4. **Region**: `Oregon (US West)`

### 6. Database Bağlantısı

Database oluşturulduktan sonra:

1. Database sayfasında **"Connect"** butonuna tıklayın
2. **External Database URL**'i kopyalayın
3. Web service'inizde **Environment Variables**'a ekleyin:
   ```env
   DATABASE_URL=postgresql://username:password@host:port/database
   ```

### 7. Database Migration

İlk deploy'dan sonra database'i migrate etmek için:

1. **Render.com Shell**'e gidin
2. Web service'inizde **"Shell"** sekmesine tıklayın
3. Şu komutları çalıştırın:
   ```bash
   npx prisma db push
   npm run db:seed
   ```

## 🔍 Troubleshooting

### Yaygın Sorunlar:

1. **Build Hatası**:

   - `package.json`'da `engines` field'ı ekleyin:

   ```json
   "engines": {
     "node": "18.x"
   }
   ```

2. **Database Bağlantı Hatası**:

   - `DATABASE_URL`'in doğru olduğundan emin olun
   - SSL bağlantısı gerekebilir

3. **Socket.IO Hatası**:
   - CORS ayarlarını kontrol edin
   - WebSocket bağlantısının açık olduğundan emin olun

### Log Kontrolü:

```bash
# Render.com dashboard'da "Logs" sekmesinden logları kontrol edin
```

## 📱 Mobil Uygulama Güncellemesi

Deploy tamamlandıktan sonra mobil uygulamada:

1. `RovoChatApp/src/config.ts` dosyasını güncelleyin
2. Production URL'lerini kullanın
3. Uygulamayı yeniden build edin

## 🎯 Son Kontroller

Deploy tamamlandıktan sonra:

- [ ] Web uygulaması açılıyor mu?
- [ ] API endpoints çalışıyor mu?
- [ ] Database bağlantısı var mı?
- [ ] Socket.IO bağlantısı çalışıyor mu?
- [ ] File upload çalışıyor mu?

## 🔄 Otomatik Deploy

Render.com otomatik olarak:

- GitHub'daki her push'ta yeniden deploy eder
- Environment variables'ları korur
- Database bağlantısını sürdürür

## 📞 Destek

Sorun yaşarsanız:

1. Render.com logs'larını kontrol edin
2. GitHub issues'da sorun bildirin
3. Render.com support'a başvurun

---

**Not**: İlk deploy 5-10 dakika sürebilir. Sabırlı olun! 🚀
