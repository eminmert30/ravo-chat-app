'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import VoiceRoomCard from '@/components/voice-rooms/VoiceRoomCard';
import CreateRoomModal from '@/components/voice-rooms/CreateRoomModal';
import VoiceRoomHeader from '@/components/voice-rooms/VoiceRoomHeader';
import VoiceRoomStats from '@/components/voice-rooms/VoiceRoomStats';
import { Mic, MicOff, Users, Music, Coffee, Gamepad2, BookOpen, Heart } from 'lucide-react';

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

const mockRooms: VoiceRoom[] = [
  {
    id: '1',
    name: '🎵 Müzik & Sohbet',
    description: 'En sevdiğiniz şarkıları paylaşın ve müzik üzerine sohbet edin',
    category: 'music',
    currentParticipants: 8,
    maxParticipants: 20,
    isLive: true,
    host: {
      id: '1',
      name: 'Ahmet Yılmaz',
      avatar: '/api/placeholder/40/40'
    },
    participants: [
      { id: '1', name: 'Ahmet Yılmaz', avatar: '/api/placeholder/40/40', isSpeaking: true, isMuted: false },
      { id: '2', name: 'Ayşe Demir', avatar: '/api/placeholder/40/40', isSpeaking: false, isMuted: true },
      { id: '3', name: 'Mehmet Kaya', avatar: '/api/placeholder/40/40', isSpeaking: false, isMuted: false },
    ],
    tags: ['müzik', 'sohbet', 'eğlence'],
    createdAt: new Date()
  },
  {
    id: '2',
    name: '☕ Kahve Molası',
    description: 'Günlük hayattan konuşalım, kahve eşliğinde sohbet',
    category: 'social',
    currentParticipants: 12,
    maxParticipants: 15,
    isLive: true,
    host: {
      id: '2',
      name: 'Zeynep Özkan',
      avatar: '/api/placeholder/40/40'
    },
    participants: [
      { id: '2', name: 'Zeynep Özkan', avatar: '/api/placeholder/40/40', isSpeaking: true, isMuted: false },
      { id: '4', name: 'Can Arslan', avatar: '/api/placeholder/40/40', isSpeaking: false, isMuted: false },
    ],
    tags: ['kahve', 'sohbet', 'günlük'],
    createdAt: new Date()
  },
  {
    id: '3',
    name: '🎮 Oyun Gecesi',
    description: 'Oyunlar hakkında konuşalım ve yeni oyunlar keşfedelim',
    category: 'gaming',
    currentParticipants: 6,
    maxParticipants: 10,
    isLive: true,
    host: {
      id: '3',
      name: 'Burak Şahin',
      avatar: '/api/placeholder/40/40'
    },
    participants: [
      { id: '3', name: 'Burak Şahin', avatar: '/api/placeholder/40/40', isSpeaking: false, isMuted: false },
      { id: '5', name: 'Elif Yıldız', avatar: '/api/placeholder/40/40', isSpeaking: true, isMuted: false },
    ],
    tags: ['oyun', 'gaming', 'eğlence'],
    createdAt: new Date()
  },
  {
    id: '4',
    name: '📚 Kitap Kulübü',
    description: 'Okuduğunuz kitapları paylaşın ve edebiyat üzerine konuşun',
    category: 'education',
    currentParticipants: 4,
    maxParticipants: 12,
    isLive: true,
    host: {
      id: '4',
      name: 'Selin Arıkan',
      avatar: '/api/placeholder/40/40'
    },
    participants: [
      { id: '4', name: 'Selin Arıkan', avatar: '/api/placeholder/40/40', isSpeaking: false, isMuted: false },
      { id: '6', name: 'Deniz Korkmaz', avatar: '/api/placeholder/40/40', isSpeaking: true, isMuted: false },
    ],
    tags: ['kitap', 'edebiyat', 'eğitim'],
    createdAt: new Date()
  }
];

const categories = [
  { id: 'all', name: 'Tümü', icon: Users, color: 'bg-gradient-to-r from-primary to-secondary' },
  { id: 'music', name: 'Müzik', icon: Music, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
  { id: 'social', name: 'Sosyal', icon: Coffee, color: 'bg-gradient-to-r from-orange-500 to-amber-500' },
  { id: 'gaming', name: 'Oyun', icon: Gamepad2, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  { id: 'education', name: 'Eğitim', icon: BookOpen, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
  { id: 'lifestyle', name: 'Yaşam', icon: Heart, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
];

export default function VoiceRoomsPage() {
  const { data: session } = useSession();
  const [rooms, setRooms] = useState<VoiceRoom[]>(mockRooms);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRooms = rooms.filter(room => {
    const matchesCategory = selectedCategory === 'all' || room.category === selectedCategory;
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalParticipants = rooms.reduce((sum, room) => sum + room.currentParticipants, 0);
  const totalRooms = rooms.length;
  const liveRooms = rooms.filter(room => room.isLive).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <VoiceRoomHeader 
        onCreateRoom={() => setIsCreateModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <VoiceRoomStats 
          totalParticipants={totalParticipants}
          totalRooms={totalRooms}
          liveRooms={liveRooms}
        />

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategoriler</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <VoiceRoomCard key={room.id} room={room} />
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
              <Mic className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Henüz oda bulunamadı</h3>
            <p className="text-gray-600 mb-6">İlk odayı siz oluşturun ve sohbete başlayın!</p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="btn-primary"
            >
              Oda Oluştur
            </button>
          </div>
        )}
      </div>

      <CreateRoomModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        categories={categories.filter(c => c.id !== 'all')}
      />
    </div>
  );
} 