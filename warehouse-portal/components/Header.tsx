"use client";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 ml-64">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Portal Informasi Warehouse</h2>
          <p className="text-sm text-gray-600">Media Pembelajaran Internal untuk Karyawan Baru</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            🔔 Notifikasi
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              K
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
