"use client";

import { useState } from "react";
import { HandCoins, Printer, X, Plus, HeartHandshake, FileCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MosqueIcon } from "@/components/ui/MosqueIcon";

interface DonasiItem {
  id: number;
  tanggal: string;
  donatur: string;
  kategori: string;
  tipe: string;
  nilai: string;
  ket: string;
}

export default function DonasiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isKwitansiOpen, setIsKwitansiOpen] = useState(false);
  const [donasiTipe, setDonasiTipe] = useState("Uang");
  
  // Current active receipt data
  const [activeReceipt, setActiveReceipt] = useState<DonasiItem>({
    id: 1,
    tanggal: "2026-09-04",
    donatur: "H. Abdullah",
    kategori: "Infaq Pembangunan",
    tipe: "Uang",
    nilai: "Rp 1.000.000",
    ket: "Pembangunan menara & renovasi kubah",
  });

  const [donasiList, setDonasiList] = useState<DonasiItem[]>([
    {
      id: 1,
      tanggal: "2026-09-04",
      donatur: "H. Abdullah",
      kategori: "Infaq Pembangunan",
      tipe: "Uang",
      nilai: "Rp 1.000.000",
      ket: "Pembangunan menara & renovasi kubah",
    },
    {
      id: 2,
      tanggal: "2026-09-03",
      donatur: "Hamba Allah",
      kategori: "Sedekah Subuh",
      tipe: "Uang",
      nilai: "Rp 250.000",
      ket: "Operasional dhuafa",
    },
    {
      id: 3,
      tanggal: "2026-09-02",
      donatur: "Ibu Hj. Maryam",
      kategori: "Wakaf Aset",
      tipe: "Barang",
      nilai: "10 Rol Karpet Masjid",
      ket: "Untuk aula serbaguna",
    },
  ]);

  const [formData, setFormData] = useState({
    tanggal: new Date().toISOString().split("T")[0],
    nama: "",
    kategori: "Infaq",
    tipe: "Uang",
    nilai: "",
    ket: "",
  });

  const openModalDonasi = () => setIsModalOpen(true);
  const closeModalDonasi = () => setIsModalOpen(false);

  const handleSaveDonasi = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: DonasiItem = {
      id: donasiList.length + 1,
      tanggal: formData.tanggal,
      donatur: formData.nama,
      kategori: formData.kategori,
      tipe: formData.tipe,
      nilai: formData.tipe === "Uang" ? `Rp ${formData.nilai}` : formData.nilai,
      ket: formData.ket || "-",
    };

    setDonasiList([newItem, ...donasiList]);
    setActiveReceipt(newItem);
    setIsModalOpen(false);
    setIsKwitansiOpen(true);
  };

  const cetakKwitansi = () => {
    window.print();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
            body * { visibility: hidden; }
            #print-area, #print-area * { visibility: visible; }
            #print-area {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                color: #000 !important;
                background: #fff !important;
                box-shadow: none !important;
            }
            .no-print { display: none !important; }
        }
      `}} />

      <div className="w-full">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Manajemen Donasi & ZISWAF</h2>
            <p className="text-xs text-emerald-200/70 mt-1 font-medium">
              Penerimaan resmi Zakat, Infaq, Sadaqah, dan Wakaf beserta penerbitan kwitansi sah.
            </p>
          </div>
          <Button variant="secondary" onClick={openModalDonasi}>
            <Plus size={16} />
            Terima Donasi Baru
          </Button>
        </div>

        {/* Tabel Donasi */}
        <div className="liquid-bento-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HandCoins size={18} className="text-yellow-400" />
              <h3 className="text-base font-bold text-white">Daftar Penerimaan ZISWAF</h3>
            </div>
            <span className="text-xs text-emerald-200/70">{donasiList.length} Penerimaan Tercatat</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="py-4 px-6 font-bold">Tanggal</th>
                  <th className="py-4 px-6 font-bold">Nama Donatur</th>
                  <th className="py-4 px-6 font-bold">Kategori</th>
                  <th className="py-4 px-6 font-bold">Bentuk / Nilai</th>
                  <th className="py-4 px-6 font-bold text-center">Kwitansi</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {donasiList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs text-emerald-100">{item.tanggal}</td>
                    <td className="py-4 px-6 font-bold text-white">{item.donatur}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                        {item.kategori}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-emerald-300">{item.nilai}</td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => {
                          setActiveReceipt(item);
                          setIsKwitansiOpen(true);
                        }}
                        className="p-2 rounded-xl bg-white/10 hover:bg-yellow-400 hover:text-emerald-950 text-white transition-all text-xs font-semibold inline-flex items-center gap-1.5"
                      >
                        <Printer size={14} />
                        Cetak
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Donasi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="liquid-bento-card bg-emerald-950/90 border border-white/20 w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 p-5 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="font-bold text-lg text-yellow-300 flex items-center gap-2">
                <HeartHandshake size={18} />
                Input Penerimaan Donasi
              </h3>
              <button onClick={closeModalDonasi} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={handleSaveDonasi}>
              <Input
                type="date"
                label="Tanggal Donasi"
                value={formData.tanggal}
                onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                required
              />
              <Input
                type="text"
                label="Nama Donatur"
                placeholder="Hamba Allah / Nama Terang Dermawan"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Kategori ZISWAF</label>
                  <select
                    className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  >
                    <option value="Infaq" className="bg-emerald-950">Infaq</option>
                    <option value="Sadaqah" className="bg-emerald-950">Sadaqah</option>
                    <option value="Zakat" className="bg-emerald-950">Zakat</option>
                    <option value="Wakaf" className="bg-emerald-950">Wakaf</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Bentuk Donasi</label>
                  <select
                    className="flex h-12 w-full rounded-2xl bg-black/40 border border-white/15 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.tipe}
                    onChange={(e) => {
                      setFormData({ ...formData, tipe: e.target.value });
                      setDonasiTipe(e.target.value);
                    }}
                  >
                    <option value="Uang" className="bg-emerald-950">Uang Tunai / Transfer</option>
                    <option value="Barang" className="bg-emerald-950">Barang / Aset Fisik</option>
                  </select>
                </div>
              </div>

              <Input
                type="text"
                label={donasiTipe === "Uang" ? "Nominal (Rp)" : "Rincian Barang / Aset"}
                placeholder={donasiTipe === "Uang" ? "Contoh: 500000" : "Contoh: 10 Sak Semen Gresik"}
                value={formData.nilai}
                onChange={(e) => setFormData({ ...formData, nilai: e.target.value })}
                required
              />

              <Input
                type="text"
                label="Peruntukan / Keterangan"
                placeholder="Cth: Infaq anak yatim / pembangunan kubah"
                value={formData.ket}
                onChange={(e) => setFormData({ ...formData, ket: e.target.value })}
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <Button variant="outline" type="button" onClick={closeModalDonasi}>
                  Batal
                </Button>
                <Button variant="secondary" type="submit">
                  Simpan & Terbitkan Kwitansi
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Cetak Kwitansi Resmi */}
      {isKwitansiOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-2xl relative text-gray-900 border-4 border-emerald-900/10" id="print-area">
            {/* Kwitansi Header */}
            <div className="border-b-2 border-emerald-800 pb-5 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-900 rounded-2xl flex items-center justify-center text-yellow-400">
                  <MosqueIcon size={26} variant="solid" className="text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-emerald-900 tracking-wide uppercase">
                    KWITANSI TANDA TERIMA ZISWAF
                  </h2>
                  <p className="text-xs font-semibold text-gray-600">
                    Masjid Wali Songo - Sakaddu Barat, Kadur, Pamekasan
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-gray-400">NO: DON-00{activeReceipt.id}</span>
              </div>
            </div>

            {/* Kwitansi Details */}
            <div className="space-y-4 text-sm text-gray-800">
              <div className="flex">
                <span className="w-36 font-semibold text-gray-600">Telah Terima Dari</span>
                <span className="mr-3 font-bold">:</span>
                <span className="font-bold text-lg text-emerald-950 uppercase">{activeReceipt.donatur}</span>
              </div>
              <div className="flex">
                <span className="w-36 font-semibold text-gray-600">Kategori ZISWAF</span>
                <span className="mr-3 font-bold">:</span>
                <span className="font-bold text-emerald-800">{activeReceipt.kategori}</span>
              </div>
              <div className="flex items-center">
                <span className="w-36 font-semibold text-gray-600">Jumlah / Wujud</span>
                <span className="mr-3 font-bold">:</span>
                <span className="font-black text-xl text-emerald-900 bg-emerald-50 px-4 py-1 rounded-xl border border-emerald-200">
                  {activeReceipt.nilai}
                </span>
              </div>
              <div className="flex">
                <span className="w-36 font-semibold text-gray-600">Peruntukan / Ket</span>
                <span className="mr-3 font-bold">:</span>
                <span className="italic text-gray-700">{activeReceipt.ket || "-"}</span>
              </div>
            </div>

            {/* Signature Area */}
            <div className="mt-12 grid grid-cols-2 text-center text-xs text-gray-700 font-medium">
              <div>
                <p>Tanda Tangan Dermawan</p>
                <div className="h-16" />
                <p className="font-bold text-gray-900 underline">( {activeReceipt.donatur} )</p>
              </div>
              <div>
                <p>Pamekasan, {activeReceipt.tanggal}</p>
                <div className="h-16" />
                <p className="font-bold text-emerald-900 underline">( Takmir Masjid Wali Songo )</p>
              </div>
            </div>

            {/* Footer Islamic Doa */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-center text-[11px] text-gray-500 italic">
              "Jazakumullahu khairan katsiran. Semoga Allah membalas dengan pahala berlipat ganda dan membersihkan harta Anda."
            </div>

            {/* Action Bar (Screen Only) */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3 no-print">
              <button
                onClick={cetakKwitansi}
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow"
              >
                <Printer size={16} />
                Cetak Dokumen
              </button>
              <button
                onClick={() => setIsKwitansiOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
