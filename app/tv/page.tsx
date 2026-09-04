"use client";

import { useEffect, useState } from "react";

type Timing = {
  id: string;
  name: string;
};

const pList: Timing[] = [
  { id: 'Imsak', name: 'IMSAK' },
  { id: 'Fajr', name: 'SUBUH' },
  { id: 'Dhuhr', name: 'DZUHUR' },
  { id: 'Asr', name: 'ASHAR' },
  { id: 'Maghrib', name: 'MAGHRIB' },
  { id: 'Isha', name: 'ISYA' }
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
      setTime(now.toLocaleTimeString('id-ID', { hour12: false }));
      setDate(now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

      if (timings) {
        let nextP = pList[1]; // Default Subuh
        let target = new Date(now);
        let found = false;

        for (let i = 1; i < pList.length; i++) {
          let p = pList[i];
          let [h, m] = timings[p.id].split(':');
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
          let [h, m] = timings['Fajr'].split(':');
          target = new Date(now);
          target.setDate(target.getDate() + 1);
          target.setHours(parseInt(h), parseInt(m), 0, 0);
          nextP = pList[1];
        }

        const diff = target.getTime() - now.getTime();
        
        setIsUrgent(diff > 0 && diff < 10 * 60 * 1000); // < 10 minutes

        const s = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
        const m = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, '0');
        const hStr = Math.floor((diff / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
        
        setNextPrayerName(nextP.name);
        setCountdown(`-${hStr}:${m}:${s}`);
        setActivePrayerId(nextP.id);
      }
    };

    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, [timings]);

  return (
    <div className="bg-[#022c22] h-screen w-full flex flex-col justify-between overflow-hidden relative font-sans text-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap');
        .clock-font { font-family: 'Orbitron', sans-serif; }
        .bg-pattern { background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); }
        @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}} />

      <div className="absolute inset-0 bg-pattern opacity-100 z-0 pointer-events-none"></div>

      {/* Top Header */}
      <header className="relative z-10 flex justify-between items-center p-8 lg:p-12 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-emerald-900">
            <i className="fa-solid fa-mosque text-5xl text-emerald-900"></i>
          </div>
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-emerald-400 tracking-wide uppercase drop-shadow-md">MASJID WALI SONGO</h1>
            <p className="text-xl lg:text-2xl text-emerald-100 mt-2 font-medium">Sakaddu Barat, Desa Bungbaruh, Kadur, Pamekasan</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-7xl lg:text-8xl font-black clock-font text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">{time || "00:00:00"}</div>
          <div className="text-2xl mt-4 text-white font-semibold">{date}</div>
          <div className="text-xl text-emerald-300 font-medium mt-1">{hijri}</div>
        </div>
      </header>

      {/* Center Screen (Next Prayer Countdown) */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center p-8">
        <div className="bg-black/40 backdrop-blur-sm border-2 border-emerald-500/30 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-semibold text-emerald-100 mb-6">
            Menuju Waktu <span className="text-yellow-400 font-bold uppercase text-5xl ml-2">{nextPrayerName}</span>
          </h2>
          <div className={`text-[10rem] leading-none clock-font font-bold tracking-widest drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] ${isUrgent ? 'text-red-500 animate-pulse' : 'text-white'}`}>
            {countdown}
          </div>
        </div>
      </main>

      {/* Bottom (Prayer Times Grid) */}
      <div className="relative z-10 px-8 lg:px-12 pb-8">
        <div className="grid grid-cols-6 gap-6">
          {!timings ? (
            <div className="col-span-6 text-center text-emerald-200 text-2xl animate-pulse">Menghubungkan ke sistem jadwal Kemenag...</div>
          ) : (
            pList.map(p => (
              <div 
                key={p.id}
                className={`rounded-3xl border-2 p-8 text-center flex flex-col justify-center transform transition duration-500 shadow-lg ${p.id === activePrayerId ? 'bg-emerald-600/90 border-yellow-400 scale-105 shadow-yellow-500/50' : 'bg-black/50 border-emerald-500/30 backdrop-blur-md'}`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-emerald-300 tracking-widest mb-3">{p.name}</h3>
                <div className="text-5xl lg:text-6xl font-extrabold clock-font text-white drop-shadow-md">
                  {timings[p.id]}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Running Text (Footer) */}
      <footer className="relative z-10 bg-emerald-900 text-white text-4xl font-semibold py-5 px-4 whitespace-nowrap overflow-hidden border-t-8 border-yellow-500 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <div className="tracking-wide animate-marquee">
          <i className="fa-solid fa-star-and-crescent text-yellow-400 mx-4"></i> Selamat Datang di Masjid Wali Songo 
          <i className="fa-solid fa-star-and-crescent text-yellow-400 mx-4"></i> Mohon lurus dan rapatkan shaf sebelum salat berjamaah dimulai 
          <i className="fa-solid fa-star-and-crescent text-yellow-400 mx-4"></i> Harap menonaktifkan atau mensenyapkan telepon seluler (HP) Anda selama berada di dalam masjid 
          <i className="fa-solid fa-star-and-crescent text-yellow-400 mx-4"></i> Salurkan Zakat, Infaq, dan Sadaqah (ZISWAF) terbaik Anda untuk kemakmuran masjid melalui Rekening BSI (Bank Syariah Indonesia) 7123456789 a.n Masjid Wali Songo
          <i className="fa-solid fa-star-and-crescent text-yellow-400 mx-4"></i>
        </div>
      </footer>
    </div>
  );
}
