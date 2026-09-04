"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "🏠", href: "/dashboard" },
  { id: "keuangan", label: "Keuangan", icon: "💰", href: "/dashboard/keuangan" },
  { id: "donasi", label: "Donasi ZISWAF", icon: "🤲", href: "/dashboard/donasi" },
  { id: "kegiatan", label: "Kegiatan", icon: "📅", href: "/dashboard/kegiatan" },
  { id: "jamaah", label: "Jamaah & Pengurus", icon: "👥", href: "/dashboard/jamaah" },
  { id: "inventaris", label: "Inventaris", icon: "📦", href: "/dashboard/inventaris" },
  { id: "jadwal", label: "Jadwal Petugas", icon: "⏰", href: "/dashboard/jadwal" },
  { id: "surat", label: "Surat Menyurat", icon: "✉️", href: "/dashboard/surat" },
  { id: "laporan", label: "Laporan", icon: "📄", href: "/dashboard/laporan" },
  { id: "auditlog", label: "Audit Log (System)", icon: "⏱️", href: "/dashboard/auditlog" },
  { id: "modetv", label: "Mode TV", icon: "📺", href: "/tv" },
];

export function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-emerald-950 text-white shadow-xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
              <span className="text-emerald-950 font-bold">MWS</span>
            </div>
            <span className="font-bold text-lg tracking-wide uppercase">SIM Masjid</span>
          </div>
          <button className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        <div className="px-6 py-2">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            Menu Utama
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 space-y-1 pb-4 custom-scrollbar">
          {MENU_ITEMS.map((menu) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.id}
                href={menu.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
                    : "text-emerald-100 hover:bg-emerald-800 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{menu.icon}</span>
                {menu.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-emerald-800">
          <div className="bg-emerald-900 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
              👤
            </div>
            <div>
              <p className="font-semibold text-sm">Admin Masjid</p>
              <p className="text-xs text-emerald-300">Administrator</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
