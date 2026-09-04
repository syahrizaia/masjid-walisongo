"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export function KegiatanSection() {
  const events = [
    {
      id: 1,
      title: "Kajian Tafsir Jalalain",
      speaker: "KH. Ahmad Bahauddin",
      date: "Setiap Ahad Subuh",
      time: "05:00 - 06:30 WIB",
      type: "Kajian Rutin",
      image: "https://images.unsplash.com/photo-1594958316104-e593bd783307?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Tabligh Akbar Menyambut Ramadhan",
      speaker: "Ust. H. Abdul Somad, Lc., D.E.S.A.",
      date: "25 Sya'ban 1448 H / 12 Mar 2027",
      time: "19:30 - Selesai",
      type: "Tabligh Akbar",
      image: "https://images.unsplash.com/photo-1587563871167-1ea9f000bbce?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Bimbingan Tahsin Al-Qur'an Dewasa",
      speaker: "Ust. H. Muzammil Hasballah",
      date: "Setiap Selasa Malam",
      time: "18:30 - 20:00 WIB",
      type: "Kelas Khusus",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaab31ce?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <section id="kegiatan" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
            >
              Agenda Mendatang
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2"
            >
              Kajian & Majelis Ilmu
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold py-3 px-6 rounded-full transition-colors self-start md:self-auto"
          >
            Lihat Semua Jadwal
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                  {event.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white leading-snug">
                  {event.title}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Pemateri</p>
                    <p className="font-bold text-gray-900">{event.speaker}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 font-medium">
                    <Calendar size={18} className="text-emerald-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 font-medium">
                    <Clock size={18} className="text-emerald-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 font-medium">
                    <MapPin size={18} className="text-emerald-500" />
                    <span>Ruang Salat Utama</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
