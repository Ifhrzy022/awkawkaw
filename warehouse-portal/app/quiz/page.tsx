"use client";

import { useState } from "react";

export default function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

  const quizzes = [
    {
      id: 1,
      title: "Quiz: Pengenalan Warehouse",
      module: "Modul 1",
      questions: 10,
      duration: "15 menit",
      passingScore: 70,
      attempts: 2,
      maxAttempts: 3,
      lastScore: 85,
      status: "completed",
      icon: "📚",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Quiz: Layout Warehouse",
      module: "Modul 2",
      questions: 12,
      duration: "20 menit",
      passingScore: 70,
      attempts: 1,
      maxAttempts: 3,
      lastScore: 78,
      status: "completed",
      icon: "🏗️",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Quiz: Sistem Penerimaan Barang",
      module: "Modul 3",
      questions: 15,
      duration: "25 menit",
      passingScore: 70,
      attempts: 0,
      maxAttempts: 3,
      lastScore: null,
      status: "available",
      icon: "📥",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Quiz: Sistem Penyimpanan",
      module: "Modul 4",
      questions: 12,
      duration: "20 menit",
      passingScore: 70,
      attempts: 0,
      maxAttempts: 3,
      lastScore: null,
      status: "locked",
      icon: "📦",
      color: "from-gray-400 to-gray-500",
    },
    {
      id: 5,
      title: "Quiz: Picking & Packing",
      module: "Modul 5",
      questions: 15,
      duration: "25 menit",
      passingScore: 70,
      attempts: 0,
      maxAttempts: 3,
      lastScore: null,
      status: "locked",
      icon: "🎯",
      color: "from-gray-400 to-gray-500",
    },
    {
      id: 6,
      title: "Quiz: Keselamatan Kerja",
      module: "K3",
      questions: 20,
      duration: "30 menit",
      passingScore: 80,
      attempts: 0,
      maxAttempts: 3,
      lastScore: null,
      status: "available",
      icon: "🦺",
      color: "from-red-500 to-red-600",
    },
  ];

  const stats = [
    { label: "Quiz Selesai", value: "2/6", icon: "✅", color: "text-green-600" },
    { label: "Rata-rata Skor", value: "82%", icon: "📊", color: "text-blue-600" },
    { label: "Quiz Tersedia", value: "2", icon: "📝", color: "text-purple-600" },
    { label: "Sertifikat", value: "1", icon: "🏆", color: "text-yellow-600" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">✅</span>
          <div>
            <h1 className="text-3xl font-bold">Quiz & Assessment</h1>
            <p className="text-yellow-100 text-lg">
              Uji pemahaman Anda dengan quiz interaktif dan dapatkan sertifikat
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quiz List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Daftar Quiz</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
              Semua
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-semibold border border-gray-200">
              Tersedia
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-semibold border border-gray-200">
              Selesai
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 ${
                quiz.status === "locked" ? "opacity-60" : "hover:shadow-xl"
              } transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${quiz.color} rounded-xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                  {quiz.status === "locked" ? "🔒" : quiz.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {quiz.module}
                    </span>
                    {quiz.status === "completed" && (
                      <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        ✓ Selesai
                      </span>
                    )}
                    {quiz.status === "available" && (
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Tersedia
                      </span>
                    )}
                    {quiz.status === "locked" && (
                      <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        Terkunci
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{quiz.title}</h3>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>❓ {quiz.questions} pertanyaan</span>
                  <span>•</span>
                  <span>⏱️ {quiz.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎯 Passing score: {quiz.passingScore}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔄 Percobaan: {quiz.attempts}/{quiz.maxAttempts}</span>
                </div>
              </div>

              {quiz.lastScore !== null && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-800">
                    Skor Terakhir: {quiz.lastScore}% 
                    {quiz.lastScore >= quiz.passingScore ? " 🎉" : " ⚠️"}
                  </p>
                </div>
              )}

              {quiz.status === "locked" ? (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
                >
                  🔒 Selesaikan modul sebelumnya
                </button>
              ) : quiz.status === "completed" ? (
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                  Ulangi Quiz
                </button>
              ) : (
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all">
                  Mulai Quiz →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          💡 Tips Mengerjakan Quiz
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <span className="text-2xl">📖</span>
            <div>
              <p className="font-semibold text-gray-800">Pelajari Materi</p>
              <p className="text-sm text-gray-600">Review modul pembelajaran sebelum mengerjakan quiz</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="font-semibold text-gray-800">Kelola Waktu</p>
              <p className="text-sm text-gray-600">Perhatikan durasi quiz dan alokasikan waktu dengan baik</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-semibold text-gray-800">Fokus & Tenang</p>
              <p className="text-sm text-gray-600">Kerjakan di tempat yang tenang tanpa gangguan</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">Review Jawaban</p>
              <p className="text-sm text-gray-600">Periksa kembali jawaban sebelum submit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          🏆 Sertifikat Saya
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-yellow-300 rounded-lg p-4 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="text-4xl mb-2">🏆</div>
            <p className="font-bold text-gray-800">Warehouse Basics</p>
            <p className="text-sm text-gray-600 mb-2">Diterbitkan: 15 Okt 2024</p>
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Download PDF →
            </button>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50 opacity-50">
            <div className="text-4xl mb-2">🔒</div>
            <p className="font-bold text-gray-600">Safety Certified</p>
            <p className="text-sm text-gray-500 mb-2">Selesaikan quiz K3</p>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50 opacity-50">
            <div className="text-4xl mb-2">🔒</div>
            <p className="font-bold text-gray-600">Inventory Expert</p>
            <p className="text-sm text-gray-500 mb-2">Selesaikan semua quiz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
