"use client";

import { useState } from "react";
import { X, Mic, Users, Lock, Globe, Hash, Tag } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: any;
  color: string;
}

interface CreateRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

export default function CreateRoomModal({
  isOpen,
  onClose,
  categories,
}: CreateRoomModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    maxParticipants: 10,
    isPrivate: false,
    tags: [] as string[],
    newTag: "",
  });

  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle room creation logic here
    console.log("Creating room:", formData);
    onClose();
  };

  const addTag = () => {
    if (
      formData.newTag.trim() &&
      !formData.tags.includes(formData.newTag.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, prev.newTag.trim()],
        newTag: "",
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Yeni Sesli Oda Oluştur
            </h2>
            <p className="text-gray-600 mt-1">
              Arkadaşlarınızla sesli sohbet için oda oluşturun
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      step > stepNumber ? "bg-primary" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Oda Adı *
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Oda adını girin..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Açıklama
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Oda hakkında kısa bir açıklama..."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          category: category.id,
                        }))
                      }
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        formData.category === category.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}
                        >
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">
                          {category.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maksimum Katılımcı Sayısı
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={formData.maxParticipants}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        maxParticipants: parseInt(e.target.value),
                      }))
                    }
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  >
                    <option value={5}>5 kişi</option>
                    <option value={10}>10 kişi</option>
                    <option value={15}>15 kişi</option>
                    <option value={20}>20 kişi</option>
                    <option value={50}>50 kişi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Oda Gizliliği
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <input
                      type="radio"
                      name="privacy"
                      checked={!formData.isPrivate}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, isPrivate: false }))
                      }
                      className="w-4 h-4 text-primary focus:ring-primary/20"
                    />
                    <Globe className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Herkese Açık
                      </div>
                      <div className="text-sm text-gray-600">
                        Herkes odaya katılabilir
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <input
                      type="radio"
                      name="privacy"
                      checked={formData.isPrivate}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, isPrivate: true }))
                      }
                      className="w-4 h-4 text-primary focus:ring-primary/20"
                    />
                    <Lock className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-gray-900">Özel Oda</div>
                      <div className="text-sm text-gray-600">
                        Sadece davet edilenler katılabilir
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etiketler
                </label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={formData.newTag}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            newTag: e.target.value,
                          }))
                        }
                        onKeyPress={(e) =>
                          e.key === "Enter" && (e.preventDefault(), addTag())
                        }
                        placeholder="Etiket ekleyin..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors duration-200"
                    >
                      Ekle
                    </button>
                  </div>

                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          #{tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 hover:text-primary/70"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium text-gray-900 mb-2">Oda Özeti</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Ad:</span> {formData.name}
                  </div>
                  <div>
                    <span className="font-medium">Kategori:</span>{" "}
                    {categories.find((c) => c.id === formData.category)?.name}
                  </div>
                  <div>
                    <span className="font-medium">Maksimum Katılımcı:</span>{" "}
                    {formData.maxParticipants} kişi
                  </div>
                  <div>
                    <span className="font-medium">Gizlilik:</span>{" "}
                    {formData.isPrivate ? "Özel" : "Herkese Açık"}
                  </div>
                  {formData.tags.length > 0 && (
                    <div>
                      <span className="font-medium">Etiketler:</span>{" "}
                      {formData.tags.map((tag) => `#${tag}`).join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => (step > 1 ? setStep(step - 1) : onClose())}
              className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {step === 1 ? "İptal" : "Geri"}
            </button>

            <div className="flex gap-3">
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={
                    step === 1 && (!formData.name || !formData.category)
                  }
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Devam Et
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  Oda Oluştur
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
