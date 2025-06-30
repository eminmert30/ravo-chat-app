import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-white mb-2">404</h2>
          <h3 className="text-xl font-semibold text-white mb-4">Sayfa Bulunamadı</h3>
          <p className="text-gray-400 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
          <Link
            href="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
