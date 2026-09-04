"use client";

export default function LaporanPage() {
  const filterLaporan = () => {
    alert("Filter diterapkan");
  };

  const exportLaporanExcel = () => {
    alert("Export ke Excel");
  };

  const exportLaporanPDF = () => {
    alert("Export ke PDF");
  };

  return (
    <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Laporan Keuangan</h2>
        <p className="text-gray-500 text-sm">Konsolidasi data, filter periode, dan ekspor laporan.</p>
      </div>

      {/* Filter & Export Area */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex flex-col lg:flex-row items-end gap-4">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mulai Tanggal</label>
          <input type="date" id="lap-start" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Sampai Tanggal</label>
          <input type="date" id="lap-end" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
        </div>
        <div className="flex gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          <button onClick={filterLaporan} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium shadow flex-1 lg:flex-none transition-colors">
            <i className="fa-solid fa-filter mr-1"></i> Terapkan
          </button>
          <button onClick={exportLaporanExcel} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors" title="Export ke Excel">
            <i className="fa-solid fa-file-excel">Ex</i>
          </button>
          <button onClick={exportLaporanPDF} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors" title="Export ke PDF">
            <i className="fa-solid fa-file-pdf">Pdf</i>
          </button>
        </div>
      </div>

      {/* Tabel Laporan */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]" id="tabel-laporan-export">
            <thead>
              <tr className="bg-emerald-800 text-white text-sm border-b">
                <th className="py-4 px-6 font-semibold">Tanggal</th>
                <th className="py-4 px-6 font-semibold">Kategori</th>
                <th className="py-4 px-6 font-semibold">Keterangan</th>
                <th className="py-4 px-6 font-semibold text-right">Pemasukan</th>
                <th className="py-4 px-6 font-semibold text-right">Pengeluaran</th>
              </tr>
            </thead>
            <tbody id="tbl-laporan-body" className="text-sm divide-y divide-gray-100">
              <tr><td colSpan={5} className="py-8 text-center text-gray-400">Silakan terapkan filter untuk memuat data.</td></tr>
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-200">
              <tr className="font-bold text-gray-700">
                <td colSpan={3} className="py-4 px-6 text-right">TOTAL MUTASI</td>
                <td id="lap-tot-masuk" className="py-4 px-6 text-right text-green-600">Rp 0</td>
                <td id="lap-tot-keluar" className="py-4 px-6 text-right text-red-600">Rp 0</td>
              </tr>
              <tr className="font-bold bg-yellow-50 text-emerald-800">
                <td colSpan={3} className="py-4 px-6 text-right text-base">SALDO KAS (PERIODE FILTER)</td>
                <td colSpan={2} id="lap-saldo" className="py-4 px-6 text-center text-xl">Rp 0</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
