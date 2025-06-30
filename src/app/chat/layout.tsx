'use client';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-10" />
      <div className="relative h-screen">
        {children}
      </div>
    </div>
  );
}
