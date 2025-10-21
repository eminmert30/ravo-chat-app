"use client";

import { useState, useEffect } from "react";
import {
  Mic,
  MicOff,
  Headphones,
  Settings,
  Users,
  MessageCircle,
  Share,
  MoreVertical,
  Crown,
  Volume2,
  VolumeX,
} from "lucide-react";

interface Participant {
  id: string;
  name: string;
  avatar: string;
  isSpeaking: boolean;
  isMuted: boolean;
  isHost: boolean;
  isDeafened: boolean;
  volume: number;
}

interface VoiceRoomInterfaceProps {
  roomId: string;
  roomName: string;
  participants: Participant[];
  onLeave: () => void;
}

export default function VoiceRoomInterface({
  roomId,
  roomName,
  participants,
  onLeave,
}: VoiceRoomInterfaceProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [showParticipants, setShowParticipants] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [volume, setVolume] = useState(80);

  const host = participants.find((p) => p.isHost);
  const speakingParticipants = participants.filter(
    (p) => p.isSpeaking && !p.isMuted
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{roomName}</h1>
              <p className="text-sm text-gray-300">
                {participants.length} katılımcı • {speakingParticipants.length}{" "}
                konuşuyor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <Share className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Participants Grid */}
        <div
          className={`flex-1 p-6 transition-all duration-300 ${
            showParticipants ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className={`relative p-4 rounded-2xl transition-all duration-200 ${
                  participant.isSpeaking
                    ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"
                    : "bg-white/10 border border-white/10 hover:bg-white/20"
                }`}
              >
                {/* Avatar */}
                <div className="relative mb-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-semibold text-lg">
                    {participant.name.charAt(0)}
                  </div>

                  {/* Status indicators */}
                  {participant.isHost && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  )}

                  {participant.isMuted && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <MicOff className="w-3 h-3 text-white" />
                    </div>
                  )}

                  {participant.isDeafened && (
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                      <VolumeX className="w-3 h-3 text-white" />
                    </div>
                  )}

                  {participant.isSpeaking && !participant.isMuted && (
                    <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-pulse"></div>
                  )}
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="text-sm font-medium text-white truncate">
                    {participant.name}
                  </p>
                  {participant.isHost && (
                    <p className="text-xs text-yellow-400">Oda Sahibi</p>
                  )}
                </div>

                {/* Volume indicator */}
                {participant.isSpeaking && !participant.isMuted && (
                  <div className="mt-2">
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div
                        className="bg-green-500 h-1 rounded-full transition-all duration-200"
                        style={{ width: `${participant.volume}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Panel */}
        {showChat && (
          <div className="w-80 bg-black/20 backdrop-blur-md border-l border-white/10">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">Sohbet</h3>
            </div>
            <div className="flex-1 p-4">
              <div className="text-center text-gray-400 text-sm">
                Sohbet özelliği yakında gelecek...
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="bg-black/20 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {/* Left controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-4 rounded-xl transition-all duration-200 ${
                isMuted
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {isMuted ? (
                <MicOff className="w-6 h-6" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={() => setIsDeafened(!isDeafened)}
              className={`p-4 rounded-xl transition-all duration-200 ${
                isDeafened
                  ? "bg-gray-500 hover:bg-gray-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {isDeafened ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Headphones className="w-6 h-6" />
              )}
            </button>

            <div className="flex items-center gap-2">
              {isDeafened ? (
                <VolumeX className="w-5 h-5 text-gray-400" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                disabled={isDeafened}
              />
            </div>
          </div>

          {/* Center - Room info */}
          <div className="text-center">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Bağlı</span>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowParticipants(!showParticipants)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                showParticipants
                  ? "bg-primary text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <Users className="w-5 h-5" />
            </button>

            <button
              onClick={() => setShowChat(!showChat)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                showChat
                  ? "bg-primary text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            <button
              onClick={onLeave}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors duration-200"
            >
              Odadan Ayrıl
            </button>
          </div>
        </div>
      </div>

      {/* Speaking indicator */}
      {speakingParticipants.length > 0 && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
          {speakingParticipants.length} kişi konuşuyor
        </div>
      )}
    </div>
  );
}
