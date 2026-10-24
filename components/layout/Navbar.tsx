"use client";

import Link from "next/link";
import { Menu, Globe, Calendar, UserCheck } from "lucide-react";

export function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-30 bg-emerald-950/70 backdrop-blur-2xl border-b border-white/10 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 hover:text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
          aria-label="Buka menu navigasi"
        >
          <Menu size={20} />
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <h1 className="text-base font-bold text-white tracking-wide">
            Panel Pengurus Masjid Wali Songo
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div 
          className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-200/80 bg-white/5 px-3.5 py-1.5 rounded-xl border border-white/10" 
          suppressHydrationWarning
        >
          <Calendar size={14} className="text-yellow-400" />
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-bold text-emerald-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 px-4 py-2 rounded-xl transition-all shadow-md shadow-yellow-500/20 active:scale-95"
        >
          <Globe size={14} />
          <span>Lihat Web Publik</span>
        </Link>
      </div>
    </header>
  );
}
