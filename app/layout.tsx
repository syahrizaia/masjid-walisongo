import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masjid-walisongo.vercel.app"), // URL default jika di-deploy
  title: {
    default: "Masjid Wali Songo - Pamekasan",
    template: "%s | Masjid Wali Songo",
  },
  description: "Pusat Ibadah, Pendidikan, dan Pemberdayaan Umat di Sakaddu Barat, Desa Bungbaruh, Kadur, Pamekasan.",
  keywords: ["Masjid", "Wali Songo", "Pamekasan", "Kadur", "Bungbaruh", "ZISWAF", "Jadwal Salat"],
  authors: [{ name: "Takmir Masjid Wali Songo" }],
  creator: "Tim IT Masjid Wali Songo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://masjid-walisongo.vercel.app",
    title: "Masjid Wali Songo - Pamekasan",
    description: "Sistem Informasi Manajemen Masjid Wali Songo, Sakaddu Barat, Desa Bungbaruh, Pamekasan.",
    siteName: "Masjid Wali Songo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masjid Wali Songo - Pamekasan",
    description: "Sistem Informasi Manajemen Masjid Wali Songo, Sakaddu Barat, Pamekasan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans mesh-ambient-bg mashrabiya-watermark text-slate-100 selection:bg-yellow-400 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
