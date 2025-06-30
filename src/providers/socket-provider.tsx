'use client';

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function SocketProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user?.email) return;

    // Socket bağlantısını kur
    const socket = io(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', {
      path: '/api/socket',
    });

    // Bağlantı kurulduğunda
    socket.on('connect', () => {
      console.log('Socket.io bağlantısı kuruldu');
      socket.emit('userConnected', session.user.email);
    });

    // Arkadaşlık isteği alındığında
    socket.on('friendRequest', (data) => {
      if (data.data.receiver.email === session.user.email) {
        toast.custom((t) => (
          <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Yeni Arkadaşlık İsteği
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {data.data.sender.name} size arkadaşlık isteği gönderdi!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
              >
                Tamam
              </button>
            </div>
          </div>
        ), {
          duration: 5000,
          position: 'top-right',
        });
      }
    });

    // Cleanup
    return () => {
      socket.disconnect();
    };
  }, [session]);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
