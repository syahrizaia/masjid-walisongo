"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-emerald-950">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/60 to-emerald-950" />

      {/* Grid Pattern overlay for tech/modern feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0Vi0yaC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMGYyaDR2NGgyVjZoNFY0SDZ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-200 text-sm font-medium mb-8 backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Pusat Kajian & Pemberdayaan Umat di Pamekasan
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl"
        >
          Masjid <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Wali Songo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-3xl mb-12 font-light leading-relaxed"
        >
          Membangun peradaban mulia melalui ruang ibadah yang nyaman, majelis ilmu yang memberdayakan, serta penyaluran ZISWAF yang amanah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#jadwal"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl shadow-white/10"
          >
            <CalendarDays size={20} />
            Jadwal Salat
          </Link>
          <Link
            href="#donasi"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-800/40 border border-emerald-500/30 text-white backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-800/60 transition-all hover:scale-105"
          >
            Salurkan Donasi
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-yellow-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
