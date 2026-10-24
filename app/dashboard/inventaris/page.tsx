"use client";

import { useState } from "react";
import { Package, PackagePlus, X, ShieldCheck, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface InventarisItem {
  id: number;
  kode: string;
  nama: string;
  jumlah: number;
  kondisi: string;
  sumber: string;
}

export default function InventarisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemList, setItemList] = useState<InventarisItem[]>([
    {
      id: 1,
      kode: "INV-001",
      nama: "Genset Silent 5000W Krisbow",
      jumlah: 1,
      kondisi: "Baik",
      sumber: "Beli Kas Masjid",
    },
    {
      id: 2,
      kode: "INV-002",
      nama: "Mic Wireless Shure Beta 58",
      jumlah: 4,
      kondisi: "Baik",
      sumber: "Wakaf Hamba Allah",
    },
    {
      id: 3,
      kode: "INV-003",
      nama: "Vacuum Cleaner Karpet Karcher",
      jumlah: 2,
      kondisi: "Baik",
      sumber: "Beli Kas Masjid",
    },
  ]);

  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "1",
    kondisi: "Baik",
    sumber: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveInventaris = (e: React.FormEvent) => {
    e.preventDefault();
    setItemList([
      ...itemList,
      {
        id: itemList.length + 1,
        kode: `INV-00${itemList.length + 1}`,
        nama: formData.nama,
        jumlah: parseInt(formData.jumlah, 10) || 1,
        kondisi: formData.kondisi,
        sumber: formData.sumber,
      },
    ]);
    closeModal();
    setFormData({
      nama: "",
      jumlah: "1",
      kondisi: "Baik",
      sumber: "",
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Inventaris & Aset Masjid</h2>
            <p className="text-xs text-emerald-200/70 mt-1 font-medium">
              Pencatatan barang berharga, perlengkapan sound system, dan fasilitas wakaf umat.
            </p>
          </div>
          <Button variant="secondary" onClick={openModal}>
            <PackagePlus size={16} />
            Tambah Aset Baru
          </Button>
        </div>

        {/* Tabel Inventaris */}
        <div className="liquid-bento-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package size={18} className="text-yellow-400" />
              <h3 className="text-base font-bold text-white">Daftar Aset & Perlengkapan</h3>
            </div>
            <span className="text-xs text-emerald-200/70">{itemList.length} Barang Terdaftar</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="py-4 px-6 font-bold">Kode Barang</th>
                  <th className="py-4 px-6 font-bold">Nama Barang</th>
                  <th className="py-4 px-6 font-bold text-center">Jumlah</th>
                  <th className="py-4 px-6 font-bold">Kondisi</th>
                  <th className="py-4 px-6 font-bold">Sumber Pengadaan</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {itemList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs text-yellow-400 font-bold">{item.kode}</td>
                    <td className="py-4 px-6 font-bold text-white">{item.nama}</td>
                    <td className="py-4 px-6 text-center font-mono font-bold text-emerald-100">{item.jumlah} Unit</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        item.kondisi === "Baik"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}>
                        {item.kondisi}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-emerald-100/70">{item.sumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Inventaris */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="liquid-bento-card bg-emerald-950/90 border border-white/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-5 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="font-bold text-lg text-yellow-300 flex items-center gap-2">
                <PackagePlus size={18} />
                Input Aset Baru
              </h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={handleSaveInventaris}>
              <Input
                label="Nama Barang / Fasilitas"
                placeholder="Cth: Sound Speaker Yamaha DXR15"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  label="Jumlah (Unit)"
                  min="1"
                  value={formData.jumlah}
                  onChange={(e) => setFormData({ ...formData, jumlah: e.target.value })}
                  required
                />
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Kondisi</label>
                  <select
                    className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.kondisi}
                    onChange={(e) => setFormData({ ...formData, kondisi: e.target.value })}
                  >
                    <option value="Baik" className="bg-emerald-950">Baik & Normal</option>
                    <option value="Rusak Ringan" className="bg-emerald-950">Rusak Ringan</option>
                    <option value="Rusak Berat" className="bg-emerald-950">Rusak Berat</option>
                  </select>
                </div>
              </div>

              <Input
                label="Sumber Pengadaan"
                placeholder="Cth: Beli Kas / Wakaf Hamba Allah"
                value={formData.sumber}
                onChange={(e) => setFormData({ ...formData, sumber: e.target.value })}
                required
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <Button variant="outline" type="button" onClick={closeModal}>
                  Batal
                </Button>
                <Button variant="secondary" type="submit">
                  Simpan Aset
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
