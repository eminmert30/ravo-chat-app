"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageUploadTest() {
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setError(null);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setUploadedImage(data.url);
      } else {
        setError(data.error || "Yükleme sırasında bir hata oluştu");
      }
    } catch (err) {
      setError("Yükleme sırasında bir hata oluştu");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {uploading && <p className="text-blue-600">Yükleniyor...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {uploadedImage && (
        <div className="mt-4">
          <p className="mb-2 text-green-600">Resim başarıyla yüklendi!</p>
          <div className="relative w-64 h-64">
            <Image
              src={uploadedImage}
              alt="Yüklenen resim"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
