"use client";

import { useState } from "react";
import { Filter, FileSpreadsheet, FileText, Download, Calendar, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LaporanPage() {
  const [isFiltered, setIsFiltered] = useState(true);

  const filterLaporan = () => {
    setIsFiltered(true);
  };

  const exportLaporanExcel = () => {
    alert("Mengunduh Laporan Kas dalam format Excel (.xlsx)...");
  };

  const exportLaporanPDF = () => {
    alert("Menyiapkan Cetak PDF Laporan Keuangan...");
  };

  const dummyLaporan = [
    { tgl: "2026-09-01", kat: "Infaq Jumat", ket: "Kotak amal pekan ke-1", masuk: 2500000, keluar: 0 },
    { tgl: "2026-09-02", kat: "Operasional Listrik", ket: "Pembayaran token PLN masjid", masuk: 0, keluar: 500000 },
    { tgl: "2026-09-03", kat: "Sedekah Subuh", ket: "Infaq jamaah subuh", masuk: 750000, keluar: 0 },
    { tgl: "2026-09-04", kat: "Kebersihan & Sanitasi", ket: "Beli sabun pel & pengharum karpet", masuk: 0, keluar: 200000 },
  ];

  const totMasuk = dummyLaporan.reduce((acc, cur) => acc + cur.masuk, 0);
  const totKeluar = dummyLaporan.reduce((acc, cur) => acc + cur.keluar, 0);
  const saldo = totMasuk - totKeluar;

  const formatRp = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white tracking-tight">Konsolidasi Laporan Keuangan</h2>
        <p className="text-xs text-emerald-200/70 mt-1 font-medium">
          Filter data berdasarkan rentang tanggal dan ekspor pembukuan resmi kas masjid.
        </p>
      </div>

      {/* Filter & Export Bar */}
      <div className="liquid-bento-card p-6 mb-8 flex flex-col lg:flex-row items-end gap-4 border border-white/10">
        <div className="flex-1 w-full">
          <label className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
            Mulai Tanggal
          </label>
          <input
            type="date"
            defaultValue="2026-09-01"
            className="w-full h-12 px-4 rounded-2xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
            Sampai Tanggal
          </label>
          <input
            type="date"
            defaultValue="2026-09-30"
            className="w-full h-12 px-4 rounded-2xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        
        <div className="flex gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          <Button variant="secondary" onClick={filterLaporan} className="flex-1 lg:flex-none">
            <Filter size={16} />
            Terapkan Filter
          </Button>
          <button
            onClick={exportLaporanExcel}
            className="h-11 px-4 rounded-2xl bg-emerald-600/80 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border border-emerald-400/30"
            title="Export ke Format Excel"
          >
            <FileSpreadsheet size={16} />
            <span>Excel</span>
          </button>
          <button
            onClick={exportLaporanPDF}
            className="h-11 px-4 rounded-2xl bg-rose-600/80 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border border-rose-400/30"
            title="Cetak / Export PDF"
          >
            <FileText size={16} />
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Tabel Laporan */}
      <div className="liquid-bento-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                <th className="py-4 px-6 font-bold">Tanggal</th>
                <th className="py-4 px-6 font-bold">Kategori</th>
                <th className="py-4 px-6 font-bold">Keterangan Transaksi</th>
                <th className="py-4 px-6 font-bold text-right">Pemasukan</th>
                <th className="py-4 px-6 font-bold text-right">Pengeluaran</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5">
              {dummyLaporan.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-mono text-xs text-emerald-100">{row.tgl}</td>
                  <td className="py-4 px-6 font-semibold text-white">{row.kat}</td>
                  <td className="py-4 px-6 text-emerald-100/70">{row.ket}</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-emerald-300">
                    {row.masuk > 0 ? formatRp(row.masuk) : "-"}
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-rose-300">
                    {row.keluar > 0 ? formatRp(row.keluar) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t-2 border-white/10 bg-black/30">
              <tr className="font-bold text-xs uppercase tracking-wider text-emerald-200">
                <td colSpan={3} className="py-4 px-6 text-right">TOTAL MUTASI PERIODE</td>
                <td className="py-4 px-6 text-right font-mono text-base text-emerald-300">{formatRp(totMasuk)}</td>
                <td className="py-4 px-6 text-right font-mono text-base text-rose-300">{formatRp(totKeluar)}</td>
              </tr>
              <tr className="font-black bg-yellow-500/15 border-t border-yellow-400/30 text-white">
                <td colSpan={3} className="py-4 px-6 text-right text-xs uppercase tracking-wider text-yellow-300">
                  SURPLUS / SALDO AKHIR KAS PERIODE
                </td>
                <td colSpan={2} className="py-4 px-6 text-center font-mono text-xl text-yellow-400">
                  {formatRp(saldo)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
