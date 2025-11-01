import Link from "next/link";

export default function Home() {
  const modules = [
    {
      title: "Modul Pembelajaran",
      description: "Pelajari dasar-dasar operasional warehouse dari A sampai Z",
      icon: "📚",
      href: "/modules",
      color: "from-blue-500 to-blue-600",
      stats: "12 Modul",
    },
    {
      title: "Prosedur Operasional",
      description: "SOP dan panduan kerja standar untuk operasional harian",
      icon: "📋",
      href: "/procedures",
      color: "from-green-500 to-green-600",
      stats: "8 Prosedur",
    },
    {
      title: "Manajemen Inventory",
      description: "Sistem pengelolaan stok dan inventory warehouse",
      icon: "📦",
      href: "/inventory",
      color: "from-purple-500 to-purple-600",
      stats: "6 Topik",
    },
    {
      title: "Keselamatan Kerja",
      description: "Panduan K3 dan prosedur keselamatan di lingkungan warehouse",
      icon: "🦺",
      href: "/safety",
      color: "from-red-500 to-red-600",
      stats: "10 Panduan",
    },
    {
      title: "Quiz & Assessment",
      description: "Uji pemahaman Anda dengan quiz dan evaluasi berkala",
      icon: "✅",
      href: "/quiz",
      color: "from-yellow-500 to-yellow-600",
      stats: "15 Quiz",
    },
    {
      title: "Progress Saya",
      description: "Pantau perkembangan pembelajaran dan pencapaian Anda",
      icon: "📈",
      href: "/progress",
      color: "from-indigo-500 to-indigo-600",
      stats: "45% Selesai",
    },
  ];

  const recentActivities = [
    { title: "Menyelesaikan Modul: Pengenalan Warehouse", time: "2 jam lalu", type: "success" },
    { title: "Quiz: Keselamatan Kerja - Skor 85%", time: "1 hari lalu", type: "success" },
    { title: "Membaca: Prosedur Penerimaan Barang", time: "2 hari lalu", type: "info" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Selamat Datang di Portal Warehouse! 👋</h1>
        <p className="text-blue-100 text-lg">
          Mulai perjalanan pembelajaran Anda untuk menjadi profesional warehouse yang handal
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/modules"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Mulai Belajar
          </Link>
          <Link
            href="/progress"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
          >
            Lihat Progress
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Modul</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">36</p>
            </div>
            <div className="text-4xl">📚</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Selesai</p>
              <p className="text-3xl font-bold text-green-600 mt-1">16</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Quiz Diambil</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">8</p>
            </div>
            <div className="text-4xl">📝</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Rata-rata Skor</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">82%</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
        </div>
      </div>

      {/* Main Modules Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Kategori Pembelajaran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{module.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {module.stats}
                </span>
                <span className="text-blue-600 font-semibold text-sm">Mulai →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terkini</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
