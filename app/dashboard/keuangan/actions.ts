"use server";

import { revalidatePath } from "next/cache";

// Mock Database
let keuanganData = [
  { id: 1, tanggal: "2026-09-01", jenis: "Pemasukan", kategori: "Infaq Jumat", nominal: 2500000, keterangan: "Kotak amal minggu ke-1" },
  { id: 2, tanggal: "2026-09-02", jenis: "Pengeluaran", kategori: "Operasional", nominal: 500000, keterangan: "Bayar listrik masjid" },
];

export async function getKeuanganData() {
  // Simulasi query DB
  return keuanganData;
}

export async function addTransaksi(formData: FormData) {
  const tanggal = formData.get("tanggal") as string;
  const jenis = formData.get("jenis") as string;
  const kategori = formData.get("kategori") as string;
  const nominal = parseInt(formData.get("nominal") as string, 10);
  const keterangan = formData.get("keterangan") as string;

  const newId = keuanganData.length > 0 ? Math.max(...keuanganData.map(d => d.id)) + 1 : 1;
  
  keuanganData.push({
    id: newId,
    tanggal,
    jenis,
    kategori,
    nominal,
    keterangan
  });

  // Revalidasi path agar halaman merefleksikan data terbaru
  revalidatePath("/dashboard/keuangan");
  return { success: true };
}
