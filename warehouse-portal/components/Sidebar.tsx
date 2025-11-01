"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: "📊",
  },
  {
    title: "Modul Pembelajaran",
    href: "/modules",
    icon: "📚",
  },
  {
    title: "Prosedur Operasional",
    href: "/procedures",
    icon: "📋",
  },
  {
    title: "Manajemen Inventory",
    href: "/inventory",
    icon: "📦",
  },
  {
    title: "Keselamatan Kerja",
    href: "/safety",
    icon: "🦺",
  },
  {
    title: "Quiz & Assessment",
    href: "/quiz",
    icon: "✅",
  },
  {
    title: "Progress Saya",
    href: "/progress",
    icon: "📈",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white min-h-screen fixed left-0 top-0 shadow-xl">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-4xl">🏭</div>
          <div>
            <h1 className="text-xl font-bold">Portal Warehouse</h1>
            <p className="text-xs text-blue-200">Sistem Pembelajaran</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-white text-blue-900 font-semibold shadow-lg"
                    : "hover:bg-blue-700 text-blue-50"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 p-4 bg-blue-950 rounded-lg">
          <p className="text-xs text-blue-200 mb-2">Selamat Datang!</p>
          <p className="text-sm font-semibold">Karyawan Baru</p>
          <div className="mt-3 bg-blue-800 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: "45%" }}></div>
          </div>
          <p className="text-xs text-blue-200 mt-1">Progress: 45%</p>
        </div>
      </div>
    </aside>
  );
}
