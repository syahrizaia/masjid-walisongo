"use client";

import { useState } from "react";

export default function SuratPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveSurat = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Surat disimpan");
    closeModal();
  };

  return (
    <>
      <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Surat Menyurat</h2>
            <p className="text-gray-500 text-sm">Arsip Surat Masuk dan Surat Keluar.</p>
          </div>
          <button onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors text-sm md:text-base">
            <i className="fa-solid fa-envelope-open-text mr-1"></i> Tambah Arsip
          </button>
        </div>

        {/* Tabel Surat */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                  <th className="py-3 px-6 font-medium">Tanggal</th>
                  <th className="py-3 px-6 font-medium">No. Surat</th>
                  <th className="py-3 px-6 font-medium">Jenis</th>
                  <th className="py-3 px-6 font-medium">Perihal</th>
                  <th className="py-3 px-6 font-medium">Pengirim / Tujuan</th>
                </tr>
              </thead>
              <tbody id="tbl-surat-body" className="text-sm divide-y divide-gray-100">
                <tr><td colSpan={5} className="py-8 text-center text-gray-400">Memuat data...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Surat */}
      {isModalOpen && (
        <div id="modal-surat" className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-emerald-800 p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">Input Arsip Surat</h3>
              <button onClick={closeModal} className="text-white/70 hover:text-white">
                <i className="fa-solid fa-times text-xl">✖</i>
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={handleSaveSurat}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                  <input type="date" id="srt-tgl" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Surat</label>
                  <select id="srt-jenis" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required>
                    <option value="Surat Masuk">Surat Masuk</option>
                    <option value="Surat Keluar">Surat Keluar</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. Surat</label>
                <input type="text" id="srt-no" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Perihal</label>
                <input type="text" id="srt-perihal" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pengirim / Tujuan</label>
                <input type="text" id="srt-pihak" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg shadow transition-colors">Simpan Arsip</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
