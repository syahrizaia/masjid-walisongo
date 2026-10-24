"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Image as ImageIcon, Eye, Sparkles } from "lucide-react";
import { useState } from "react";

export function GaleriSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=1200&auto=format&fit=crop",
      title: "Keagungan Mihrab & Saf Salat Berjamaah",
      category: "Ibadah",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop",
      title: "Majelis Pengajian Kitab Kuning",
      category: "Kajian",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop",
      title: "Santunan & Berbagi Berkah Dhuafa",
      category: "Sosial",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=1200&auto=format&fit=crop",
      title: "Suasana Damai Pelataran Masjid Malam Hari",
      category: "Arsitektur",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="galeri" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-xl"
          >
            <ImageIcon size={14} />
            Dokumentasi Kegiatan
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white"
          >
            Galeri Rekam Jejak Masjid
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-emerald-100/80 mt-4 leading-relaxed font-normal"
          >
            Merekam setiap momen sakral peribadatan, kehangatan majelis taklim, dan kebersamaan umat di Masjid Wali Songo.
          </motion.p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[280px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer liquid-bento-card border border-white/15 ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Liquid Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider mb-1">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {img.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={14} className="text-yellow-400" />
                  Perbesar Foto
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Foto Diperbesar"
              fill
              className="object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-xl text-sm font-bold border border-white/20"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
