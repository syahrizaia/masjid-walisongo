"use client";

import { useState } from "react";

export default function DonasiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isKwitansiOpen, setIsKwitansiOpen] = useState(false);
  const [donasiTipe, setDonasiTipe] = useState("Uang");

  const openModalDonasi = () => setIsModalOpen(true);
  const closeModalDonasi = () => setIsModalOpen(false);

  const toggleDonasiTipe = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDonasiTipe(e.target.value);
  };

  const handleSaveDonasi = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi save
    setIsModalOpen(false);
    setIsKwitansiOpen(true);
  };

  const cetakKwitansi = () => {
    window.print();
  };

  const tutupKwitansi = () => {
    setIsKwitansiOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
            body * { visibility: hidden; }
            #print-area, #print-area * { visibility: visible; }
            #print-area {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                box-shadow: none !important;
            }
            .no-print { display: none !important; }
        }
      `}} />

      <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Manajemen Donasi</h2>
            <p className="text-gray-500 text-sm">Penerimaan Zakat, Infaq, Sadaqah, dan Wakaf (ZISWAF).</p>
          </div>
          <button 
            onClick={openModalDonasi} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors text-sm md:text-base"
          >
            <i className="fa-solid fa-hand-holding-dollar mr-1"></i> Terima Donasi Baru
          </button>
        </div>

        {/* Tabel Donasi */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                  <th className="py-3 px-6 font-medium">Tanggal</th>
                  <th className="py-3 px-6 font-medium">Donatur</th>
                  <th className="py-3 px-6 font-medium">Kategori</th>
                  <th className="py-3 px-6 font-medium">Nominal / Aset</th>
                  <th className="py-3 px-6 font-medium text-center">Aksi</th>
                </tr>
              </thead>
              <tbody id="tbl-donasi-body" className="text-sm divide-y divide-gray-100">
                <tr><td colSpan={5} className="py-8 text-center text-gray-400">Memuat data donasi...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Donasi */}
      {isModalOpen && (
        <div id="modal-donasi" className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">Input Penerimaan Donasi</h3>
              <button onClick={closeModalDonasi} className="text-white/70 hover:text-white">
                <i className="fa-solid fa-times text-xl">✖</i>
              </button>
            </div>
            <form id="form-donasi" className="p-6 space-y-4" onSubmit={handleSaveDonasi}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                <input type="date" id="dn-tanggal" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Donatur</label>
                <input type="text" id="dn-nama" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Hamba Allah / Nama Terang" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                  <select id="dn-kategori" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" required>
                    <option value="Infaq">Infaq</option>
                    <option value="Sadaqah">Sadaqah</option>
                    <option value="Zakat">Zakat</option>
                    <option value="Wakaf">Wakaf</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bentuk Donasi</label>
                  <select id="dn-tipe" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" onChange={toggleDonasiTipe} required>
                    <option value="Uang">Uang (Rp)</option>
                    <option value="Barang">Barang / Aset</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" id="lbl-dn-nilai">{donasiTipe === 'Uang' ? 'Nominal (Rp)' : 'Nilai Barang / Aset'}</label>
                <input type="text" id="dn-nilai" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Contoh: 100000 / 10 Sak Semen" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keterangan Tambahan</label>
                <input type="text" id="dn-ket" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Opsional (cth: untuk pembangunan atap)" />
              </div>
              <div className="pt-2">
                <button type="submit" id="btn-save-dn" className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2.5 rounded-lg shadow transition-colors">Simpan & Terbitkan Kwitansi</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Cetak Kwitansi */}
      {isKwitansiOpen && (
        <div id="modal-kwitansi" className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-2xl relative" id="print-area">
            <div className="border-b-4 border-emerald-600 pb-4 mb-6 text-center">
              <h2 className="text-2xl font-bold text-emerald-800 tracking-wide uppercase">Kwitansi Tanda Terima</h2>
              <p className="text-sm font-medium text-gray-600 mt-1">Masjid Wali Songo - Bungbaruh, Kadur, Kab. Pamekasan</p>
            </div>
            <div className="space-y-4 text-gray-800 text-base">
              <div className="flex"><span className="w-40 font-bold">No. Referensi</span><span className="mr-2">:</span> <span id="kw-no" className="font-mono text-gray-600">DON-001</span></div>
              <div className="flex"><span className="w-40 font-bold">Telah terima dari</span><span className="mr-2">:</span> <span id="kw-nama" className="font-semibold text-lg uppercase">Hamba Allah</span></div>
              <div className="flex"><span className="w-40 font-bold">Kategori / Jenis</span><span className="mr-2">:</span> <span id="kw-kategori">Infaq</span></div>
              <div className="flex"><span className="w-40 font-bold">Uang / Barang</span><span className="mr-2">:</span> <span id="kw-nilai" className="font-bold text-xl text-emerald-800 bg-green-50 px-3 py-1 rounded">Rp 100.000</span></div>
              <div className="flex"><span className="w-40 font-bold">Keterangan</span><span className="mr-2">:</span> <span id="kw-ket" className="italic">-</span></div>
            </div>
            <div className="mt-12 flex justify-between text-center text-sm font-medium text-gray-700">
              <div>
                <br /><br /><br />
                <p>( <span id="kw-donatur-ttd" className="font-bold px-8 text-gray-800">Donatur</span> )</p>
              </div>
              <div>
                <p>Pamekasan, <span id="kw-tgl" className="font-semibold">04 September 2026</span></p>
                <br /><br />
                <p>( <span className="font-bold px-8 text-emerald-800">Pengurus / Takmir</span> )</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 italic font-serif">
              Jazakumullahu khairan katsiran. Semoga Allah membalas dengan kebaikan yang berlipat ganda.
            </div>
          </div>
          
          <div className="absolute top-4 right-4 flex gap-2 no-print">
            <button onClick={cetakKwitansi} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-lg font-medium transition-colors"><i className="fa-solid fa-print mr-1"></i> Cetak Dokumen</button>
            <button onClick={tutupKwitansi} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-lg font-medium transition-colors"><i className="fa-solid fa-times mr-1"></i> Tutup</button>
          </div>
        </div>
      )}
    </>
  );
}
