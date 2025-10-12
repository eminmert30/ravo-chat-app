"use client";

import { Search, Plus, Mic, MicOff, Settings } from "lucide-react";
import { useSession } from "next-auth/react";

interface VoiceRoomHeaderProps {
  onCreateRoom: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function VoiceRoomHeader({
  onCreateRoom,
  searchQuery,
  onSearchChange,
}: VoiceRoomHeaderProps) {
  const { data: session } = useSession();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Title and search */}
          <div className="flex items-center gap-6 flex-1">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sesli Odalar
              </h1>
              <p className="text-sm text-gray-600">
                Arkadaşlarınızla sesli sohbet edin
              </p>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Oda ara..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-3">
            {/* User status */}
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {session?.user?.name || "Misafir"}
              </span>
            </div>

            {/* Create room button */}
            <button
              onClick={onCreateRoom}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Oda Oluştur
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
