"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, Heart, CheckCircle2 } from "lucide-react";

export function ProfilSection() {
  const fasilitas = [
    "Ruang Salat Utama Full AC",
    "Perpustakaan Islami & Ruang Baca",
    "Aula Serbaguna untuk Pernikahan",
    "Ambulans Gratis 24 Jam",
    "Lembaga Amil Zakat Nasional (LAZNAS)",
    "Klinik Kesehatan Umat"
  ];

  return (
    <section id="profil" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
          >
            Tentang Kami
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-emerald-950 mt-3 mb-6"
          >
            Lebih Dari Sekadar Tempat Ibadah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Masjid Wali Songo hadir sebagai mercusuar peradaban Islam di jantung Pamekasan. Kami berkomitmen menyelenggarakan kegiatan dakwah yang menyejukkan, mengelola dana umat dengan transparan, dan menyediakan fasilitas terbaik untuk kesejahteraan jamaah.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-emerald-900/20" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
              <h3 className="text-xl font-bold text-emerald-950 mb-2">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Menjadi percontohan masjid mandiri yang memakmurkan dan dimakmurkan oleh jamaahnya berlandaskan manhaj Ahlussunnah wal Jama'ah.
              </p>
            </div>
          </motion.div>

          {/* Features / Pillars */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
                <BookOpen size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Pendidikan & Dakwah</h4>
                <p className="text-gray-600 leading-relaxed">Menyelenggarakan kajian rutin, tahsin qur'an, dan bimbingan pranikah secara komprehensif.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 shadow-inner">
                <Heart size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sosial & Kemanusiaan</h4>
                <p className="text-gray-600 leading-relaxed">Penyaluran beasiswa santri, bantuan musibah, dan sembako dhuafa melalui baitul maal terakreditasi.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm mt-8"
            >
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" /> Fasilitas Unggulan
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fasilitas.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
