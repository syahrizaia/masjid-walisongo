"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { addTransaksi } from "./actions";
import { Plus } from "lucide-react";

export default function ClientForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      await addTransaksi(formData);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan transaksi");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        <Plus size={16} />
        Input Transaksi Baru
      </Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Input Transaksi Kas">
        <form action={handleSubmit} className="space-y-4">
          <Input type="date" name="tanggal" label="Tanggal Transaksi" required />
          
          <div className="w-full flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-emerald-100/90 tracking-wide">Jenis Mutasi</label>
            <select
              name="jenis"
              className="flex h-12 w-full rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            >
              <option value="Pemasukan" className="bg-emerald-950 text-white">Pemasukan (+)</option>
              <option value="Pengeluaran" className="bg-emerald-950 text-white">Pengeluaran (-)</option>
            </select>
          </div>
          
          <Input type="text" name="kategori" label="Kategori" placeholder="Contoh: Infaq Jumat / Listrik / Perawatan" required />
          <Input type="number" name="nominal" label="Nominal (Rp)" placeholder="Masukkan nominal angka" required />
          <Input type="text" name="keterangan" label="Keterangan Tambahan" placeholder="Catatan detail mutasi" required />
          
          <div className="pt-4 flex justify-end gap-3 border-t border-white/10 mt-6">
            <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>
              Batal
            </Button>
            <Button variant="secondary" type="submit" isLoading={isLoading}>
              Simpan Data Transaksi
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
