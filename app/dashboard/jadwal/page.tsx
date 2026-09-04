"use client";

import { useState } from "react";

export default function JadwalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveJadwal = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Jadwal disimpan");
    closeModal();
  };

  return (
    <>
      <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Jadwal Petugas Salat</h2>
            <p className="text-gray-500 text-sm">Jadwal Imam, Khatib Jumat, dan Muadzin.</p>
          </div>
          <button onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors text-sm md:text-base">
            <i className="fa-solid fa-calendar-plus mr-1"></i> Buat Jadwal
          </button>
        </div>

        {/* Tabel Jadwal */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                  <th className="py-3 px-6 font-medium">Waktu / Tanggal</th>
                  <th className="py-3 px-6 font-medium">Jenis Tugas</th>
                  <th className="py-3 px-6 font-medium">Nama Petugas</th>
                  <th className="py-3 px-6 font-medium">No. HP</th>
                </tr>
              </thead>
              <tbody id="tbl-jadwal-body" className="text-sm divide-y divide-gray-100">
                <tr><td colSpan={4} className="py-8 text-center text-gray-400">Memuat data...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Jadwal */}
      {isModalOpen && (
        <div id="modal-jadwal" className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-emerald-800 p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">Input Jadwal Petugas</h3>
              <button onClick={closeModal} className="text-white/70 hover:text-white">
                <i className="fa-solid fa-times text-xl">✖</i>
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={handleSaveJadwal}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal / Hari</label>
                <input type="date" id="jdw-tgl" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Tugas</label>
                <select id="jdw-tugas" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required>
                  <option value="Khatib Jumat">Khatib Jumat</option>
                  <option value="Imam Salat Rawatib">Imam Salat Rawatib</option>
                  <option value="Muadzin">Muadzin</option>
                  <option value="Imam Tarawih">Imam Tarawih</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Petugas</label>
                <input type="text" id="jdw-nama" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. HP (Opsional)</label>
                <input type="text" id="jdw-hp" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg shadow transition-colors">Simpan Jadwal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
