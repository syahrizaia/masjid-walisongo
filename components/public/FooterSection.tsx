"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Copy, Check, HeartHandshake, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { MosqueIcon } from "@/components/ui/MosqueIcon";

export function FooterSection() {
  const [copied, setCopied] = useState(false);
  const rekeningBSI = "7123456789";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekeningBSI);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="donasi" className="pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-emerald-950 shadow-lg shadow-yellow-500/30 border border-yellow-200/50">
                <MosqueIcon size={26} variant="solid" className="text-emerald-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white uppercase tracking-wider">
                  Masjid Wali Songo
                </span>
                <span className="text-xs text-emerald-300 font-medium">
                  Pusat Peradaban & Dakwah Pamekasan
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6 text-emerald-100/70 font-normal">
              Sakaddu Barat, Desa Bungbaruh, Kec. Kadur, Kab. Pamekasan, Jawa Timur. Melayani ibadah umat, menguatkan tali ukhuwah, dan menyalurkan ZISWAF secara transparan.
            </p>

            <div className="flex items-center gap-3 text-xs text-emerald-300 bg-white/5 p-3 rounded-2xl border border-white/10 w-fit">
              <ShieldCheck size={18} className="text-yellow-400" />
              <span>Baitul Maal Terakreditasi & Teraudit Syar'i</span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs text-yellow-400">
              Navigasi Halaman
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="#beranda" className="text-emerald-100/80 hover:text-yellow-300 transition-colors">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="#profil" className="text-emerald-100/80 hover:text-yellow-300 transition-colors">
                  Profil & Visi Masjid
                </Link>
              </li>
              <li>
                <Link href="#jadwal" className="text-emerald-100/80 hover:text-yellow-300 transition-colors">
                  Jadwal Waktu Salat
                </Link>
              </li>
              <li>
                <Link href="#kegiatan" className="text-emerald-100/80 hover:text-yellow-300 transition-colors">
                  Kajian & Tabligh Akbar
                </Link>
              </li>
              <li>
                <Link href="#transparansi" className="text-emerald-100/80 hover:text-yellow-300 transition-colors">
                  Laporan Kas Umat
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors">
                  Portal Pengurus (SIM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs text-yellow-400">
              Kontak & Alamat
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-emerald-100/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Sakaddu Barat, Desa Bungbaruh, Kec. Kadur, Kab. Pamekasan, Jawa Timur 69355</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span>+62 812 3456 7890 (Call Center / WA)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span>takmir@masjidwalisongo.id</span>
              </li>
            </ul>
          </div>

          {/* Official Bank Account Card (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs text-yellow-400">
              Infaq & ZISWAF Online
            </h4>
            <div className="liquid-bento-card p-6 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-emerald-300 font-bold uppercase tracking-wider">
                  Bank Syariah Indonesia (BSI)
                </span>
                <HeartHandshake size={16} className="text-yellow-400" />
              </div>
              <p className="text-2xl font-mono font-bold text-white tracking-wider my-2">
                {rekeningBSI}
              </p>
              <p className="text-xs text-emerald-100/70 mb-5">
                a.n. <strong className="text-white font-semibold">Masjid Wali Songo</strong>
              </p>
              
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-yellow-500/20 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Nomor Rekening Disalin
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Salin Nomor Rekening
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Rights Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-100/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Takmir Masjid Wali Songo Sakaddu Barat. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="#beranda" className="hover:text-white transition-colors">
              Pusat Bantuan
            </Link>
            <Link href="#beranda" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/tv" className="hover:text-yellow-400 transition-colors">
              Mode TV Masjid
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
