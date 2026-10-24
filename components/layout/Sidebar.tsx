"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wallet,
  HeartHandshake,
  Calendar,
  Users,
  Package,
  Clock,
  Mail,
  FileText,
  ShieldAlert,
  Tv,
  X,
  UserCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { MosqueIcon } from "@/components/ui/MosqueIcon";

const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "keuangan", label: "Buku Kas & Keuangan", icon: Wallet, href: "/dashboard/keuangan" },
  { id: "donasi", label: "Donasi ZISWAF", icon: HeartHandshake, href: "/dashboard/donasi" },
  { id: "kegiatan", label: "Agenda & Kajian", icon: Calendar, href: "/dashboard/kegiatan" },
  { id: "jamaah", label: "Jamaah & Pengurus", icon: Users, href: "/dashboard/jamaah" },
  { id: "inventaris", label: "Inventaris Aset", icon: Package, href: "/dashboard/inventaris" },
  { id: "jadwal", label: "Jadwal Petugas", icon: Clock, href: "/dashboard/jadwal" },
  { id: "surat", label: "Surat Menyurat", icon: Mail, href: "/dashboard/surat" },
  { id: "laporan", label: "Laporan Keuangan", icon: FileText, href: "/dashboard/laporan" },
  { id: "auditlog", label: "Audit Log Sistem", icon: ShieldAlert, href: "/dashboard/auditlog" },
  { id: "modetv", label: "Mode TV Masjid", icon: Tv, href: "/tv" },
];

export function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-emerald-950/85 backdrop-blur-3xl border-r border-white/10 text-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-emerald-950 shadow-lg shadow-yellow-500/25 border border-yellow-200/50 group-hover:scale-105 transition-transform">
              <MosqueIcon size={22} variant="solid" className="text-emerald-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-wider uppercase text-white group-hover:text-yellow-400 transition-colors">
                SIM Walisongo
              </span>
              <span className="text-[10px] text-emerald-300 font-semibold tracking-widest uppercase">
                Panel Takmir
              </span>
            </div>
          </Link>
          <button
            className="lg:hidden w-8 h-8 rounded-xl bg-white/10 text-emerald-200 hover:text-white flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup navigasi"
          >
            <X size={16} />
          </button>
        </div>

        {/* Section Title */}
        <div className="px-6 pt-5 pb-2">
          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
            Navigasi Utama
          </p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-4 space-y-1.5 pb-4 custom-scrollbar">
          {MENU_ITEMS.map((menu) => {
            const Icon = menu.icon;
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.id}
                href={menu.href}
                className={`flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold tracking-wide transition-all duration-200 group ${
                  isActive
                    ? "liquid-glass-gold border-yellow-400/50 text-white shadow-lg shadow-yellow-500/15"
                    : "text-emerald-100/75 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "text-yellow-400" : "text-emerald-300 group-hover:text-yellow-400"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span>{menu.label}</span>
                </div>
                {isActive && <ChevronRight size={14} className="text-yellow-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Active User Footer Pill */}
        <div className="p-4 border-t border-white/10">
          <div className="liquid-glass-dark p-3.5 rounded-2xl flex items-center gap-3 border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-yellow-300 shadow-md">
              <UserCircle size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-xs text-white truncate">Admin Masjid</p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-300">
                <ShieldCheck size={11} className="text-yellow-400" />
                <span>Super Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
