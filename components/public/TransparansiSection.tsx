"use client";

import { motion } from "framer-motion";
import { TrendingUp, Wallet, ArrowDownToLine, ArrowUpFromLine, ShieldCheck, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export function TransparansiSection() {
  return (
    <section id="transparansi" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-xl"
          >
            <ShieldCheck size={14} />
            Akuntabilitas Publik
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white"
          >
            Transparansi Kas & Amanah Umat
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-emerald-100/80 mt-4 leading-relaxed font-normal"
          >
            Setiap rupiah infaq, sedekah, dan wakaf dicatat secara terbuka dan dilaporkan setiap pekan demi menjaga amanah para dermawan dan kemakmuran masjid.
          </motion.p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* 1. Saldo Kas */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-bento-card p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-emerald-950 mb-6 shadow-lg shadow-yellow-500/20 border border-yellow-200/50">
                <Wallet size={28} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">
                Total Saldo Kas Berjalan
              </p>
              <h3 className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mb-4">
                Rp 45.500.000
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-yellow-300 font-semibold bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
              <TrendingUp size={14} className="text-yellow-400" />
              Surplus +12.4% dari bulan lalu
            </div>
          </motion.div>

          {/* 2. Pemasukan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="liquid-bento-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/30">
                <ArrowDownToLine size={28} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">
                Pemasukan Bulan Ini
              </p>
              <h3 className="text-3xl sm:text-4xl font-black text-emerald-300 font-mono tracking-tight mb-3">
                Rp 12.350.000
              </h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed font-normal">
                Berasal dari infaq Jumat, kotak amal harian, transfer donatur tetap, dan QRIS BSI.
              </p>
            </div>
          </motion.div>

          {/* 3. Pengeluaran */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="liquid-bento-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400 mb-6 border border-red-500/30">
                <ArrowUpFromLine size={28} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">
                Pengeluaran Bulan Ini
              </p>
              <h3 className="text-3xl sm:text-4xl font-black text-rose-300 font-mono tracking-tight mb-3">
                Rp 8.200.000
              </h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed font-normal">
                Biaya listrik & air, honor marbot, santunan yatim piatu dhuafa, dan perlengkapan ibadah.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Audit Disclaimer & Download Link */}
        <div className="liquid-glass-dark p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-yellow-400 flex-shrink-0" />
            <p className="text-xs text-emerald-100/80">
              Laporan keuangan diaudit berkala oleh Dewan Pengawas Takmir Masjid Wali Songo Sakaddu Barat.
            </p>
          </div>
          <Link
            href="/dashboard/keuangan"
            className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-2 whitespace-nowrap"
          >
            <FileSpreadsheet size={16} />
            Lihat Rincian Buku Kas Lengkap
          </Link>
        </div>

      </div>
    </section>
  );
}
