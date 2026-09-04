"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-emerald-900 text-xl font-bold">MWS</span>
              </div>
              <span className="font-bold text-xl text-white uppercase tracking-wider">
                Wali Songo
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              Pusat Ibadah dan Pemberdayaan Umat Islam Pamekasan. Membangun peradaban mulia berlandaskan manhaj Ahlussunnah wal Jama'ah.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigasi</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#beranda" className="hover:text-yellow-400 transition-colors">Beranda</Link></li>
              <li><Link href="#profil" className="hover:text-yellow-400 transition-colors">Profil Masjid</Link></li>
              <li><Link href="#kegiatan" className="hover:text-yellow-400 transition-colors">Jadwal Kajian</Link></li>
              <li><Link href="#galeri" className="hover:text-yellow-400 transition-colors">Galeri Dokumentasi</Link></li>
              <li><Link href="/login" className="hover:text-yellow-400 transition-colors">Portal Pengurus</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Jl. Masjid Raya No. 1, Sakaddu Barat, Desa Bungbaruh, Kec. Kadur, Kab. Pamekasan, Jawa Timur 62934</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span>+62 812 3456 7890 (Call Center)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <span>takmir@masjidwalisongo.id</span>
              </li>
            </ul>
          </div>

          {/* Donasi / CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Donasi Pembangunan</h4>
            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <p className="text-xs text-gray-500 mb-1 uppercase font-bold tracking-wider">Rekening Resmi BSI</p>
              <p className="text-2xl font-mono text-emerald-400 mb-1">7123456789</p>
              <p className="text-sm font-medium mb-4">a.n Masjid Wali Songo</p>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
                Salin Rekening
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} Takmir Masjid Wali Songo. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
