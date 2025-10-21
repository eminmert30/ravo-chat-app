"use client";

import { useState } from "react";
import {
  Mic,
  MicOff,
  Headphones,
  HeadphonesOff,
  Crown,
  Volume2,
  VolumeX,
  MoreVertical,
} from "lucide-react";

interface VoiceRoomParticipantProps {
  participant: {
    id: string;
    name: string;
    avatar: string;
    isSpeaking: boolean;
    isMuted: boolean;
    isHost: boolean;
    isDeafened: boolean;
    volume: number;
  };
  isCurrentUser: boolean;
  onMuteToggle?: (participantId: string) => void;
  onDeafenToggle?: (participantId: string) => void;
  onVolumeChange?: (participantId: string, volume: number) => void;
}

export default function VoiceRoomParticipant({
  participant,
  isCurrentUser,
  onMuteToggle,
  onDeafenToggle,
  onVolumeChange,
}: VoiceRoomParticipantProps) {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div className="group relative p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-200">
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
            <HeadphonesOff className="w-3 h-3 text-white" />
          </div>
        )}

        {participant.isSpeaking && !participant.isMuted && (
          <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-pulse"></div>
        )}

        {/* Speaking waves */}
        {participant.isSpeaking && !participant.isMuted && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-end gap-1 h-4">
            <div className="w-1 bg-green-500 rounded-full voice-wave"></div>
            <div className="w-1 bg-green-500 rounded-full voice-wave"></div>
            <div className="w-1 bg-green-500 rounded-full voice-wave"></div>
            <div className="w-1 bg-green-500 rounded-full voice-wave"></div>
          </div>
        )}
      </div>

      {/* Name */}
      <div className="text-center mb-3">
        <p className="text-sm font-medium text-white truncate">
          {participant.name}
          {isCurrentUser && (
            <span className="text-xs text-blue-400 ml-1">(Sen)</span>
          )}
        </p>
        {participant.isHost && (
          <p className="text-xs text-yellow-400">Oda Sahibi</p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        {!isCurrentUser && (
          <>
            <button
              onClick={() => onMuteToggle?.(participant.id)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                participant.isMuted
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              title={participant.isMuted ? "Sesi Aç" : "Sesi Kapat"}
            >
              {participant.isMuted ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => onDeafenToggle?.(participant.id)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                participant.isDeafened
                  ? "bg-gray-500 hover:bg-gray-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              title={participant.isDeafened ? "Sesi Aç" : "Sesi Kapat"}
            >
              {participant.isDeafened ? (
                <HeadphonesOff className="w-4 h-4" />
              ) : (
                <Headphones className="w-4 h-4" />
              )}
            </button>

            <div className="relative">
              <button
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                title="Ses Seviyesi"
              >
                {participant.isDeafened ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Volume slider */}
              {showVolumeSlider && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={participant.volume}
                    onChange={(e) =>
                      onVolumeChange?.(participant.id, parseInt(e.target.value))
                    }
                    className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    disabled={participant.isDeafened}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {isCurrentUser && (
          <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200">
            <MoreVertical className="w-4 h-4" />
          </button>
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
  );
}
