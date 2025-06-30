import Link from 'next/link';

export default function ChatNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-300 mb-6">Aradığınız sayfa bulunamadı.</p>
        <Link
          href="/chat"
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
        >
          Sohbete Dön
        </Link>
      </div>
    </div>
  );
}
