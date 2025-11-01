"use client";

export default function ProgressPage() {
  const overallProgress = 45;
  
  const moduleProgress = [
    { module: "Pengenalan Warehouse", progress: 100, status: "completed", score: 85 },
    { module: "Layout Warehouse", progress: 100, status: "completed", score: 78 },
    { module: "Sistem Penerimaan Barang", progress: 60, status: "in-progress", score: null },
    { module: "Sistem Penyimpanan", progress: 30, status: "in-progress", score: null },
    { module: "Picking & Packing", progress: 0, status: "not-started", score: null },
    { module: "Sistem Pengiriman", progress: 0, status: "not-started", score: null },
    { module: "WMS", progress: 0, status: "not-started", score: null },
    { module: "Inventory Management", progress: 0, status: "not-started", score: null },
    { module: "Material Handling", progress: 0, status: "not-started", score: null },
    { module: "K3 Warehouse", progress: 0, status: "not-started", score: null },
    { module: "Quality Control", progress: 0, status: "not-started", score: null },
    { module: "Continuous Improvement", progress: 0, status: "not-started", score: null },
  ];

  const learningStats = [
    { label: "Total Waktu Belajar", value: "12.5 jam", icon: "⏱️", color: "text-blue-600" },
    { label: "Modul Selesai", value: "2/12", icon: "📚", color: "text-green-600" },
    { label: "Quiz Lulus", value: "2/6", icon: "✅", color: "text-purple-600" },
    { label: "Sertifikat", value: "1", icon: "🏆", color: "text-yellow-600" },
  ];

  const recentActivities = [
    {
      date: "1 Nov 2024",
      activities: [
        { time: "14:30", title: "Menyelesaikan Modul: Layout Warehouse", type: "module", icon: "📚" },
        { time: "15:45", title: "Quiz: Layout Warehouse - Skor 78%", type: "quiz", icon: "✅" },
      ],
    },
    {
      date: "31 Okt 2024",
      activities: [
        { time: "10:00", title: "Mulai Modul: Sistem Penerimaan Barang", type: "module", icon: "📚" },
        { time: "11:30", title: "Membaca: Prosedur Receiving", type: "reading", icon: "📖" },
      ],
    },
    {
      date: "30 Okt 2024",
      activities: [
        { time: "09:00", title: "Menyelesaikan Modul: Pengenalan Warehouse", type: "module", icon: "📚" },
        { time: "10:30", title: "Quiz: Pengenalan Warehouse - Skor 85%", type: "quiz", icon: "✅" },
        { time: "11:00", title: "Mendapatkan Sertifikat: Warehouse Basics", type: "certificate", icon: "🏆" },
      ],
    },
  ];

  const achievements = [
    { title: "First Step", description: "Menyelesaikan modul pertama", icon: "🎯", unlocked: true },
    { title: "Quick Learner", description: "Selesaikan 3 modul dalam seminggu", icon: "⚡", unlocked: false },
    { title: "Perfect Score", description: "Dapatkan skor 100% di quiz", icon: "💯", unlocked: false },
    { title: "Safety Champion", description: "Lulus semua quiz K3", icon: "🦺", unlocked: false },
    { title: "Dedicated", description: "Belajar 7 hari berturut-turut", icon: "🔥", unlocked: false },
    { title: "Master", description: "Selesaikan semua modul", icon: "👑", unlocked: false },
  ];

  const upcomingMilestones = [
    { title: "Selesaikan Modul 3", progress: 60, target: 100 },
    { title: "Ambil Quiz K3", progress: 0, target: 100 },
    { title: "Capai 50% Progress", progress: 45, target: 50 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">📈</span>
          <div>
            <h1 className="text-3xl font-bold">Progress Pembelajaran Saya</h1>
            <p className="text-indigo-100 text-lg">
              Pantau perkembangan dan pencapaian pembelajaran Anda
            </p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Progress Keseluruhan</span>
            <span className="text-2xl font-bold">{overallProgress}%</span>
          </div>
          <div className="bg-white/20 rounded-full h-4 overflow-hidden">
            <div
              className="bg-white h-4 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Learning Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {learningStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Module Progress */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Progress per Modul</h2>
        <div className="space-y-4">
          {moduleProgress.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold text-sm">#{index + 1}</span>
                  <span className="font-semibold text-gray-800">{item.module}</span>
                  {item.status === "completed" && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                      ✓ Selesai
                    </span>
                  )}
                  {item.status === "in-progress" && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                      Sedang Berjalan
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  {item.score !== null && (
                    <span className="text-sm text-gray-600">Quiz: {item.score}%</span>
                  )}
                  <span className="font-bold text-gray-800">{item.progress}%</span>
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all ${
                    item.status === "completed"
                      ? "bg-green-500"
                      : item.status === "in-progress"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          🎯 Target Berikutnya
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingMilestones.map((milestone, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-gray-800 mb-2">{milestone.title}</p>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                  style={{ width: `${(milestone.progress / milestone.target) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">
                {milestone.progress}/{milestone.target}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            📅 Aktivitas Terkini
          </h3>
          <div className="space-y-4">
            {recentActivities.map((day, dayIndex) => (
              <div key={dayIndex}>
                <p className="text-sm font-semibold text-gray-500 mb-2">{day.date}</p>
                <div className="space-y-2 ml-4 border-l-2 border-gray-200 pl-4">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-start gap-3">
                      <span className="text-xs text-gray-500 mt-1 w-12">{activity.time}</span>
                      <span className="text-lg">{activity.icon}</span>
                      <p className="text-sm text-gray-700 flex-1">{activity.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            🏆 Pencapaian
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 border-2 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300"
                    : "bg-gray-50 border-gray-200 opacity-50"
                }`}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className="font-semibold text-gray-800 text-sm mb-1">{achievement.title}</p>
                <p className="text-xs text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Streak */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🔥 Learning Streak</h3>
            <p className="text-orange-100">Anda telah belajar selama 3 hari berturut-turut!</p>
          </div>
          <div className="text-6xl font-bold">3</div>
        </div>
        <div className="mt-4 flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <div
              key={day}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                day <= 3 ? "bg-white text-orange-600" : "bg-white/20 text-white"
              }`}
            >
              {day <= 3 ? "✓" : day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
