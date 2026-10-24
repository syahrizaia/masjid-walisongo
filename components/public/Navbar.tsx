"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HeartHandshake, Calendar, Compass, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MosqueIcon } from "@/components/ui/MosqueIcon";

export function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda", icon: Compass },
    { name: "Profil", href: "#profil", icon: MosqueIcon },
    { name: "Kajian", href: "#kegiatan", icon: Calendar },
    { name: "Transparansi", href: "#transparansi", icon: ShieldCheck },
    { name: "Galeri", href: "#galeri", icon: ImageIcon },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-5 px-4 sm:px-6">
        <div
          className={`max-w-7xl mx-auto rounded-3xl transition-all duration-500 flex items-center justify-between px-5 py-3 sm:px-7 ${
            isScrolled
              ? "liquid-capsule-nav"
              : "bg-emerald-950/40 backdrop-blur-xl border border-white/10 shadow-lg"
          }`}
        >
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-emerald-950 shadow-md shadow-yellow-500/30 group-hover:scale-105 transition-transform duration-300 border border-yellow-200/50">
              <MosqueIcon size={24} variant="solid" className="text-emerald-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-white tracking-wider uppercase group-hover:text-yellow-400 transition-colors">
                Masjid Wali Songo
              </span>
              <span className="text-[10px] tracking-widest text-emerald-300/80 font-medium uppercase">
                Sakaddu Barat, Pamekasan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-emerald-100 hover:text-white hover:bg-white/10 transition-all duration-200 tracking-wide"
                >
                  <Icon size={14} className="text-yellow-400" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#donasi"
              className="liquid-sheen relative flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-emerald-950 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/25 border border-yellow-200/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <HeartHandshake size={16} />
              Infaq & Zakat
            </Link>
            <Link
              href="/login"
              className="text-xs font-semibold text-emerald-200 hover:text-white px-3.5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-lg transition-all"
            >
              Portal
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-2xl bg-white/10 border border-white/15 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay with Apple Liquid Glass */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-emerald-950/80 pt-28 pb-8 px-6 flex flex-col justify-between lg:hidden"
          >
            <div className="space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-lg font-semibold text-emerald-100 hover:text-yellow-400 hover:bg-white/10 transition-all"
                  >
                    <Icon size={20} className="text-yellow-400" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <Link
                href="#donasi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-emerald-950 px-6 py-4 rounded-2xl font-bold text-base shadow-xl"
              >
                <HeartHandshake size={20} />
                Salurkan Infaq & Donasi
              </Link>
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-2xl font-semibold text-sm border border-white/15"
              >
                Portal Pengurus Masjid
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
