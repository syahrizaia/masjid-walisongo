"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "Beranda", href: "#beranda" },
    { name: "Profil", href: "#profil" },
    { name: "Kajian", href: "#kegiatan" },
    { name: "Galeri", href: "#galeri" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-emerald-950/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-emerald-950 text-xl">🕌</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-white uppercase tracking-wider group-hover:text-yellow-400 transition-colors">
              Wali Songo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-emerald-50 hover:text-yellow-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#donasi"
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-emerald-950 px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <HeartHandshake size={18} />
              Donasi
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-emerald-950/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-emerald-100 hover:text-yellow-400 border-b border-emerald-800/50 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#donasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-yellow-500 text-emerald-950 px-6 py-4 rounded-xl font-bold text-xl mt-4"
            >
              <HeartHandshake size={24} />
              Donasi Sekarang
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
