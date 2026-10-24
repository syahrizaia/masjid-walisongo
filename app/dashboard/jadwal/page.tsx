"use client";

import { useState } from "react";
import { Clock, CalendarPlus, X, User, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface JadwalItem {
  id: number;
  tgl: string;
  tugas: string;
  nama: string;
  hp: string;
}

export default function JadwalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jadwalList, setJadwalList] = useState<JadwalItem[]>([
    {
      id: 1,
      tgl: "Jumat, 04 Sep 2026",
      tugas: "Khatib Jumat",
      nama: "KH. Ahmad Bahauddin",
      hp: "0812-9876-5432",
    },
    {
      id: 2,
      tgl: "Jumat, 04 Sep 2026",
      tugas: "Muadzin Jumat",
      nama: "Ust. M. Ridwan",
      hp: "0857-1234-5678",
    },
    {
      id: 3,
      tgl: "Sabtu, 05 Sep 2026",
      tugas: "Imam Salat Rawatib",
      nama: "Ust. H. Muzammil",
      hp: "0821-3456-7890",
    },
  ]);

  const [formData, setFormData] = useState({
    tgl: new Date().toISOString().split("T")[0],
    tugas: "Khatib Jumat",
    nama: "",
    hp: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveJadwal = (e: React.FormEvent) => {
    e.preventDefault();
    setJadwalList([
      ...jadwalList,
      {
        id: jadwalList.length + 1,
        ...formData,
      },
    ]);
    closeModal();
    setFormData({
      tgl: new Date().toISOString().split("T")[0],
      tugas: "Khatib Jumat",
      nama: "",
      hp: "",
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Jadwal Petugas Salat</h2>
            <p className="text-xs text-emerald-200/70 mt-1 font-medium">
              Penetapan jadwal giliran Imam Rawatib, Khatib Khutbah Jumat, dan Muadzin.
            </p>
          </div>
          <Button variant="secondary" onClick={openModal}>
            <CalendarPlus size={16} />
            Buat Jadwal Baru
          </Button>
        </div>

        {/* Tabel Jadwal */}
        <div className="liquid-bento-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-yellow-400" />
              <h3 className="text-base font-bold text-white">Roster Petugas Ibadah</h3>
            </div>
            <span className="text-xs text-emerald-200/70">{jadwalList.length} Jadwal Ditetapkan</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="py-4 px-6 font-bold">Waktu / Tanggal</th>
                  <th className="py-4 px-6 font-bold">Jenis Tugas</th>
                  <th className="py-4 px-6 font-bold">Nama Petugas</th>
                  <th className="py-4 px-6 font-bold">Nomor Kontak</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {jadwalList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs text-emerald-100">{item.tgl}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        item.tugas === "Khatib Jumat"
                          ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      }`}>
                        {item.tugas}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-white">{item.nama}</td>
                    <td className="py-4 px-6 font-mono text-xs text-emerald-200 flex items-center gap-1.5 mt-2">
                      <Phone size={13} className="text-yellow-400" />
                      {item.hp || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Jadwal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="liquid-bento-card bg-emerald-950/90 border border-white/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-5 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="font-bold text-lg text-yellow-300 flex items-center gap-2">
                <CalendarPlus size={18} />
                Input Jadwal Petugas
              </h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={handleSaveJadwal}>
              <Input
                type="text"
                label="Tanggal / Hari Penugasan"
                placeholder="Cth: Jumat, 11 September 2026"
                value={formData.tgl}
                onChange={(e) => setFormData({ ...formData, tgl: e.target.value })}
                required
              />
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Jenis Tugas</label>
                <select
                  className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.tugas}
                  onChange={(e) => setFormData({ ...formData, tugas: e.target.value })}
                >
                  <option value="Khatib Jumat" className="bg-emerald-950">Khatib Jumat</option>
                  <option value="Imam Salat Rawatib" className="bg-emerald-950">Imam Salat Rawatib</option>
                  <option value="Muadzin" className="bg-emerald-950">Muadzin</option>
                  <option value="Imam Tarawih" className="bg-emerald-950">Imam Tarawih</option>
                </select>
              </div>

              <Input
                label="Nama Petugas"
                placeholder="Nama Ustadz / Petugas"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />

              <Input
                label="Nomor HP (Opsional)"
                placeholder="08xxxxxxxxxx"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <Button variant="outline" type="button" onClick={closeModal}>
                  Batal
                </Button>
                <Button variant="secondary" type="submit">
                  Simpan Jadwal
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
