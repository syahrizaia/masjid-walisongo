"use client";

import { useState } from "react";
import { Calendar, Plus, X, User, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface EventItem {
  id: number;
  nama: string;
  tgl: string;
  kategori: string;
  pj: string;
  status: string;
}

export default function KegiatanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<EventItem[]>([
    {
      id: 1,
      nama: "Kajian Fiqih Kitab Al-Hikam",
      tgl: "2026-09-04",
      kategori: "Pengajian",
      pj: "KH. Ahmad Bahauddin",
      status: "Terjadwal",
    },
    {
      id: 2,
      nama: "Rapat Pleno Persiapan Maulid Nabi",
      tgl: "2026-09-06",
      kategori: "Rapat",
      pj: "Sekretaris Takmir",
      status: "Terjadwal",
    },
    {
      id: 3,
      nama: "Khitanan Massal & Santunan Santri",
      tgl: "2026-08-28",
      kategori: "Acara Besar",
      pj: "Ketua Bidang Sosial",
      status: "Selesai",
    },
  ]);

  const [formData, setFormData] = useState({
    nama: "",
    tgl: new Date().toISOString().split("T")[0],
    kategori: "Pengajian",
    pj: "",
    status: "Terjadwal",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveKegiatan = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents([
      ...events,
      {
        id: events.length + 1,
        ...formData,
      },
    ]);
    closeModal();
    setFormData({
      nama: "",
      tgl: new Date().toISOString().split("T")[0],
      kategori: "Pengajian",
      pj: "",
      status: "Terjadwal",
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Agenda & Kegiatan Dakwah</h2>
            <p className="text-xs text-emerald-200/70 mt-1 font-medium">
              Manajemen jadwal pengajian, kajian kitab, musyawarah, dan peringatan hari besar Islam.
            </p>
          </div>
          <Button variant="secondary" onClick={openModal}>
            <Plus size={16} />
            Tambah Kegiatan Baru
          </Button>
        </div>

        {/* Tabel Kegiatan */}
        <div className="liquid-bento-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-yellow-400" />
              <h3 className="text-base font-bold text-white">Kalender Kegiatan Takmir</h3>
            </div>
            <span className="text-xs text-emerald-200/70">{events.length} Agenda Terdaftar</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="py-4 px-6 font-bold">Tanggal</th>
                  <th className="py-4 px-6 font-bold">Nama Agenda</th>
                  <th className="py-4 px-6 font-bold">Kategori</th>
                  <th className="py-4 px-6 font-bold">Pemateri / PJ</th>
                  <th className="py-4 px-6 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {events.map((event) => (
                  <tr key={event.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs text-emerald-100">{event.tgl}</td>
                    <td className="py-4 px-6 font-bold text-white">{event.nama}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-200 border border-white/15">
                        {event.kategori}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-emerald-100/80 font-medium">{event.pj}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        event.status === "Terjadwal"
                          ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                          : event.status === "Selesai"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                      }`}>
                        {event.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Kegiatan */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="liquid-bento-card bg-emerald-950/90 border border-white/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-5 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="font-bold text-lg text-yellow-300 flex items-center gap-2">
                <Calendar size={18} />
                Input Agenda Kegiatan
              </h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={handleSaveKegiatan}>
              <Input
                label="Nama Agenda Kegiatan"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  label="Tanggal"
                  value={formData.tgl}
                  onChange={(e) => setFormData({ ...formData, tgl: e.target.value })}
                  required
                />
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Kategori</label>
                  <select
                    className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  >
                    <option value="Pengajian" className="bg-emerald-950">Pengajian</option>
                    <option value="Rapat" className="bg-emerald-950">Rapat</option>
                    <option value="Acara Besar" className="bg-emerald-950">Acara Besar</option>
                    <option value="Lainnya" className="bg-emerald-950">Lainnya</option>
                  </select>
                </div>
              </div>

              <Input
                label="Penanggung Jawab / Pemateri"
                value={formData.pj}
                onChange={(e) => setFormData({ ...formData, pj: e.target.value })}
                required
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Status Pelaksanaan</label>
                <select
                  className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Terjadwal" className="bg-emerald-950">Terjadwal</option>
                  <option value="Selesai" className="bg-emerald-950">Selesai</option>
                  <option value="Batal" className="bg-emerald-950">Batal</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <Button variant="outline" type="button" onClick={closeModal}>
                  Batal
                </Button>
                <Button variant="secondary" type="submit">
                  Simpan Agenda
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
