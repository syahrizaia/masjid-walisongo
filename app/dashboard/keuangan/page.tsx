import { Card } from "@/components/ui/Card";
import { getKeuanganData } from "./actions";
import ClientForm from "./ClientForm";
import { ArrowDownToLine, ArrowUpFromLine, Wallet, FileSpreadsheet } from "lucide-react";

// Server Component (RSC)
export default async function KeuanganPage() {
  const data = await getKeuanganData();
  
  // Kalkulasi
  const totalPemasukan = data.filter(d => d.jenis === "Pemasukan").reduce((sum, d) => sum + d.nominal, 0);
  const totalPengeluaran = data.filter(d => d.jenis === "Pengeluaran").reduce((sum, d) => sum + d.nominal, 0);
  const saldo = totalPemasukan - totalPengeluaran;

  const formatRp = (nom: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(nom);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Buku Kas & Keuangan</h2>
          <p className="text-xs text-emerald-200/70 mt-1 font-medium">
            Pencatatan mutasi kas pemasukan dan pengeluaran operasional masjid.
          </p>
        </div>
        {/* Client Component untuk Form dan Modal */}
        <ClientForm />
      </div>

      {/* 3 Metric Cards with Liquid Glass */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="liquid-bento-card p-6 border-l-4 border-l-emerald-400">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <ArrowDownToLine size={20} />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Total Pemasukan</p>
          </div>
          <h3 className="text-2xl font-black text-emerald-300 font-mono">{formatRp(totalPemasukan)}</h3>
        </div>

        <div className="liquid-bento-card p-6 border-l-4 border-l-rose-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
              <ArrowUpFromLine size={20} />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-300">Total Pengeluaran</p>
          </div>
          <h3 className="text-2xl font-black text-rose-300 font-mono">{formatRp(totalPengeluaran)}</h3>
        </div>

        <div className="liquid-bento-card p-6 border-l-4 border-l-yellow-400 bg-yellow-500/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center border border-yellow-500/30">
              <Wallet size={20} />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">Saldo Akhir</p>
          </div>
          <h3 className="text-2xl font-black text-white font-mono">{formatRp(saldo)}</h3>
        </div>
      </div>

      {/* Liquid Glass Table */}
      <div className="liquid-bento-card overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSpreadsheet size={18} className="text-yellow-400" />
            <h3 className="text-base font-bold text-white">Mutasi Transaksi Terbaru</h3>
          </div>
          <span className="text-xs text-emerald-200/70">{data.length} Transaksi Tercatat</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                <th className="py-4 px-6 font-bold">Tanggal</th>
                <th className="py-4 px-6 font-bold">Jenis</th>
                <th className="py-4 px-6 font-bold">Kategori</th>
                <th className="py-4 px-6 font-bold">Keterangan</th>
                <th className="py-4 px-6 font-bold text-right">Nominal</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-mono text-xs text-emerald-100">{row.tanggal}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      row.jenis === "Pemasukan"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                    }`}>
                      {row.jenis}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-white">{row.kategori}</td>
                  <td className="py-4 px-6 text-emerald-100/70">{row.keterangan}</td>
                  <td className={`py-4 px-6 text-right font-bold font-mono ${
                    row.jenis === "Pemasukan" ? "text-emerald-300" : "text-rose-300"
                  }`}>
                    {row.jenis === "Pemasukan" ? "+" : "-"}{formatRp(row.nominal)}
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-emerald-200/60 text-sm">
                    Tidak ada data mutasi kas ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
