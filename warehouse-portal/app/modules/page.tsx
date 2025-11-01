import Link from "next/link";

export default function ModulesPage() {
  const modules = [
    {
      id: 1,
      title: "Pengenalan Warehouse",
      description: "Memahami konsep dasar warehouse, fungsi, dan peran dalam supply chain",
      duration: "45 menit",
      level: "Pemula",
      topics: ["Definisi Warehouse", "Fungsi Warehouse", "Jenis-jenis Warehouse", "Organisasi Warehouse"],
      completed: true,
      progress: 100,
    },
    {
      id: 2,
      title: "Layout dan Desain Warehouse",
      description: "Mempelajari tata letak optimal warehouse untuk efisiensi operasional",
      duration: "60 menit",
      level: "Pemula",
      topics: ["Prinsip Layout", "Zona Penyimpanan", "Alur Barang", "Optimasi Ruang"],
      completed: true,
      progress: 100,
    },
    {
      id: 3,
      title: "Sistem Penerimaan Barang",
      description: "Prosedur lengkap penerimaan barang dari supplier hingga penyimpanan",
      duration: "50 menit",
      level: "Pemula",
      topics: ["Proses Receiving", "Inspeksi Barang", "Dokumentasi", "Quality Control"],
      completed: false,
      progress: 60,
    },
    {
      id: 4,
      title: "Sistem Penyimpanan (Storage)",
      description: "Metode dan teknik penyimpanan barang yang efektif dan efisien",
      duration: "55 menit",
      level: "Menengah",
      topics: ["Metode Penyimpanan", "Racking System", "FIFO/FEFO/LIFO", "Slotting Strategy"],
      completed: false,
      progress: 30,
    },
    {
      id: 5,
      title: "Sistem Picking dan Packing",
      description: "Teknik pengambilan dan pengemasan barang untuk pengiriman",
      duration: "65 menit",
      level: "Menengah",
      topics: ["Metode Picking", "Batch Picking", "Packing Standards", "Quality Check"],
      completed: false,
      progress: 0,
    },
    {
      id: 6,
      title: "Sistem Pengiriman (Shipping)",
      description: "Proses pengiriman barang dari warehouse ke customer",
      duration: "50 menit",
      level: "Menengah",
      topics: ["Proses Shipping", "Dokumentasi Pengiriman", "Loading Procedures", "Tracking"],
      completed: false,
      progress: 0,
    },
    {
      id: 7,
      title: "Warehouse Management System (WMS)",
      description: "Pengenalan sistem informasi untuk mengelola operasional warehouse",
      duration: "70 menit",
      level: "Menengah",
      topics: ["Fungsi WMS", "Modul WMS", "Barcode System", "Real-time Tracking"],
      completed: false,
      progress: 0,
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Pengelolaan stok dan inventory control di warehouse",
      duration: "60 menit",
      level: "Menengah",
      topics: ["Stock Control", "Cycle Counting", "ABC Analysis", "Inventory Accuracy"],
      completed: false,
      progress: 0,
    },
    {
      id: 9,
      title: "Material Handling Equipment",
      description: "Pengenalan alat-alat material handling dan penggunaannya",
      duration: "55 menit",
      level: "Pemula",
      topics: ["Forklift", "Pallet Jack", "Conveyor", "Safety Equipment"],
      completed: false,
      progress: 0,
    },
    {
      id: 10,
      title: "Keselamatan dan Kesehatan Kerja (K3)",
      description: "Prosedur keselamatan kerja di lingkungan warehouse",
      duration: "45 menit",
      level: "Pemula",
      topics: ["Safety Procedures", "PPE", "Emergency Response", "Hazard Identification"],
      completed: false,
      progress: 0,
    },
    {
      id: 11,
      title: "Quality Control di Warehouse",
      description: "Sistem pengendalian kualitas dalam operasional warehouse",
      duration: "50 menit",
      level: "Lanjutan",
      topics: ["QC Procedures", "Inspection Methods", "Defect Management", "Documentation"],
      completed: false,
      progress: 0,
    },
    {
      id: 12,
      title: "Continuous Improvement",
      description: "Metode peningkatan berkelanjutan dalam operasional warehouse",
      duration: "60 menit",
      level: "Lanjutan",
      topics: ["Lean Warehouse", "5S", "Kaizen", "Performance Metrics"],
      completed: false,
      progress: 0,
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Pemula":
        return "bg-green-100 text-green-700";
      case "Menengah":
        return "bg-blue-100 text-blue-700";
      case "Lanjutan":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const completedCount = modules.filter((m) => m.completed).length;
  const totalProgress = Math.round(
    modules.reduce((acc, m) => acc + m.progress, 0) / modules.length
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">📚</span>
          <div>
            <h1 className="text-3xl font-bold">Modul Pembelajaran</h1>
            <p className="text-blue-100 text-lg">
              Kuasai operasional warehouse dengan 12 modul pembelajaran terstruktur
            </p>
          </div>
        </div>
        <div className="mt-6 bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-3 rounded-full transition-all duration-500"
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-blue-100">
          Progress Keseluruhan: {completedCount}/{modules.length} modul selesai ({totalProgress}%)
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 flex-wrap">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md">
          Semua Modul
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-50">
          Pemula
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-50">
          Menengah
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-50">
          Lanjutan
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-50">
          Sedang Dipelajari
        </button>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-gray-300">#{module.id}</span>
                  {module.completed && (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      ✓ Selesai
                    </span>
                  )}
                  {!module.completed && module.progress > 0 && (
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                      Sedang Berjalan
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                ⏱️ {module.duration}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(module.level)}`}>
                {module.level}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600 font-medium">Progress</span>
                <span className="text-gray-800 font-bold">{module.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all ${
                    module.completed ? "bg-green-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 mb-2">Topik Pembahasan:</p>
              <div className="flex flex-wrap gap-2">
                {module.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/modules/${module.id}`}
              className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                module.completed
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : module.progress > 0
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {module.completed ? "Review Modul" : module.progress > 0 ? "Lanjutkan" : "Mulai Belajar"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
