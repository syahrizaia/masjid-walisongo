import { Card } from "@/components/ui/Card";
import { getKeuanganData } from "./actions";
import ClientForm from "./ClientForm";

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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Keuangan</h2>
          <p className="text-gray-500 text-sm">Kelola pemasukan dan pengeluaran kas masjid.</p>
        </div>
        {/* Client Component untuk Form dan Modal */}
        <ClientForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border-l-4 border-emerald-500">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Pemasukan</p>
          <h3 className="text-2xl font-bold text-emerald-700">{formatRp(totalPemasukan)}</h3>
        </Card>
        <Card className="p-6 border-l-4 border-red-500">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Pengeluaran</p>
          <h3 className="text-2xl font-bold text-red-700">{formatRp(totalPengeluaran)}</h3>
        </Card>
        <Card className="p-6 border-l-4 border-blue-500 bg-blue-50">
          <p className="text-sm font-medium text-blue-800 mb-1">Saldo Akhir</p>
          <h3 className="text-2xl font-bold text-blue-900">{formatRp(saldo)}</h3>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="py-3 px-6 font-medium">Tanggal</th>
                <th className="py-3 px-6 font-medium">Jenis</th>
                <th className="py-3 px-6 font-medium">Kategori</th>
                <th className="py-3 px-6 font-medium">Keterangan</th>
                <th className="py-3 px-6 font-medium text-right">Nominal</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-6">{row.tanggal}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      row.jenis === "Pemasukan" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                    }`}>
                      {row.jenis}
                    </span>
                  </td>
                  <td className="py-3 px-6">{row.kategori}</td>
                  <td className="py-3 px-6 text-gray-500">{row.keterangan}</td>
                  <td className={`py-3 px-6 text-right font-bold ${
                    row.jenis === "Pemasukan" ? "text-emerald-600" : "text-red-600"
                  }`}>
                    {row.jenis === "Pemasukan" ? "+" : "-"}{formatRp(row.nominal)}
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">Tidak ada data transaksi.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
