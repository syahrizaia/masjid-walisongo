"use client";

import { useState } from "react";
import { Users, UserPlus, X, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface JamaahItem {
  id: number;
  nama: string;
  hp: string;
  alamat: string;
  status: string;
}

export default function JamaahPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jamaahList, setJamaahList] = useState<JamaahItem[]>([
    {
      id: 1,
      nama: "H. Abdullah Munir",
      hp: "0812-3456-7890",
      alamat: "Dusun Sakaddu Barat RT 02 / RW 01",
      status: "Aktif",
    },
    {
      id: 2,
      nama: "Ust. M. Syukron",
      hp: "0857-8901-2345",
      alamat: "Dusun Bungbaruh Timur RT 01 / RW 02",
      status: "Aktif",
    },
    {
      id: 3,
      nama: "Hj. Siti Aisyah",
      hp: "0821-6789-0123",
      alamat: "Dusun Sakaddu Tengah RT 03 / RW 01",
      status: "Aktif",
    },
  ]);

  const [formData, setFormData] = useState({
    nama: "",
    hp: "",
    alamat: "",
    status: "Aktif",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveJamaah = (e: React.FormEvent) => {
    e.preventDefault();
    setJamaahList([
      ...jamaahList,
      {
        id: jamaahList.length + 1,
        ...formData,
      },
    ]);
    closeModal();
    setFormData({
      nama: "",
      hp: "",
      alamat: "",
      status: "Aktif",
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Database Jamaah & Warga</h2>
            <p className="text-xs text-emerald-200/70 mt-1 font-medium">
              Data sensus keanggotaan warga muslim Sakaddu Barat dan takmir masjid.
            </p>
          </div>
          <Button variant="secondary" onClick={openModal}>
            <UserPlus size={16} />
            Tambah Data Jamaah
          </Button>
        </div>

        {/* Tabel Jamaah */}
        <div className="liquid-bento-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-yellow-400" />
              <h3 className="text-base font-bold text-white">Daftar Anggota Jamaah</h3>
            </div>
            <span className="text-xs text-emerald-200/70">{jamaahList.length} Jamaah Terdata</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="py-4 px-6 font-bold">Nama Lengkap</th>
                  <th className="py-4 px-6 font-bold">Nomor Kontak (HP/WA)</th>
                  <th className="py-4 px-6 font-bold">Alamat Dusun / RT</th>
                  <th className="py-4 px-6 font-bold text-center">Status Keaktifan</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {jamaahList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{item.nama}</td>
                    <td className="py-4 px-6 font-mono text-xs text-emerald-200 flex items-center gap-1.5 mt-2">
                      <Phone size={13} className="text-yellow-400" />
                      {item.hp || "-"}
                    </td>
                    <td className="py-4 px-6 text-emerald-100/80">{item.alamat}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        item.status === "Aktif"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-white/10 text-white/60"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Jamaah */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="liquid-bento-card bg-emerald-950/90 border border-white/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-5 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="font-bold text-lg text-yellow-300 flex items-center gap-2">
                <UserPlus size={18} />
                Input Data Jamaah Baru
              </h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={handleSaveJamaah}>
              <Input
                label="Nama Lengkap"
                placeholder="Cth: H. Muhammad Arifin"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />
              <Input
                label="Nomor HP / WhatsApp"
                placeholder="0812xxxxxxxx"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
              />
              <Input
                label="Alamat Tempat Tinggal (Dusun/RT/RW)"
                placeholder="Cth: Dusun Sakaddu Barat RT 02"
                value={formData.alamat}
                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                required
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Status Keaktifan</label>
                <select
                  className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Aktif" className="bg-emerald-950">Aktif Berjamaah</option>
                  <option value="Pindah" className="bg-emerald-950">Pindah Domisili</option>
                  <option value="Meninggal" className="bg-emerald-950">Wafat / Almarhum</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <Button variant="outline" type="button" onClick={closeModal}>
                  Batal
                </Button>
                <Button variant="secondary" type="submit">
                  Simpan Data Jamaah
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
