"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function KegiatanSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const events = [
    {
      id: 1,
      title: "Kajian Tafsir Al-Qur'an Jalalain",
      speaker: "KH. Ahmad Bahauddin",
      role: "Pengasuh Ponpes & Ulama Fiqih",
      date: "Setiap Ahad Subuh",
      time: "05:00 - 06:30 WIB",
      type: "Kajian Rutin",
      location: "Ruang Salat Utama",
      image: "https://images.unsplash.com/photo-1594958316104-e593bd783307?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Tabligh Akbar Menyambut Bulan Suci Ramadhan",
      speaker: "Ust. H. Abdul Somad, Lc., D.E.S.A.",
      role: "Dai Nasional & Pakar Hadits",
      date: "25 Sya'ban 1448 H / 12 Mar 2027",
      time: "19:30 WIB - Selesai",
      type: "Tabligh Akbar",
      location: "Pelataran & Aula Utama",
      image: "https://images.unsplash.com/photo-1587563871167-1ea9f000bbce?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Bimbingan Tahsin & Tajwid Al-Qur'an Dewasa",
      speaker: "Ust. H. Muzammil Hasballah, S.T.",
      role: "Qari Internasional & Pengajar Tahsin",
      date: "Setiap Selasa Malam (Ba'da Isya)",
      time: "19:30 - 21:00 WIB",
      type: "Kelas Khusus",
      location: "Ruang Perpustakaan Masjid",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaab31ce?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filters = ["Semua", "Kajian Rutin", "Tabligh Akbar", "Kelas Khusus"];

  const filteredEvents =
    activeFilter === "Semua"
      ? events
      : events.filter((e) => e.type === activeFilter);

  return (
    <section id="kegiatan" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-xl"
            >
              <BookOpen size={14} />
              Agenda Dakwah & Keilmuan
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-white"
            >
              Majelis Ilmu & Tabligh Akbar
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  activeFilter === f
                    ? "bg-yellow-400 text-emerald-950 shadow-md shadow-yellow-500/20"
                    : "text-emerald-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="liquid-bento-card overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Event Image & Glass Badge */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-emerald-950 text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {event.type}
                  </div>
                  
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white leading-snug drop-shadow-md">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Speaker & Meta Info */}
                <div className="p-6 space-y-5">
                  {/* Speaker */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-yellow-300 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                        Narasumber
                      </p>
                      <p className="font-bold text-white text-sm">{event.speaker}</p>
                      <p className="text-[11px] text-emerald-100/60">{event.role}</p>
                    </div>
                  </div>

                  {/* Schedule Details */}
                  <div className="space-y-2.5 text-xs text-emerald-100/80 font-medium">
                    <div className="flex items-center gap-3">
                      <Calendar size={15} className="text-yellow-400 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={15} className="text-yellow-400 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={15} className="text-yellow-400 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-yellow-400 hover:text-emerald-950 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10">
                  Konfirmasi Kehadiran
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
