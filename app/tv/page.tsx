"use client";

import { useEffect, useState } from "react";
import { MosqueIcon } from "@/components/ui/MosqueIcon";
import { Clock, MapPin, Sparkles, Maximize2, Minimize2, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Timing = {
  id: string;
  name: string;
};

const pList: Timing[] = [
  { id: "Imsak", name: "IMSAK" },
  { id: "Fajr", name: "SUBUH" },
  { id: "Dhuhr", name: "DZUHUR" },
  { id: "Asr", name: "ASHAR" },
  { id: "Maghrib", name: "MAGHRIB" },
  { id: "Isha", name: "ISYA" },
];

export default function TVPage() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("Memuat Tanggal...");
  const [hijri, setHijri] = useState("...");
  const [timings, setTimings] = useState<any>(null);
  
  const [nextPrayerName, setNextPrayerName] = useState("...");
  const [countdown, setCountdown] = useState("-00:00:00");
  const [isUrgent, setIsUrgent] = useState(false);
  const [activePrayerId, setActivePrayerId] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fetchAPI = async () => {
    try {
      const res = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Pamekasan&country=Indonesia&method=11");
      const data = await res.json();
      if (data.code === 200) {
        setTimings(data.data.timings);
        const h = data.data.date.hijri;
        setHijri(`${h.day} ${h.month.en} ${h.year} H`);
      }
    } catch (e) {
      console.error("API Salat Error", e);
    }
  };

  useEffect(() => {
    fetchAPI();
    const interval = setInterval(fetchAPI, 1000 * 60 * 60); // 1 hour
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("id-ID", { hour12: false }));
      setDate(now.toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));

      if (timings) {
        let nextP = pList[1]; // Default Subuh
        let target = new Date(now);
        let found = false;

        for (let i = 1; i < pList.length; i++) {
          let p = pList[i];
          let [h, m] = timings[p.id].split(":");
          let t = new Date(now);
          t.setHours(parseInt(h), parseInt(m), 0, 0);
          
          if (t > now) {
            nextP = p;
            target = t;
            found = true;
            break;
          }
        }

        if (!found) {
          let [h, m] = timings["Fajr"].split(":");
          target = new Date(now);
          target.setDate(target.getDate() + 1);
          target.setHours(parseInt(h), parseInt(m), 0, 0);
          nextP = pList[1];
        }

        const diff = target.getTime() - now.getTime();
        
        setIsUrgent(diff > 0 && diff < 10 * 60 * 1000); // < 10 minutes

        const s = Math.floor((diff / 1000) % 60).toString().padStart(2, "0");
        const m = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, "0");
        const hStr = Math.floor((diff / 1000 / 60 / 60) % 24).toString().padStart(2, "0");
        
        setNextPrayerName(nextP.name);
        setCountdown(`-${hStr}:${m}:${s}`);
        setActivePrayerId(nextP.id);
      }
    };

    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, [timings]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="bg-[#021a13] h-screen w-full flex flex-col justify-between overflow-hidden relative font-sans text-white mesh-ambient-bg mashrabiya-watermark select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800;900&family=Space+Grotesk:wght@500;700&display=swap');
        .clock-font { font-family: 'Space Grotesk', system-ui, sans-serif; }
        @keyframes ticker {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-ticker {
          display: inline-block;
          animation: ticker 32s linear infinite;
        }
      `}} />

      {/* Floating Control Buttons */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <Link
          href="/"
          className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/15 text-white transition-all shadow-lg"
          title="Kembali ke Beranda"
        >
          <ArrowLeft size={18} />
        </Link>
        <button
          onClick={toggleFullscreen}
          className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/15 text-white transition-all shadow-lg"
          title="Mode Layar Penuh (Fullscreen)"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Top Header Bar */}
      <header className="relative z-10 flex justify-between items-center p-8 lg:p-10 border-b border-white/10 bg-emerald-950/40 backdrop-blur-2xl">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center text-emerald-950 shadow-xl shadow-yellow-500/25 border-2 border-yellow-200/60">
            <MosqueIcon size={44} variant="solid" className="text-emerald-950" />
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-wide uppercase drop-shadow-md">
              MASJID WALI SONGO
            </h1>
            <div className="flex items-center gap-2 text-base lg:text-lg text-emerald-200 mt-1 font-medium">
              <MapPin size={16} className="text-yellow-400" />
              <span>Sakaddu Barat, Desa Bungbaruh, Kec. Kadur, Kab. Pamekasan</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-6xl lg:text-7xl font-black clock-font text-yellow-400 tracking-wider drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">
            {time || "00:00:00"}
          </div>
          <div className="text-xl mt-2 text-white font-semibold">{date}</div>
          <div className="text-base text-emerald-300 font-medium mt-0.5">{hijri}</div>
        </div>
      </header>

      {/* Center Screen: Next Prayer Big Liquid Glass Countdown */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-8 py-6">
        <div className="liquid-bento-card bg-emerald-950/60 border border-white/20 p-10 lg:p-14 text-center max-w-4xl w-full shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold uppercase tracking-widest text-sm mb-4">
            <Clock size={18} className="text-yellow-400" />
            <span>Menuju Waktu Salat Berikutnya</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Menuju Waktu{" "}
            <span className="text-yellow-400 uppercase ml-2 underline decoration-yellow-400/50 underline-offset-8">
              {nextPrayerName}
            </span>
          </h2>

          <div
            className={`text-8xl lg:text-[10rem] leading-none clock-font font-black tracking-widest drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] ${
              isUrgent ? "text-rose-400 animate-pulse" : "text-white"
            }`}
          >
            {countdown}
          </div>

          {isUrgent && (
            <div className="mt-6 px-6 py-2 rounded-full bg-rose-500/25 border border-rose-500/40 text-rose-200 text-sm font-bold tracking-widest uppercase inline-block animate-pulse">
              Persiapan Iqamah / Luruskan Shaf
            </div>
          )}
        </div>
      </main>

      {/* Bottom Prayer Times Grid (Liquid Glass Tiles) */}
      <div className="relative z-10 px-8 lg:px-12 pb-6">
        <div className="grid grid-cols-6 gap-5">
          {!timings ? (
            <div className="col-span-6 text-center text-emerald-200 text-xl animate-pulse">
              Menghubungkan ke sistem jadwal Kemenag Pamekasan...
            </div>
          ) : (
            pList.map((p) => {
              const isActive = p.id === activePrayerId;
              return (
                <div
                  key={p.id}
                  className={`rounded-3xl border-2 p-6 lg:p-7 text-center flex flex-col justify-center transition-all duration-500 ${
                    isActive
                      ? "liquid-glass-gold border-yellow-400 shadow-[0_0_35px_rgba(234,179,8,0.4)] scale-105"
                      : "liquid-glass-dark border-white/15"
                  }`}
                >
                  <h3
                    className={`text-lg lg:text-xl font-bold tracking-widest uppercase mb-2 ${
                      isActive ? "text-yellow-300 font-black" : "text-emerald-300"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <div
                    className={`text-4xl lg:text-5xl font-extrabold clock-font drop-shadow-md ${
                      isActive ? "text-white" : "text-emerald-100"
                    }`}
                  >
                    {timings[p.id]}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Running Marquee Ticker Footer */}
      <footer className="relative z-10 bg-emerald-950/80 backdrop-blur-2xl text-emerald-100 text-xl font-semibold py-4 px-4 whitespace-nowrap overflow-hidden border-t border-yellow-400/40 shadow-2xl">
        <div className="tracking-wide animate-ticker flex items-center">
          <Sparkles size={20} className="text-yellow-400 mx-4 inline-block flex-shrink-0" />
          Selamat Datang di Masjid Wali Songo Sakaddu Barat, Desa Bungbaruh, Kadur, Pamekasan
          <Sparkles size={20} className="text-yellow-400 mx-4 inline-block flex-shrink-0" />
          Mohon lurus dan rapatkan shaf sebelum salat berjamaah dimulai
          <Sparkles size={20} className="text-yellow-400 mx-4 inline-block flex-shrink-0" />
          Harap menonaktifkan atau mensenyapkan telepon seluler (HP) selama berada di dalam masjid
          <Sparkles size={20} className="text-yellow-400 mx-4 inline-block flex-shrink-0" />
          Salurkan Zakat, Infaq, dan Sadaqah (ZISWAF) terbaik Anda melalui Rekening Resmi BSI 7123456789 a.n. Masjid Wali Songo
          <Sparkles size={20} className="text-yellow-400 mx-4 inline-block flex-shrink-0" />
        </div>
      </footer>
    </div>
  );
}
