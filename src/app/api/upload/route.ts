import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = [
  // Ses Dosyaları
  "audio/mp3",
  "audio/mpeg",
  "audio/webm",
  "audio/wav",
  // Resimler
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  // PDF
  "application/pdf",
  // Video
  "video/mp4",
  "video/webm",
  // Metin
  "text/plain",
  "text/csv",
  "application/json",
  // Ofis Dosyaları
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  // Arşiv Dosyaları
  "application/zip",
  "application/x-zip",
  "application/x-zip-compressed",
  "application/octet-stream", // Bazı tarayıcılar ZIP'i bu şekilde tanımlıyor
  "application/x-rar-compressed",
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
    }

    // Dosya tipi kontrolü
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: `Bu dosya türü desteklenmiyor. Desteklenen türler: ${ALLOWED_FILE_TYPES.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Dosya boyutu kontrolü
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Dosya boyutu 10MB'dan büyük olamaz" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Uploads klasörünü oluştur (eğer yoksa)
    const uploadDir = join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Dosya adını benzersiz yap ve güvenli hale getir
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const originalName = file.name.toLowerCase().replace(/[^a-z0-9.]/g, "-");
    const extension = originalName.split(".").pop() || "";
    const filename = `${uniqueSuffix}-${originalName}`;

    // Dosyayı kaydet
    const filePath = join(uploadDir, filename);

    try {
      await writeFile(filePath, buffer);

      return NextResponse.json({
        success: true,
        url: `/uploads/${filename}`,
        type: file.type,
        name: file.name,
      });
    } catch (error) {
      console.error("Dosya yazma hatası:", error);
      return NextResponse.json(
        { error: "Dosya kaydedilirken bir hata oluştu" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Genel hata:", error);
    return NextResponse.json(
      { error: "Dosya yüklenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
