"use client";

import { useState } from "react";
import {
  Mic,
  MicOff,
  Users,
  Clock,
  Crown,
  MoreVertical,
  Play,
  Pause,
} from "lucide-react";
import Image from "next/image";

interface VoiceRoom {
  id: string;
  name: string;
  description: string;
  category: string;
  currentParticipants: number;
  maxParticipants: number;
  isLive: boolean;
  host: {
    id: string;
    name: string;
    avatar: string;
  };
  participants: Array<{
    id: string;
    name: string;
    avatar: string;
    isSpeaking: boolean;
    isMuted: boolean;
  }>;
  tags: string[];
  createdAt: Date;
}

interface VoiceRoomCardProps {
  room: VoiceRoom;
}

export default function VoiceRoomCard({ room }: VoiceRoomCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      music: "bg-gradient-to-r from-pink-500 to-rose-500",
      social: "bg-gradient-to-r from-orange-500 to-amber-500",
      gaming: "bg-gradient-to-r from-green-500 to-emerald-500",
      education: "bg-gradient-to-r from-blue-500 to-cyan-500",
      lifestyle: "bg-gradient-to-r from-purple-500 to-pink-500",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gradient-to-r from-gray-500 to-gray-600"
    );
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      music: "🎵",
      social: "☕",
      gaming: "🎮",
      education: "📚",
      lifestyle: "💖",
    };
    return icons[category as keyof typeof icons] || "🎤";
  };

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Live indicator */}
      {room.isLive && (
        <div className="absolute top-3 left-3 z-10">
          <div className="flex items-center gap-1 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            CANLI
          </div>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className={`px-2 py-1 text-white text-xs font-medium rounded-full ${getCategoryColor(
            room.category
          )}`}
        >
          {getCategoryIcon(room.category)}
        </div>
      </div>

      {/* Room image/background */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Participants avatars */}
        <div className="absolute bottom-4 left-4 flex -space-x-2">
          {room.participants.slice(0, 4).map((participant, index) => (
            <div
              key={participant.id}
              className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs font-medium text-gray-700">
                {participant.name.charAt(0)}
              </div>
              {participant.isSpeaking && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
              {participant.isMuted && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <MicOff className="w-1.5 h-1.5 text-white" />
                </div>
              )}
            </div>
          ))}
          {room.participants.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-gray-600 text-white text-xs font-medium flex items-center justify-center border-2 border-white">
              +{room.participants.length - 4}
            </div>
          )}
        </div>

        {/* More options */}
        <button className="absolute top-3 right-3 p-1 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <MoreVertical className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Room content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
              {room.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {room.description}
            </p>
          </div>
        </div>

        {/* Host info */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <Crown className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-gray-600">
            <span className="font-medium">{room.host.name}</span> tarafından
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>
                {room.currentParticipants}/{room.maxParticipants}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>45 dk</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {room.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Join button */}
        <button className="w-full mt-4 btn-primary flex items-center justify-center gap-2 group-hover:shadow-glow transition-all duration-200">
          <Play className="w-4 h-4" />
          Odaya Katıl
        </button>
      </div>

      {/* Hover overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      )}
    </div>
  );
}
