"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function ModuleDetailPage() {
  const params = useParams();
  const [activeSection, setActiveSection] = useState(0);

  const moduleContent = {
    "1": {
      title: "Pengenalan Warehouse",
      description: "Memahami konsep dasar warehouse, fungsi, dan peran dalam supply chain",
      duration: "45 menit",
      sections: [
        {
          title: "Definisi Warehouse",
          content: `
            <h3>Apa itu Warehouse?</h3>
            <p>Warehouse atau gudang adalah fasilitas komersial untuk penyimpanan barang. Warehouse digunakan oleh produsen, importir, eksportir, pedagang grosir, perusahaan transportasi, bea cukai, dll.</p>
            
            <h4>Fungsi Utama Warehouse:</h4>
            <ul>
              <li><strong>Penyimpanan:</strong> Menyimpan barang dalam jangka waktu tertentu</li>
              <li><strong>Konsolidasi:</strong> Mengumpulkan barang dari berbagai sumber</li>
              <li><strong>Break-bulk:</strong> Memecah kiriman besar menjadi lebih kecil</li>
              <li><strong>Value-added services:</strong> Labeling, packaging, assembly</li>
            </ul>

            <h4>Peran dalam Supply Chain:</h4>
            <p>Warehouse berperan sebagai buffer atau penyangga antara produksi dan konsumsi, memastikan ketersediaan produk saat dibutuhkan pelanggan.</p>
          `,
        },
        {
          title: "Jenis-jenis Warehouse",
          content: `
            <h3>Klasifikasi Warehouse</h3>
            
            <h4>1. Berdasarkan Kepemilikan:</h4>
            <ul>
              <li><strong>Private Warehouse:</strong> Dimiliki dan dioperasikan oleh perusahaan sendiri</li>
              <li><strong>Public Warehouse:</strong> Disewakan kepada berbagai perusahaan</li>
              <li><strong>Contract Warehouse:</strong> Kontrak jangka panjang dengan penyedia layanan</li>
            </ul>

            <h4>2. Berdasarkan Fungsi:</h4>
            <ul>
              <li><strong>Distribution Center:</strong> Fokus pada pergerakan cepat barang</li>
              <li><strong>Fulfillment Center:</strong> Untuk e-commerce dan order processing</li>
              <li><strong>Cold Storage:</strong> Untuk produk yang memerlukan suhu terkontrol</li>
              <li><strong>Bonded Warehouse:</strong> Untuk barang impor yang belum dibayar bea cukai</li>
            </ul>

            <h4>3. Berdasarkan Teknologi:</h4>
            <ul>
              <li><strong>Manual Warehouse:</strong> Operasi manual dengan minimal otomasi</li>
              <li><strong>Semi-automated:</strong> Kombinasi manual dan otomasi</li>
              <li><strong>Automated Warehouse:</strong> Menggunakan robotik dan sistem otomatis</li>
            </ul>
          `,
        },
        {
          title: "Organisasi Warehouse",
          content: `
            <h3>Struktur Organisasi Warehouse</h3>
            
            <h4>Hierarki Umum:</h4>
            <ul>
              <li><strong>Warehouse Manager:</strong> Bertanggung jawab atas seluruh operasional</li>
              <li><strong>Supervisor:</strong> Mengawasi tim dan shift tertentu</li>
              <li><strong>Team Leader:</strong> Memimpin kelompok kerja spesifik</li>
              <li><strong>Warehouse Staff:</strong> Operator, picker, packer, checker</li>
            </ul>

            <h4>Departemen Utama:</h4>
            <ul>
              <li><strong>Receiving:</strong> Penerimaan barang masuk</li>
              <li><strong>Storage:</strong> Penyimpanan dan pengelolaan stok</li>
              <li><strong>Picking & Packing:</strong> Pengambilan dan pengemasan order</li>
              <li><strong>Shipping:</strong> Pengiriman barang keluar</li>
              <li><strong>Quality Control:</strong> Pemeriksaan kualitas</li>
              <li><strong>Administration:</strong> Dokumentasi dan administrasi</li>
            </ul>

            <h4>Shift Kerja:</h4>
            <p>Warehouse umumnya beroperasi dalam sistem shift untuk memaksimalkan produktivitas:</p>
            <ul>
              <li>Shift 1: 07:00 - 15:00</li>
              <li>Shift 2: 15:00 - 23:00</li>
              <li>Shift 3: 23:00 - 07:00 (untuk operasi 24 jam)</li>
            </ul>
          `,
        },
        {
          title: "Key Performance Indicators (KPI)",
          content: `
            <h3>Metrik Kinerja Warehouse</h3>
            
            <h4>KPI Utama:</h4>
            <ul>
              <li><strong>Inventory Accuracy:</strong> Akurasi stok (target: >99%)</li>
              <li><strong>Order Accuracy:</strong> Ketepatan pengiriman order (target: >99.5%)</li>
              <li><strong>On-time Shipment:</strong> Ketepatan waktu pengiriman (target: >95%)</li>
              <li><strong>Warehouse Capacity Utilization:</strong> Utilisasi ruang (target: 85-90%)</li>
              <li><strong>Order Cycle Time:</strong> Waktu dari order hingga shipping</li>
              <li><strong>Picking Accuracy:</strong> Akurasi pengambilan barang</li>
              <li><strong>Productivity Rate:</strong> Unit per jam per pekerja</li>
              <li><strong>Damage Rate:</strong> Persentase barang rusak</li>
            </ul>

            <h4>Pentingnya KPI:</h4>
            <p>KPI membantu warehouse untuk:</p>
            <ul>
              <li>Mengukur efisiensi operasional</li>
              <li>Mengidentifikasi area yang perlu perbaikan</li>
              <li>Membuat keputusan berbasis data</li>
              <li>Meningkatkan kepuasan pelanggan</li>
            </ul>
          `,
        },
      ],
    },
  };

  const currentModule = moduleContent["1"];
  const currentSection = currentModule.sections[activeSection];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Dashboard</Link>
        <span>/</span>
        <Link href="/modules" className="hover:text-blue-600">Modul Pembelajaran</Link>
        <span>/</span>
        <span className="text-gray-800 font-semibold">{currentModule.title}</span>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">📚</span>
          <div>
            <h1 className="text-3xl font-bold">{currentModule.title}</h1>
            <p className="text-blue-100 text-lg">{currentModule.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            ⏱️ Durasi: {currentModule.duration}
          </span>
          <span className="flex items-center gap-2">
            📖 {currentModule.sections.length} Bagian
          </span>
          <span className="flex items-center gap-2">
            ✅ Progress: {Math.round(((activeSection + 1) / currentModule.sections.length) * 100)}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 sticky top-6">
            <h3 className="font-bold text-gray-800 mb-4">Daftar Materi</h3>
            <div className="space-y-2">
              {currentModule.sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === index
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs">{index + 1}.</span>
                    <span className="text-sm">{section.title}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-xs text-blue-600 font-semibold mb-1">Progress Modul</p>
                <div className="bg-blue-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${((activeSection + 1) / currentModule.sections.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-blue-700">
                  {activeSection + 1} dari {currentModule.sections.length} bagian
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentSection.title}</h2>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentSection.content }}
              style={{
                lineHeight: "1.8",
              }}
            />

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                disabled={activeSection === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeSection === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                ← Sebelumnya
              </button>

              {activeSection === currentModule.sections.length - 1 ? (
                <Link
                  href="/modules"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  ✓ Selesai & Kembali
                </Link>
              ) : (
                <button
                  onClick={() => setActiveSection(Math.min(currentModule.sections.length - 1, activeSection + 1))}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Selanjutnya →
                </button>
              )}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              📎 Sumber Belajar Tambahan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">📄 Dokumen PDF</p>
                <p className="text-sm text-gray-600">Panduan lengkap warehouse operations</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">🎥 Video Tutorial</p>
                <p className="text-sm text-gray-600">Visualisasi proses warehouse</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">📊 Infografis</p>
                <p className="text-sm text-gray-600">Diagram dan flowchart operasional</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">✅ Quiz</p>
                <p className="text-sm text-gray-600">Uji pemahaman materi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
