"use client";

import {
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ImageUploadTest from "./components/ImageUploadTest";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Ravo<span className="text-[hsl(280,100%,70%)]">Chat</span>
        </h1>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <h3 className="text-2xl font-bold">
              <ChatBubbleLeftRightIcon className="h-6 w-6 inline-block mr-2" />
              Anlık Sohbet
            </h3>
            <div className="text-lg">
              Arkadaşlarınızla anında bağlantı kurun ve sohbet edin
            </div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <h3 className="text-2xl font-bold">
              <ShieldCheckIcon className="h-6 w-6 inline-block mr-2" />
              Güvenli
            </h3>
            <div className="text-lg">
              Konuşmalarınız korunur ve tamamen güvende kalır
            </div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <h3 className="text-2xl font-bold">
              <BoltIcon className="h-6 w-6 inline-block mr-2" />
              Hızlı
            </h3>
            <div className="text-lg">
              Yıldırım hızında mesaj iletimi ve yanıtlar
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Giriş Yap
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-white/10 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}
