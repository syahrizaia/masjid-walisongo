"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GaleriSection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
          >
            Dokumentasi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6"
          >
            Galeri Masjid
          </motion.h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={`Galeri ${index + 1}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg tracking-wider border-2 border-white px-6 py-2 rounded-full">
                  Lihat Foto
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}
