"use client";

import Link from "next/link";

export function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Panel Pengurus</h1>
      </div>

      <div className="flex items-center gap-4">
        <span 
          className="text-sm font-medium text-gray-600 hidden md:block" 
          suppressHydrationWarning
        >
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition"
        >
          Lihat Web Publik
        </Link>
      </div>
    </header>
  );
}
