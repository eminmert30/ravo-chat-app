import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join("/");

    if (!filePath) {
      return NextResponse.json({ error: "Invalid file path" }, { status: 400 });
    }

    // Uploads klasörünün tam yolu
    const uploadsDir = join(process.cwd(), "public", "uploads");
    const fullPath = join(uploadsDir, filePath);

    // Güvenlik kontrolü - sadece uploads klasörü içindeki dosyalara erişim
    if (!fullPath.startsWith(uploadsDir)) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    // Dosya var mı kontrol et
    if (!existsSync(fullPath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Dosya istatistikleri
    const stats = await stat(fullPath);

    // MIME type'ı belirle
    const mimeType = getMimeType(fullPath);

    // Dosyayı oku
    const fileBuffer = await readFile(fullPath);

    // Response headers
    const headers = new Headers();
    headers.set("Content-Type", mimeType);
    headers.set("Content-Length", stats.size.toString());
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    headers.set("Access-Control-Allow-Origin", "*");

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("File serve error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// MIME type belirleme fonksiyonu
function getMimeType(filePath: string): string {
  const extension = filePath.split(".").pop()?.toLowerCase();

  const mimeTypes: { [key: string]: string } = {
    // Resimler
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",

    // Ses dosyaları
    mp3: "audio/mpeg",
    wav: "audio/wav",
    m4a: "audio/mp4",
    webm: "audio/webm",

    // Video dosyaları
    mp4: "video/mp4",
    webm: "video/webm",

    // Diğer
    pdf: "application/pdf",
    txt: "text/plain",
    json: "application/json",
    zip: "application/zip",
  };

  return mimeTypes[extension || ""] || "application/octet-stream";
}
