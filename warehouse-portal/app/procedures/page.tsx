export default function ProceduresPage() {
  const procedures = [
    {
      id: 1,
      title: "Prosedur Penerimaan Barang (Receiving)",
      category: "Inbound",
      description: "SOP lengkap untuk proses penerimaan barang dari supplier",
      icon: "📥",
      color: "from-blue-500 to-blue-600",
      steps: 8,
      documents: ["Form GR", "Checklist Inspeksi", "Berita Acara"],
    },
    {
      id: 2,
      title: "Prosedur Penyimpanan Barang (Put Away)",
      category: "Storage",
      description: "Panduan penyimpanan barang ke lokasi yang tepat",
      icon: "📦",
      color: "from-green-500 to-green-600",
      steps: 6,
      documents: ["Bin Card", "Location Map"],
    },
    {
      id: 3,
      title: "Prosedur Stock Opname",
      category: "Inventory",
      description: "Tata cara melakukan perhitungan fisik inventory",
      icon: "📊",
      color: "from-purple-500 to-purple-600",
      steps: 10,
      documents: ["Form Stock Opname", "Variance Report"],
    },
    {
      id: 4,
      title: "Prosedur Picking Order",
      category: "Outbound",
      description: "Langkah-langkah pengambilan barang untuk order customer",
      icon: "🎯",
      color: "from-orange-500 to-orange-600",
      steps: 7,
      documents: ["Picking List", "Delivery Order"],
    },
    {
      id: 5,
      title: "Prosedur Packing & Labeling",
      category: "Outbound",
      description: "Standar pengemasan dan pelabelan barang",
      icon: "📦",
      color: "from-pink-500 to-pink-600",
      steps: 5,
      documents: ["Packing Standard", "Label Template"],
    },
    {
      id: 6,
      title: "Prosedur Pengiriman (Shipping)",
      category: "Outbound",
      description: "Proses pengiriman barang ke customer",
      icon: "🚚",
      color: "from-indigo-500 to-indigo-600",
      steps: 9,
      documents: ["Surat Jalan", "Manifest", "POD"],
    },
    {
      id: 7,
      title: "Prosedur Handling Barang Rusak",
      category: "Quality",
      description: "Penanganan barang reject atau rusak",
      icon: "⚠️",
      color: "from-red-500 to-red-600",
      steps: 6,
      documents: ["Damage Report", "Disposal Form"],
    },
    {
      id: 8,
      title: "Prosedur Keselamatan Kerja",
      category: "Safety",
      description: "Protokol keselamatan dan kesehatan kerja",
      icon: "🦺",
      color: "from-yellow-500 to-yellow-600",
      steps: 12,
      documents: ["Safety Checklist", "Incident Report"],
    },
  ];

  const categories = ["Semua", "Inbound", "Storage", "Outbound", "Inventory", "Quality", "Safety"];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">📋</span>
          <div>
            <h1 className="text-3xl font-bold">Prosedur Operasional Standar (SOP)</h1>
            <p className="text-green-100 text-lg">
              Panduan lengkap prosedur kerja standar untuk operasional warehouse
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-lg font-semibold shadow-md transition-colors ${
              category === "Semua"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total SOP</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{procedures.length}</p>
            </div>
            <div className="text-4xl">📋</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Kategori</p>
              <p className="text-3xl font-bold text-green-600 mt-1">{categories.length - 1}</p>
            </div>
            <div className="text-4xl">📁</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Dokumen</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">24</p>
            </div>
            <div className="text-4xl">📄</div>
          </div>
        </div>
      </div>

      {/* Procedures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {procedures.map((procedure) => (
          <div
            key={procedure.id}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${procedure.color} rounded-xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                {procedure.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {procedure.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{procedure.title}</h3>
                <p className="text-gray-600 text-sm">{procedure.description}</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">📝 Langkah:</span>
                <span>{procedure.steps} tahapan</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-semibold text-gray-500 mb-2">Dokumen Terkait:</p>
                <div className="flex flex-wrap gap-2">
                  {procedure.documents.map((doc, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all">
              Lihat Detail SOP →
            </button>
          </div>
        ))}
      </div>

      {/* Quick Reference */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          ⚡ Quick Reference Guide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-1">📞 Emergency Contact</p>
            <p className="text-sm text-gray-600">Ext. 911 / 0800-WAREHOUSE</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-1">🔧 Maintenance</p>
            <p className="text-sm text-gray-600">Ext. 555 / maintenance@wh.com</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-1">👨‍💼 Supervisor</p>
            <p className="text-sm text-gray-600">Ext. 100-105</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-1">🏥 First Aid</p>
            <p className="text-sm text-gray-600">Lokasi: Area A & C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
