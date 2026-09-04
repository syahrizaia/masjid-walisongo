"use client";

import { useState } from "react";

export default function InventarisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveInventaris = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inventaris disimpan");
    closeModal();
  };

  return (
    <>
      <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Inventaris Masjid</h2>
            <p className="text-gray-500 text-sm">Pencatatan barang dan aset milik masjid.</p>
          </div>
          <button onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors text-sm md:text-base">
            <i className="fa-solid fa-box mr-1"></i> Tambah Inventaris
          </button>
        </div>

        {/* Tabel Inventaris */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                  <th className="py-3 px-6 font-medium">Kode Barang</th>
                  <th className="py-3 px-6 font-medium">Nama Barang</th>
                  <th className="py-3 px-6 font-medium">Jumlah</th>
                  <th className="py-3 px-6 font-medium">Kondisi</th>
                  <th className="py-3 px-6 font-medium">Sumber / Donatur</th>
                </tr>
              </thead>
              <tbody id="tbl-inventaris-body" className="text-sm divide-y divide-gray-100">
                <tr><td colSpan={5} className="py-8 text-center text-gray-400">Memuat data...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Inventaris */}
      {isModalOpen && (
        <div id="modal-inventaris" className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-emerald-800 p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">Input Aset Baru</h3>
              <button onClick={closeModal} className="text-white/70 hover:text-white">
                <i className="fa-solid fa-times text-xl">✖</i>
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={handleSaveInventaris}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Barang</label>
                <input type="text" id="inv-nama" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah</label>
                  <input type="number" id="inv-jumlah" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" min="1" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kondisi</label>
                  <select id="inv-kondisi" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required>
                    <option value="Baik">Baik</option>
                    <option value="Rusak Ringan">Rusak Ringan</option>
                    <option value="Rusak Berat">Rusak Berat</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sumber Barang</label>
                <input type="text" id="inv-sumber" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" placeholder="Beli / Wakaf dari Hamba Allah" required />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg shadow transition-colors">Simpan Inventaris</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
