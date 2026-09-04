"use client";

import { motion } from "framer-motion";
import { TrendingUp, Wallet, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

export function TransparansiSection() {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHzmMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0Vi0yaC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMGYyaDR2NGgyVjZoNFY0SDZ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-400 font-bold tracking-widest uppercase text-sm"
          >
            Laporan Keuangan
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mt-3 mb-6"
          >
            Transparansi Dana Umat
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed"
          >
            Kami meyakini bahwa amanah umat harus dikelola secara profesional dan transparan. Berikut adalah ringkasan keuangan kas masjid bulan ini.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Saldo Kas */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-900/50 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-emerald-950 mb-6 shadow-lg">
              <Wallet size={32} />
            </div>
            <p className="text-emerald-200 font-medium mb-1">Total Saldo Kas</p>
            <h3 className="text-4xl font-bold text-white mb-4">Rp 45.500.000</h3>
            <div className="flex items-center gap-2 text-sm text-emerald-300 font-medium bg-emerald-950/50 w-fit px-3 py-1.5 rounded-full border border-emerald-800">
              <TrendingUp size={16} className="text-yellow-400" />
              Naik 12% dari bulan lalu
            </div>
          </motion.div>

          {/* Pemasukan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-emerald-900/50 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-8"
          >
            <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-600/50">
              <ArrowDownToLine size={32} />
            </div>
            <p className="text-emerald-200 font-medium mb-1">Pemasukan Bulan Ini</p>
            <h3 className="text-4xl font-bold text-white mb-4">Rp 12.350.000</h3>
            <p className="text-emerald-400/80 text-sm leading-relaxed">
              Berasal dari infaq Jumat, kotak amal harian, dan donatur tetap/transfer.
            </p>
          </motion.div>

          {/* Pengeluaran */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-emerald-900/50 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-8"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400 mb-6 border border-red-500/30">
              <ArrowUpFromLine size={32} />
            </div>
            <p className="text-emerald-200 font-medium mb-1">Pengeluaran Bulan Ini</p>
            <h3 className="text-4xl font-bold text-white mb-4">Rp 8.200.000</h3>
            <p className="text-emerald-400/80 text-sm leading-relaxed">
              Biaya operasional (listrik, air), kebersihan, honor pemateri, dan bantuan dhuafa.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
