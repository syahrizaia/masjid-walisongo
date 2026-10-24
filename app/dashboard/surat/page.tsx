"use client";

import { useState } from "react";
import { Mail, MailPlus, X, FileText, Send, Inbox } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface SuratItem {
  id: number;
  tgl: string;
  no: string;
  jenis: string;
  perihal: string;
  pihak: string;
}

export default function SuratPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suratList, setSuratList] = useState<SuratItem[]>([
    {
      id: 1,
      tgl: "2026-09-01",
      no: "014/MWS/SK/IX/2026",
      jenis: "Surat Keluar",
      perihal: "Permohonan Izin Penyelenggaraan Pengajian Akbar",
      pihak: "Kantor Kecamatan Kadur",
    },
    {
      id: 2,
      tgl: "2026-08-28",
      no: "B-210/KUA.13/BA.00/08/2026",
      jenis: "Surat Masuk",
      perihal: "Himbauan Pendataan ZISWAF Berbasis Digital",
      pihak: "KUA Kecamatan Kadur",
    },
    {
      id: 3,
      tgl: "2026-08-20",
      no: "013/MWS/SK/VIII/2026",
      jenis: "Surat Keluar",
      perihal: "Undangan Rapat Pembentukan Panitia Maulid",
      pihak: "Seluruh Tokoh Masyarakat Bungbaruh",
    },
  ]);

  const [formData, setFormData] = useState({
    tgl: new Date().toISOString().split("T")[0],
    no: "",
    jenis: "Surat Masuk",
    perihal: "",
    pihak: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveSurat = (e: React.FormEvent) => {
    e.preventDefault();
    setSuratList([
      ...suratList,
      {
        id: suratList.length + 1,
        ...formData,
      },
    ]);
    closeModal();
    setFormData({
      tgl: new Date().toISOString().split("T")[0],
      no: "",
      jenis: "Surat Masuk",
      perihal: "",
      pihak: "",
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Arsip Persuratan & Administrasi</h2>
            <p className="text-xs text-emerald-200/70 mt-1 font-medium">
              Dokumentasi surat masuk resmi dan surat keluar pengurus takmir.
            </p>
          </div>
          <Button variant="secondary" onClick={openModal}>
            <MailPlus size={16} />
            Tambah Arsip Surat
          </Button>
        </div>

        {/* Tabel Surat */}
        <div className="liquid-bento-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-400" />
              <h3 className="text-base font-bold text-white">Buku Agenda Surat Masuk & Keluar</h3>
            </div>
            <span className="text-xs text-emerald-200/70">{suratList.length} Berkas Diarsipkan</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="py-4 px-6 font-bold">Tanggal</th>
                  <th className="py-4 px-6 font-bold">Nomor Berkas</th>
                  <th className="py-4 px-6 font-bold">Jenis</th>
                  <th className="py-4 px-6 font-bold">Perihal Surat</th>
                  <th className="py-4 px-6 font-bold">Pengirim / Tujuan</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {suratList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs text-emerald-100">{item.tgl}</td>
                    <td className="py-4 px-6 font-mono text-xs font-bold text-yellow-300">{item.no}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                        item.jenis === "Surat Masuk"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      }`}>
                        {item.jenis === "Surat Masuk" ? <Inbox size={12} /> : <Send size={12} />}
                        {item.jenis}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-white">{item.perihal}</td>
                    <td className="py-4 px-6 text-emerald-100/70">{item.pihak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Surat */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="liquid-bento-card bg-emerald-950/90 border border-white/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-5 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="font-bold text-lg text-yellow-300 flex items-center gap-2">
                <MailPlus size={18} />
                Input Arsip Surat
              </h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={handleSaveSurat}>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  label="Tanggal"
                  value={formData.tgl}
                  onChange={(e) => setFormData({ ...formData, tgl: e.target.value })}
                  required
                />
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Jenis Surat</label>
                  <select
                    className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.jenis}
                    onChange={(e) => setFormData({ ...formData, jenis: e.target.value })}
                  >
                    <option value="Surat Masuk" className="bg-emerald-950">Surat Masuk</option>
                    <option value="Surat Keluar" className="bg-emerald-950">Surat Keluar</option>
                  </select>
                </div>
              </div>

              <Input
                label="Nomor Surat Resmi"
                placeholder="Cth: 015/MWS/SK/IX/2026"
                value={formData.no}
                onChange={(e) => setFormData({ ...formData, no: e.target.value })}
                required
              />

              <Input
                label="Perihal / Pokok Surat"
                placeholder="Cth: Undangan Peringatan Nuzulul Qur'an"
                value={formData.perihal}
                onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                required
              />

              <Input
                label="Pengirim / Tujuan"
                placeholder="Cth: Kemenag Pamekasan / Camat Kadur"
                value={formData.pihak}
                onChange={(e) => setFormData({ ...formData, pihak: e.target.value })}
                required
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <Button variant="outline" type="button" onClick={closeModal}>
                  Batal
                </Button>
                <Button variant="secondary" type="submit">
                  Simpan Berkas
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
