"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { MosqueIcon } from "@/components/ui/MosqueIcon";

// Dynamically import 3D Scene with ssr: false for optimal client-side WebGL rendering
const MasjidWalisongoScene = dynamic(
  () => import("@/components/3d/MasjidWalisongoScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[480px] sm:h-[540px] lg:h-[620px] rounded-3xl liquid-glass-dark flex flex-col items-center justify-center p-8 animate-pulse">
        <div className="w-16 h-16 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin mb-4" />
        <p className="text-xs uppercase tracking-widest text-emerald-200/70 font-semibold">
          Memuat Diorama 3D Masjid Walisongo...
        </p>
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision & Action Hierarchy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Sacred Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-6 backdrop-blur-2xl shadow-lg shadow-emerald-950/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <MapPin size={13} className="text-yellow-400" />
              <span>Sakaddu Barat, Desa Bungbaruh, Kadur, Pamekasan</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl"
            >
              Kemuliaan Ibadah, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_4px_16px_rgba(234,179,8,0.3)]">
                Pemberdayaan Umat
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-emerald-100/85 font-normal leading-relaxed mb-8 max-w-xl"
            >
              Menghadirkan oase spiritual yang menyejukkan hati di Madura. Berlandaskan manhaj Ahlussunnah wal Jama'ah, merawat ukhuwah islamiyah melalui dakwah santun dan transparansi amanah.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link
                href="#donasi"
                className="w-full sm:w-auto liquid-sheen flex items-center justify-center gap-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-emerald-950 px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-xl shadow-yellow-500/25 border border-yellow-200/60 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <HeartHandshake size={18} />
                Salurkan Donasi
                <ArrowRight size={16} />
              </Link>
              
              <Link
                href="#jadwal"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-2xl px-8 py-4 rounded-2xl font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
              >
                <CalendarDays size={18} className="text-yellow-400" />
                Jadwal Salat & Imsakiyah
              </Link>
            </motion.div>

            {/* Stat Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/10"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="block text-xl font-black text-yellow-400">5 Waktu</span>
                <span className="text-[11px] font-medium text-emerald-200/70">Salat Berjamaah</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="block text-xl font-black text-emerald-400">100%</span>
                <span className="text-[11px] font-medium text-emerald-200/70">Amanah & Transparan</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="block text-xl font-black text-white">24 Jam</span>
                <span className="text-[11px] font-medium text-emerald-200/70">Layanan Umat</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Poly 3D Masjid Walisongo Diorama */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Backlight Glow behind 3D Canvas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/15 rounded-full blur-2xl pointer-events-none" />
            
            {/* Interactive 3D Canvas Container */}
            <div className="relative rounded-3xl p-1.5 liquid-glass-dark shadow-2xl">
              <MasjidWalisongoScene />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
