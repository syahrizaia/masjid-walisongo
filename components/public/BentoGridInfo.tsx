"use client";

import { motion } from "framer-motion";
import { Clock, Info, ArrowUpRight, Bell, Sparkles, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface PrayerSchedule {
  name: string;
  time: string;
  isNext?: boolean;
}

export function BentoGridInfo() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [countdown, setCountdown] = useState("-00:00:00");
  const [nextPrayer, setNextPrayer] = useState("Ashar");
  const [prayerTimes, setPrayerTimes] = useState<PrayerSchedule[]>([
    { name: "Subuh", time: "04:12" },
    { name: "Dzuhur", time: "11:32" },
    { name: "Ashar", time: "14:52", isNext: true },
    { name: "Maghrib", time: "17:38" },
    { name: "Isya", time: "18:49" },
  ]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("id-ID", { hour12: false }));
      setDate(
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Pamekasan Prayer Times from Aladhan
  useEffect(() => {
    async function fetchPrayers() {
      try {
        const res = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Pamekasan&country=Indonesia&method=11"
        );
        const json = await res.json();
        if (json.code === 200 && json.data) {
          const t = json.data.timings;
          setPrayerTimes([
            { name: "Subuh", time: t.Fajr },
            { name: "Dzuhur", time: t.Dhuhr },
            { name: "Ashar", time: t.Asr, isNext: true },
            { name: "Maghrib", time: t.Maghrib },
            { name: "Isya", time: t.Isha },
          ]);
        }
      } catch (err) {
        console.warn("Using default prayer schedule for Pamekasan:", err);
      }
    }
    fetchPrayers();
  }, []);

  return (
    <section id="jadwal" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Next Prayer & Schedule Widget (8 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 liquid-bento-card p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest block">
                  Jadwal Waktu Salat Hari Ini
                </span>
                <span className="text-sm font-medium text-emerald-100/70">{date || "Pamekasan & Sekitarnya"}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white tracking-wider">
                {time || "00:00:00"} WIB
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-300 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800">
                <MapPin size={12} className="text-yellow-400" />
                Pamekasan
              </div>
            </div>
          </div>

          {/* Prayer Time Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 mt-6">
            {prayerTimes.map((prayer) => {
              const isActive = prayer.isNext;
              return (
                <div
                  key={prayer.name}
                  className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center relative ${
                    isActive
                      ? "bg-gradient-to-b from-yellow-500/25 to-yellow-600/10 border-2 border-yellow-400 shadow-[0_0_24px_rgba(234,179,8,0.25)] scale-105"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <span className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-yellow-400 text-emerald-950 text-[10px] font-black uppercase tracking-wider">
                      Berikutnya
                    </span>
                  )}
                  <span
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      isActive ? "text-yellow-300" : "text-emerald-200/70"
                    }`}
                  >
                    {prayer.name}
                  </span>
                  <span
                    className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                      isActive ? "text-white drop-shadow-md" : "text-emerald-100"
                    }`}
                  >
                    {prayer.time}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Live Announcement Widget (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-4 liquid-bento-card p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-emerald-900/60 via-emerald-950/70 to-emerald-900/40 relative overflow-hidden group"
        >
          {/* Subtle Sheen */}
          <div className="absolute top-0 right-0 p-8 opacity-10 text-yellow-400 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            <Sparkles size={90} />
          </div>

          <div>
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              <div className="w-8 h-8 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                <Bell size={16} />
              </div>
              <h3 className="font-bold tracking-widest uppercase text-xs">Maklumat Masjid</h3>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2 leading-snug">
              Kajian Akbar Kitab Al-Hikam
            </h4>
            
            <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
              Insya Allah malam ini ba'da Maghrib bersama KH. Ahmad Bahauddin. Disediakan hidangan buka puasa sunnah & santapan berkah.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-emerald-300 font-medium">Ruang Salat Utama</span>
            <Link
              href="#kegiatan"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors group-hover:translate-x-1"
            >
              Lihat Agenda
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
