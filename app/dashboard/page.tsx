import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Wallet, TrendingUp, Users, CalendarDays, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      {/* Header Overview */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Dashboard Utama</h2>
          <p className="text-xs text-emerald-200/70 mt-1 font-medium">
            Ringkasan eksekutif operasional, kas, dan kegiatan Masjid Wali Songo Sakaddu Barat.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 w-fit">
          <ShieldCheck size={16} className="text-yellow-400" />
          <span>Sistem Aktif & Terhubung</span>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Card 1 */}
        <Card variant="glass-dark" hoverEffect>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">Saldo Kas Utama</p>
                <h3 className="text-2xl font-black text-white font-mono">Rp 45.500.000</h3>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-emerald-950 shadow-lg shadow-yellow-500/20 border border-yellow-200/50">
                <Wallet size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-yellow-300">
              <TrendingUp size={13} />
              <span>Surplus kas berjalan bulan ini</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card variant="glass-dark" hoverEffect>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">Pemasukan Bulan Ini</p>
                <h3 className="text-2xl font-black text-white font-mono">Rp 12.350.000</h3>
              </div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-400/30">
                <TrendingUp size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-emerald-200/70">
              <span>Infaq Jumat, QRIS, & Kotak Amal</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card variant="glass-dark" hoverEffect>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">Total Jamaah</p>
                <h3 className="text-2xl font-black text-white font-mono">450 Warga</h3>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-300 border border-purple-400/30">
                <Users size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-emerald-200/70">
              <span>Warga terdaftar Sakaddu Barat</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card variant="glass-dark" hoverEffect>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">Kegiatan Terjadwal</p>
                <h3 className="text-2xl font-black text-white font-mono">8 Agenda</h3>
              </div>
              <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-300 border border-amber-400/30">
                <CalendarDays size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-emerald-200/70">
              <span>Kajian, rapat takmir, & TPA</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Tables & Feeds Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Agenda Terdekat (7 Cols) */}
        <div className="lg:col-span-7">
          <Card variant="glass-dark">
            <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/10">
              <div>
                <CardTitle className="text-lg">Agenda & Majelis Terdekat</CardTitle>
                <CardDescription>Jadwal kajian dan kegiatan ibadah pekan ini.</CardDescription>
              </div>
              <Link
                href="/dashboard/kegiatan"
                className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1"
              >
                Lihat Semua
                <ArrowUpRight size={14} />
              </Link>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  { tgl: "Hari Ini, 18:00 WIB", nama: "Kajian Fiqih Al-Hikam", pj: "KH. Ahmad Bahauddin", loc: "Ruang Utama" },
                  { tgl: "Besok, 15:30 WIB", nama: "Bimbingan TPA Santri Cilik", pj: "Ust. Fulan & Tim Asatidz", loc: "Perpustakaan" },
                  { tgl: "Jumat, 11:30 WIB", nama: "Salat Jumat & Pembagian Berkah", pj: "Khatib: Ust. Somad, Lc", loc: "Aula & Pelataran" },
                ].map((keg, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors gap-3"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-white mb-0.5">{keg.nama}</h4>
                      <p className="text-xs text-emerald-200/70 flex items-center gap-2">
                        <span>{keg.pj}</span>
                        <span>•</span>
                        <span>{keg.loc}</span>
                      </p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                      <span className="text-[11px] font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 px-3 py-1 rounded-full flex items-center gap-1 w-fit sm:ml-auto">
                        <Clock size={12} />
                        {keg.tgl}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Operations Banner (5 Cols) */}
        <div className="lg:col-span-5">
          <Card variant="glass-dark" className="h-full flex flex-col justify-between">
            <CardHeader className="pb-4 border-b border-white/10">
              <CardTitle className="text-lg">Operasional Cepat</CardTitle>
              <CardDescription>Pintasan transaksi dan administrasi harian takmir.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <Link
                href="/dashboard/keuangan"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                    <Wallet size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Input Mutasi Kas</h5>
                    <p className="text-xs text-emerald-100/60">Catat pemasukan atau pengeluaran kas</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-emerald-300 group-hover:text-yellow-400" />
              </Link>

              <Link
                href="/dashboard/donasi"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center border border-yellow-500/30">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Terima Donasi & Cetak Kwitansi</h5>
                    <p className="text-xs text-emerald-100/60">Terbitkan tanda terima ZISWAF resmi</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-emerald-300 group-hover:text-yellow-400" />
              </Link>

              <Link
                href="/tv"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-500/30">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Buka Layar Mode TV</h5>
                    <p className="text-xs text-emerald-100/60">Tampilkan signage digital di masjid</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-emerald-300 group-hover:text-yellow-400" />
              </Link>
            </CardContent>
          </Card>
        </div>

      </div>
    </>
  );
}
