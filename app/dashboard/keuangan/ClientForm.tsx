"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { addTransaksi } from "./actions";

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
      <Button onClick={() => setIsOpen(true)}>+ Transaksi Baru</Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Input Transaksi">
        <form action={handleSubmit} className="space-y-4">
          <Input type="date" name="tanggal" label="Tanggal" required />
          
          <div className="w-full flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Jenis</label>
            <select name="jenis" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
              <option value="Pemasukan">Pemasukan</option>
              <option value="Pengeluaran">Pengeluaran</option>
            </select>
          </div>
          
          <Input type="text" name="kategori" label="Kategori" required />
          <Input type="number" name="nominal" label="Nominal (Rp)" required />
          <Input type="text" name="keterangan" label="Keterangan" required />
          
          <div className="pt-4 flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>Batal</Button>
            <Button type="submit" isLoading={isLoading}>Simpan Data</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
