export default function InventoryPage() {
  const topics = [
    {
      id: 1,
      title: "Sistem Manajemen Inventory",
      description: "Pengenalan sistem dan metode pengelolaan inventory warehouse",
      icon: "📊",
      color: "from-blue-500 to-blue-600",
      subtopics: ["WMS Overview", "Inventory Control", "Stock Management", "Reporting"],
    },
    {
      id: 2,
      title: "Metode FIFO, FEFO, LIFO",
      description: "Pemahaman metode rotasi stok untuk berbagai jenis produk",
      icon: "🔄",
      color: "from-green-500 to-green-600",
      subtopics: ["FIFO Concept", "FEFO for Perishables", "LIFO Application", "Best Practices"],
    },
    {
      id: 3,
      title: "Stock Opname & Cycle Counting",
      description: "Prosedur perhitungan fisik dan cycle counting berkala",
      icon: "📝",
      color: "from-purple-500 to-purple-600",
      subtopics: ["Planning", "Execution", "Variance Analysis", "Corrective Actions"],
    },
    {
      id: 4,
      title: "ABC Analysis",
      description: "Klasifikasi inventory berdasarkan nilai dan perputaran",
      icon: "📈",
      color: "from-orange-500 to-orange-600",
      subtopics: ["Classification Method", "A-Items Management", "B-Items Strategy", "C-Items Handling"],
    },
    {
      id: 5,
      title: "Safety Stock & Reorder Point",
      description: "Perhitungan safety stock dan titik pemesanan ulang",
      icon: "⚠️",
      color: "from-red-500 to-red-600",
      subtopics: ["Safety Stock Formula", "Lead Time Analysis", "Reorder Point", "Buffer Management"],
    },
    {
      id: 6,
      title: "Inventory Accuracy",
      description: "Metode meningkatkan akurasi inventory dan mengurangi discrepancy",
      icon: "🎯",
      color: "from-indigo-500 to-indigo-600",
      subtopics: ["Root Cause Analysis", "Prevention Methods", "Audit Procedures", "KPI Tracking"],
    },
  ];

  const inventoryMetrics = [
    { label: "Inventory Accuracy", value: "98.5%", trend: "up", color: "text-green-600" },
    { label: "Stock Turnover Ratio", value: "8.2x", trend: "up", color: "text-blue-600" },
    { label: "Days on Hand", value: "45", trend: "down", color: "text-orange-600" },
    { label: "Stockout Rate", value: "2.1%", trend: "down", color: "text-red-600" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">📦</span>
          <div>
            <h1 className="text-3xl font-bold">Manajemen Inventory</h1>
            <p className="text-purple-100 text-lg">
              Pelajari sistem pengelolaan stok dan inventory control yang efektif
            </p>
          </div>
        </div>
      </div>

      {/* Inventory Metrics Dashboard */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Key Inventory Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {inventoryMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
              <div className="flex items-end justify-between">
                <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
                <span className="text-2xl">
                  {metric.trend === "up" ? "📈" : "📉"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Topics */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Topik Pembelajaran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">Sub-topik:</p>
                <div className="grid grid-cols-2 gap-2">
                  {topic.subtopics.map((subtopic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>{subtopic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all">
                Pelajari Topik →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Management Tools */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          🛠️ Tools & Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-2">📊 Inventory Calculator</p>
            <p className="text-sm text-gray-600 mb-3">Hitung safety stock, reorder point, dan EOQ</p>
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Buka Tool →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-2">📈 ABC Analysis Template</p>
            <p className="text-sm text-gray-600 mb-3">Template Excel untuk klasifikasi inventory</p>
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Download →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-800 mb-2">📋 Stock Opname Form</p>
            <p className="text-sm text-gray-600 mb-3">Form standar untuk stock opname</p>
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Download →
            </button>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          ⭐ Best Practices Inventory Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">Regular Cycle Counting</p>
              <p className="text-sm text-gray-600">Lakukan cycle counting berkala untuk menjaga akurasi</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">Proper Documentation</p>
              <p className="text-sm text-gray-600">Dokumentasi setiap transaksi inventory dengan lengkap</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">FIFO Implementation</p>
              <p className="text-sm text-gray-600">Terapkan FIFO untuk menghindari expired products</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">Real-time Tracking</p>
              <p className="text-sm text-gray-600">Gunakan WMS untuk tracking real-time inventory</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">ABC Classification</p>
              <p className="text-sm text-gray-600">Prioritaskan pengelolaan berdasarkan nilai item</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-gray-800">Safety Stock Optimization</p>
              <p className="text-sm text-gray-600">Maintain safety stock yang optimal untuk service level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
