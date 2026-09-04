"use client";

import { motion } from "framer-motion";
import { Clock, Info, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function BentoGridInfo() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('id-ID', { hour12: false }));
    update();
    const int = setInterval(update, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Next Prayer Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Clock size={120} />
          </div>
          <h3 className="text-emerald-300 font-semibold tracking-widest uppercase text-sm mb-2">Menuju Waktu Salat</h3>
          <div className="flex items-end gap-4 mb-4">
            <h2 className="text-4xl md:text-6xl font-black text-yellow-400 drop-shadow-md">AShar</h2>
            <span className="text-xl md:text-3xl text-emerald-100 mb-1">15:12</span>
          </div>
          <div className="flex items-center gap-3 text-lg font-medium">
            <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-lg border border-red-500/30 animate-pulse">
              -01:45:30
            </div>
            <span className="text-emerald-100/70">Waktu saat ini: {time || "..."}</span>
          </div>
        </motion.div>

        {/* Announcement Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bg-gradient-to-br from-emerald-800 to-emerald-900 border border-emerald-700/50 rounded-3xl p-8 shadow-2xl text-white flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-emerald-300 mb-4">
              <Info size={20} />
              <h3 className="font-semibold tracking-widest uppercase text-sm">Info Masjid</h3>
            </div>
            <p className="text-lg font-medium leading-relaxed">
              Pengajian rutin Kitab Al-Hikam malam ini *BA'DA MAGHRIB* bersama KH. Ahmad.
            </p>
          </div>
          <Link href="#kegiatan" className="mt-6 flex items-center gap-2 text-yellow-400 font-bold hover:text-yellow-300 transition-colors group">
            Lihat Agenda 
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
