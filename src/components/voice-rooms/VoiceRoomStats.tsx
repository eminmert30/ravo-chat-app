"use client";

import { Users, Mic, TrendingUp, Clock } from "lucide-react";

interface VoiceRoomStatsProps {
  totalParticipants: number;
  totalRooms: number;
  liveRooms: number;
}

export default function VoiceRoomStats({
  totalParticipants,
  totalRooms,
  liveRooms,
}: VoiceRoomStatsProps) {
  const stats = [
    {
      label: "Toplam Katılımcı",
      value: totalParticipants,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      label: "Aktif Odalar",
      value: liveRooms,
      icon: Mic,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      label: "Toplam Oda",
      value: totalRooms,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      label: "Ortalama Süre",
      value: "45 dk",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border ${stat.borderColor} ${stat.bgColor} hover:shadow-lg transition-all duration-200 group`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-200`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
