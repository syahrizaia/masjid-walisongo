"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Heart, CheckCircle2, ShieldCheck, Compass, Sparkles } from "lucide-react";
import Image from "next/image";
import { MosqueIcon } from "@/components/ui/MosqueIcon";

export function ProfilSection() {
  const fasilitas = [
    "Ruang Salat Utama Full AC & Karpet Turki Tebal",
    "Perpustakaan Khazanah Islamiyah & Ruang Baca",
    "Aula Serbaguna Pertemuan & Akad Nikah Syar'i",
    "Layanan Ambulans Siaga Gratis 24 Jam",
    "Baitul Maal ZISWAF Terdaftar & Teraudit",
    "Klinik Layanan Kesehatan Dasar Dhuafa",
    "Area Wudhu Modern Ramah Difabel & Lansia",
    "Sound System Berkualitas Tinggi & Jernih",
  ];

  return (
    <section id="profil" className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xl"
          >
            <MosqueIcon size={16} variant="outline" className="text-yellow-400" />
            Mengenal Masjid Wali Songo
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6"
          >
            Pusat Ibadah, Khidmah & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
              Peradaban Luhur di Pamekasan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal"
          >
            Masjid Wali Songo di Sakaddu Barat, Desa Bungbaruh, hadir melayani umat dengan memadukan nilai keagungan ajaran para wali songo nusantara, kenyamanan ibadah kontemporer, dan tata kelola profesional.
          </motion.p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Vision Glass Bento (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between liquid-bento-card p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Compass size={14} />
                Visi & Manhaj Perjuangan
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                "Menjadi pusat percontohan masjid yang mandiri, menyejukkan hati umat, dan memakmurkan masyarakat berlandaskan Ahlussunnah wal Jama'ah."
              </h3>
              
              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-8">
                Kami meyakini masjid bukan sekadar tempat salat lima waktu, melainkan episentrum kebangkitan ilmu, santunan sosial bagi fakir miskin, dan pembinaan generasi muda yang berakhlakul karimah.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 relative z-10">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Dakwah & Ta'lim</h4>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    Kajian bersanad, tahsin Qur'an, dan kajian tematik fiqih muamalah.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center flex-shrink-0 border border-yellow-400/30">
                  <Heart size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Bakti Sosial Umat</h4>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    Beasiswa santri yatim, sembako janda dhuafa, dan posko bencana.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Facilities & Excellence (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 liquid-bento-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-yellow-400 mb-4">
                <Sparkles size={18} />
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Fasilitas & Layanan Prima
                </h4>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Kenyamanan Penuh untuk Segenap Jamaah
              </h3>

              <div className="space-y-3">
                {fasilitas.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-emerald-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-emerald-300 font-medium">
              <ShieldCheck size={18} className="text-yellow-400" />
              <span>Standar kebersihan & sanitasi terjaga 24 jam</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
