export default function SafetyPage() {
  const safetyTopics = [
    {
      id: 1,
      title: "Pengenalan K3 Warehouse",
      description: "Dasar-dasar Keselamatan dan Kesehatan Kerja di lingkungan warehouse",
      icon: "🦺",
      color: "from-red-500 to-red-600",
      priority: "Wajib",
      duration: "30 menit",
    },
    {
      id: 2,
      title: "Alat Pelindung Diri (APD)",
      description: "Jenis-jenis APD dan penggunaannya yang benar",
      icon: "👷",
      color: "from-orange-500 to-orange-600",
      priority: "Wajib",
      duration: "25 menit",
    },
    {
      id: 3,
      title: "Keselamatan Material Handling",
      description: "Prosedur aman dalam mengoperasikan forklift dan equipment",
      icon: "🚜",
      color: "from-yellow-500 to-yellow-600",
      priority: "Wajib",
      duration: "45 menit",
    },
    {
      id: 4,
      title: "Pencegahan Kebakaran",
      description: "Identifikasi bahaya kebakaran dan penggunaan APAR",
      icon: "🧯",
      color: "from-red-600 to-red-700",
      priority: "Wajib",
      duration: "35 menit",
    },
    {
      id: 5,
      title: "Ergonomi Kerja",
      description: "Teknik lifting yang benar dan pencegahan cedera",
      icon: "💪",
      color: "from-blue-500 to-blue-600",
      priority: "Penting",
      duration: "30 menit",
    },
    {
      id: 6,
      title: "Prosedur Darurat",
      description: "Langkah-langkah evakuasi dan tanggap darurat",
      icon: "🚨",
      color: "from-purple-500 to-purple-600",
      priority: "Wajib",
      duration: "40 menit",
    },
    {
      id: 7,
      title: "Penanganan Bahan Berbahaya",
      description: "Safety procedures untuk material berbahaya (B3)",
      icon: "☣️",
      color: "from-green-500 to-green-600",
      priority: "Penting",
      duration: "35 menit",
    },
    {
      id: 8,
      title: "Housekeeping & 5S",
      description: "Menjaga kebersihan dan kerapihan area kerja",
      icon: "🧹",
      color: "from-teal-500 to-teal-600",
      priority: "Penting",
      duration: "25 menit",
    },
    {
      id: 9,
      title: "Pelaporan Insiden",
      description: "Prosedur melaporkan kecelakaan dan near miss",
      icon: "📝",
      color: "from-indigo-500 to-indigo-600",
      priority: "Wajib",
      duration: "20 menit",
    },
    {
      id: 10,
      title: "Keselamatan Listrik",
      description: "Bahaya listrik dan pencegahan kecelakaan",
      icon: "⚡",
      color: "from-yellow-600 to-yellow-700",
      priority: "Penting",
      duration: "30 menit",
    },
  ];

  const safetyStats = [
    { label: "Hari Tanpa Kecelakaan", value: "156", icon: "🎯", color: "text-green-600" },
    { label: "Safety Training", value: "24", icon: "📚", color: "text-blue-600" },
    { label: "Safety Compliance", value: "98%", icon: "✅", color: "text-purple-600" },
    { label: "Incident Reports", value: "3", icon: "📋", color: "text-orange-600" },
  ];

  const emergencyContacts = [
    { title: "Emergency Hotline", contact: "911", icon: "🚨" },
    { title: "Security", contact: "Ext. 999", icon: "👮" },
    { title: "First Aid", contact: "Ext. 888", icon: "🏥" },
    { title: "Fire Department", contact: "113", icon: "🚒" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">🦺</span>
          <div>
            <h1 className="text-3xl font-bold">Keselamatan dan Kesehatan Kerja (K3)</h1>
            <p className="text-red-100 text-lg">
              Prioritas utama: Keselamatan Anda adalah tanggung jawab bersama
            </p>
          </div>
        </div>
        <div className="mt-4 bg-red-700/50 rounded-lg p-4">
          <p className="font-semibold mb-2">⚠️ Prinsip Dasar K3:</p>
          <p className="text-sm text-red-50">
            "Safety First, Safety Always - Setiap karyawan berhak pulang dengan selamat"
          </p>
        </div>
      </div>

      {/* Safety Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {safetyStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Safety Topics */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Panduan Keselamatan Kerja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      topic.priority === "Wajib" 
                        ? "bg-red-100 text-red-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {topic.priority}
                    </span>
                    <span className="text-xs text-gray-500">⏱️ {topic.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
                Pelajari Panduan →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          🚨 Kontak Darurat
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-2 border-red-200">
              <div className="text-3xl mb-2">{contact.icon}</div>
              <p className="font-semibold text-gray-800">{contact.title}</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{contact.contact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Reminders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            ✅ Do's - Yang Harus Dilakukan
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-gray-700">Selalu gunakan APD lengkap saat bekerja</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-gray-700">Laporkan setiap kondisi tidak aman yang ditemukan</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-gray-700">Ikuti prosedur keselamatan yang telah ditetapkan</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-gray-700">Jaga kebersihan dan kerapihan area kerja</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-gray-700">Hadiri semua safety training yang diwajibkan</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            ⛔ Don'ts - Yang Tidak Boleh Dilakukan
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl">✗</span>
              <p className="text-gray-700">Jangan mengoperasikan equipment tanpa training</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl">✗</span>
              <p className="text-gray-700">Jangan mengabaikan tanda peringatan keselamatan</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl">✗</span>
              <p className="text-gray-700">Jangan bekerja dalam kondisi tidak fit</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl">✗</span>
              <p className="text-gray-700">Jangan mengambil shortcut yang membahayakan</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl">✗</span>
              <p className="text-gray-700">Jangan menyembunyikan insiden atau near miss</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Culture */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-4">🌟 Budaya Keselamatan Kerja</h3>
        <p className="text-blue-100 mb-4">
          Keselamatan adalah tanggung jawab bersama. Setiap individu berperan dalam menciptakan lingkungan kerja yang aman.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-bold mb-2">👁️ See Something</p>
            <p className="text-sm text-blue-100">Perhatikan kondisi tidak aman</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-bold mb-2">🗣️ Say Something</p>
            <p className="text-sm text-blue-100">Laporkan kepada supervisor</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-bold mb-2">🛠️ Do Something</p>
            <p className="text-sm text-blue-100">Ambil tindakan perbaikan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
