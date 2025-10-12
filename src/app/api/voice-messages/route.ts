import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: "Ses dosyası bulunamadı" },
        { status: 400 }
      );
    }

    // Dosya adını oluştur
    const timestamp = Date.now();
    const fileName = `voice_message_${timestamp}.m4a`;
    const filePath = join(process.cwd(), "public", "uploads", fileName);

    // Dosyayı kaydet
    const bytes = await audioFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // URL'i döndür
    const audioUrl = `/uploads/${fileName}`;

    return NextResponse.json({ audioUrl });
  } catch (error) {
    console.error("Ses mesajı yükleme hatası:", error);
    return NextResponse.json(
      { error: "Ses mesajı yüklenirken hata oluştu" },
      { status: 500 }
    );
  }
}
