# Sistem Informasi Manajemen & Portal Web Masjid Wali Songo

Pusat Ibadah, Pendidikan, dan Pemberdayaan Umat di Sakaddu Barat, Desa Bungbaruh, Kec. Kadur, Kab. Pamekasan, Jawa Timur.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-0070F3?style=flat-square)](https://turbo.build/pack)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

* Website Resmi: [masjid-walisongo.vercel.app](https://masjid-walisongo.vercel.app)
* Repositori GitHub: [github.com/syahrizaia/masjid-walisongo](https://github.com/syahrizaia/masjid-walisongo)

---

## 1. Ikhtisar Proyek

**Masjid Wali Songo** adalah sistem informasi manajemen terpadu dan portal web publik untuk Masjid Wali Songo yang berlokasi di Dusun Sakaddu Barat, Desa Bungbaruh, Kecamatan Kadur, Kabupaten Pamekasan, Madura.

Aplikasi ini dirancang khusus untuk memenuhi kebutuhan digitalisasi rumah ibadah modern dengan standar estetika internasional:
1. **Web Portal Publik Imersif**: Media silaturahmi, informasi jadwal kajian, transparansi kas umat, dan penyaluran infaq/sedekah.
2. **Mode TV Digital Signage Masjid (`/tv`)**: Tampilan layar pintar (*smart display*) untuk ruang utama salat yang menampilkan jam real-time, waktu salat otomatis Kemenag, hitung mundur iqamah, dan pengumuman berjalan.
3. **Sistem Informasi Manajemen Pengurus (`/dashboard`)**: Panel administrasi lengkap untuk takmir, mencakup pembukuan kas, buku donasi ZISWAF ber-kwitansi, sensus jamaah, inventaris aset, jadwal petugas salat, kearsipan surat, hingga audit log keamanan.

---

## 2. Filosofi & Arsitektur Desain

Sistem antarmuka (UI/UX) mengadopsi standar rancang bangun visual kelas dunia:

### A. Sistem Desain Liquid Glass (Standar Apple)
- **Optical Translucency & Dynamic Blur**: Lapisan antarmuka menggunakan efek kaca optik dengan filter `backdrop-filter: blur(32px) saturate(190%)` hingga `blur(36px) saturate(220%)`.
- **Specular Rim Highlights & Refraction**: Efek bias cahaya tepi kaca dan ketebalan material 3D menggunakan multi-layered inset box shadow yang lembut.
- **Liquid Sheen Micro-Interactions**: Kilau cahaya diagonal lembut berbasis fisika kurva `cubic-bezier(0.16, 1, 0.3, 1)` saat kartu atau tombol disentuh.

### B. Nuansa Islami Nusantara (Sacred Ambient Palette)
- **Ambient Mesh Gradient**: Gradasi latar belakang adaptif yang menenangkan hati, memadukan *Deep Emerald* (`#021a13`), *Sacred Forest* (`#044733`), *Warm Champagne Gold* (`#eab308`), dan *Midnight Slate* (`#061814`).
- **Watermark Geometris Mashrabiya**: Pola bintang oktagonal islami halus (*3% opacity*) tertanam lembut di balik panel kaca untuk menegaskan identitas spiritual.

### C. 3D Model High-Poly Realistis (WebGL / Three.js & R3F)
- **Diorama Arsitektur Masjid Walisongo**: Struktur kubah agung bertekstur urat marmer zamrud (*procedural canvas texture*), atap tajug bersusun 3 tingkat khas Nusantara, dan mustaka bulan sabit & bintang emas murni (*polished gold brass*).
- **Lentera Gantung Klasik (Fanous)**: Tabung kaca amber berbias cahaya fisik (`transmission: 0.88, ior: 1.52`) yang memancarkan pendaran cahaya hangat bernapas (*warm breathing glow*).
- **Kolonade Pilar Marmer & Partikel Cahaya (Noor)**: Pelataran heksagonal bertingkat dengan partikel cahaya spiritual mengambang secara anggun dalam animasi putaran orbital 60 FPS tanpa jeda.

### D. Zero Emoji Policy
Codebase menerapkan kebijakan nol karakter emoji Unicode di seluruh halaman. Seluruh visual menggunakan ikon vektor SVG presisi dari `lucide-react` dan komponen siluet kubah kustom `MosqueIcon`.

---

## 3. Fitur Unggulan

### Portal Web Publik
| Halaman / Seksi | Fitur & Deskripsi |
| :--- | :--- |
| **Hero Section** | Tipografi modern islami, tombol call-to-action (CTA) donasi, dan kanvas 3D interaktif yang dapat diputar bebas. |
| **Bento Grid Info Salat** | Jam presisi WIB, kalender Masehi, dan waktu salat otomatis Pamekasan via Aladhan API dengan kartu glow pada waktu salat terdekat. |
| **Profil & Visi Masjid** | Paparan visi Ahlussunnah wal Jama'ah, misi dakwah, dan 8 fasilitas unggulan masjid (ramah lansia, ambulans 24 jam, AC, perpustakaan). |
| **Agenda & Majelis Ilmu** | Daftar kajian tafsir, bimbingan tahsin, dan tabligh akbar lengkap dengan nama narasumber, waktu, dan tab filter kategori. |
| **Transparansi Kas Umat** | Laporan terbuka saldo kas berjalan, pemasukan bulan ini, dan pengeluaran operasional masjid. |
| **Galeri Rekam Jejak** | Dokumentasi foto kegiatan ibadah, pengajian, dan sosial dengan lightbox preview resolusi tinggi. |
| **Kotak Donasi BSI** | Rincian rekening resmi Bank Syariah Indonesia (BSI) 7123456789 a.n. Masjid Wali Songo dengan fitur satu-klik salin nomor rekening. |

---

### Mode TV Digital Signage Masjid (`/tv`)
Dirancang khusus untuk layar Smart TV di dinding ruang utama masjid:
- **Tampilan Khidmat & Bersih**: Bebas scrollbar, teks berukuran besar, dan kontras tinggi yang mudah dibaca dari saf belakang.
- **Waktu Real-time & Hijriyah**: Jam digital berukuran besar dan tanggal Hijriyah otomatis.
- **Hitung Mundur Salat Otomatis**: Countdown dinamis menuju waktu salat berikutnya dengan deteksi otomatis fase iqamah (< 10 menit).
- **Grid 6 Waktu Salat**: Imsak, Subuh, Dzuhur, Ashar, Maghrib, dan Isya dengan penanda waktu aktif.
- **Teks Berjalan (Marquee)**: Himbauan merapatkan saf, mematikan nada dering ponsel, dan informasi rekening ZISWAF.
- **Tombol Layar Penuh**: Pintasan fullscreen toggle untuk kemudahan operator.

---

### Panel Manajemen Pengurus / SIM (`/dashboard`)
Panel kerja takmir untuk mengelola administrasi secara terstruktur:
- **Dashboard Ringkasan (`/dashboard`)**: Metrik saldo kas, pemasukan, jumlah jamaah terdaftar, agenda aktif, dan pintasan operasional cepat.
- **Buku Kas & Keuangan (`/dashboard/keuangan`)**: Pencatatan mutasi kas masuk/keluar, kalkulasi otomatis saldo, dan formulir transaksi berbasis Next.js Server Actions.
- **Manajemen Donasi & Kwitansi (`/dashboard/donasi`)**: Pencatatan infaq/sedekah/wakaf tunai maupun barang, serta generator cetak Kwitansi Tanda Terima resmi format cetak kertas.
- **Agenda Kegiatan (`/dashboard/kegiatan`)**: Penjadwalan pengajian, rapat takmir, dan PHBI lengkap dengan status kegiatan.
- **Database Jamaah (`/dashboard/jamaah`)**: Sensus data warga jamaah tetap Sakaddu Barat, nomor kontak, dan status keaktifan.
- **Inventaris Aset (`/dashboard/inventaris`)**: Inventarisasi perlengkapan sound system, karpet, genset, dan kondisi fisik barang.
- **Jadwal Petugas Salat (`/dashboard/jadwal`)**: Roster penugasan Imam Rawatib, Khatib Khutbah Jumat, dan Muadzin.
- **Arsip Surat Menyurat (`/dashboard/surat`)**: Pencatatan nomor berkas dan perihal surat masuk dan surat keluar resmi.
- **Laporan & Ekspor (`/dashboard/laporan`)**: Filter konsolidasi kas berdasarkan rentang tanggal dan simulasi ekspor format Excel/PDF.
- **Sistem Audit Log (`/dashboard/auditlog`)**: Jejak rekaman keamanan aktivitas pengguna sistem (INSERT, UPDATE, DELETE, LOGIN).

---

## 4. Struktur Direktori Proyek

```text
masjid-walisongo/
├── app/
│   ├── (public)/                 # Route group publik
│   ├── dashboard/                # Panel Pengurus Masjid (SIM)
│   │   ├── auditlog/             # Audit log aktivitas
│   │   ├── donasi/               # Manajemen ZISWAF & cetak kwitansi
│   │   ├── inventaris/           # Pencatatan aset masjid
│   │   ├── jadwal/               # Roster Imam, Khatib, Muadzin
│   │   ├── jamaah/               # Database warga jamaah
│   │   ├── kegiatan/             # Pengelolaan jadwal kajian
│   │   ├── keuangan/             # Buku kas & Server Actions
│   │   ├── laporan/              # Rekapitulasi & ekspor laporan
│   │   ├── surat/                # Arsip surat masuk & keluar
│   │   ├── error.tsx             # Error boundary dashboard
│   │   ├── layout.tsx            # Shell dashboard dengan sidebar
│   │   ├── loading.tsx           # Skeleton loading dashboard
│   │   └── page.tsx              # Overview ringkasan eksekutif
│   ├── login/                    # Halaman autentikasi portal pengurus
│   ├── tv/                       # Layar Digital Signage Mode TV
│   ├── error.tsx                 # Global error boundary
│   ├── globals.css               # Token desain Liquid Glass & utilities
│   ├── layout.tsx                # Root layout, metadata & mesh gradient
│   ├── loading.tsx               # Global loading screen
│   ├── not-found.tsx             # Halaman 404 Liquid Glass
│   ├── page.tsx                  # Halaman Beranda Utama
│   ├── robots.ts                 # Konfigurasi SEO robots
│   └── sitemap.ts                # Generator sitemap otomatis
├── components/
│   ├── 3d/
│   │   ├── MasjidWalisongoModel.tsx   # Geometri high-poly kubah & lentera
│   │   └── MasjidWalisongoScene.tsx   # Canvas R3F, lighting & shadows
│   ├── layout/
│   │   ├── Navbar.tsx            # Header dashboard
│   │   └── Sidebar.tsx           # Sidebar navigasi dashboard
│   ├── public/
│   │   ├── BentoGridInfo.tsx     # Widget waktu salat & maklumat
│   │   ├── FooterSection.tsx     # Footer, rekening BSI & kontak
│   │   ├── GaleriSection.tsx     # Galeri foto dengan lightbox
│   │   ├── HeroSection.tsx       # Hero section & integrasi kanvas 3D
│   │   ├── KegiatanSection.tsx   # Jadwal kajian & filter
│   │   ├── Navbar.tsx            # Capsule floating navbar
│   │   ├── ProfilSection.tsx     # Visi, misi & fasilitas unggulan
│   │   └── TransparansiSection.tsx # Ringkasan kas umat transparan
│   └── ui/
│       ├── Button.tsx            # Tombol varian Liquid Glass & sheen
│       ├── Card.tsx              # Bento glass card & header
│       ├── Input.tsx             # Input form transparan & focus glow
│       ├── Modal.tsx             # Accessible frosted modal dialog
│       └── MosqueIcon.tsx        # Vektor SVG emblem Masjid Walisongo
├── public/                       # Aset statis gambar & vektor
├── Code.gs                       # Skrip integrasi Google Apps Script
├── schema_database.txt           # Dokumentasi skema tabel database
├── next.config.ts                # Konfigurasi Next.js
├── package.json                  # Dependensi proyek
├── tsconfig.json                 # Konfigurasi TypeScript
└── README.md                     # Dokumentasi komprehensif proyek
```

---

## 5. Panduan Instalasi & Menjalankan Proyek

### Prasyarat Sistem
- **Node.js**: Versi `18.18.0` atau yang lebih baru (disarankan Node.js 20 LTS).
- **Package Manager**: `npm` (disertakan bersama Node.js), `pnpm`, atau `yarn`.

### Langkah-Langkah

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/syahrizaia/masjid-walisongo.git
   cd masjid-walisongo
   ```

2. **Instal Seluruh Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan (Dev Server)**:
   ```bash
   npm run dev
   ```

4. **Akses Aplikasi**:
   Buka peramban web dan arahkan ke alamat:
   - Halaman Utama: [http://localhost:3000](http://localhost:3000)
   - Mode TV Signage: [http://localhost:3000/tv](http://localhost:3000/tv)
   - Portal Login Pengurus: [http://localhost:3000/login](http://localhost:3000/login)
   - Dashboard Admin: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

5. **Kompilasi Build Produksi**:
   Untuk memverifikasi kesiapan rilis produksi:
   ```bash
   npm run build
   npm run start
   ```

---

## 6. Kredensial Uji Coba Pengurus (Demo)

Untuk menguji fitur-fitur internal pada portal pengurus, gunakan akun demonstrasi berikut:

* **URL Login**: `/login`
* **Username**: `admin`
* **Kata Sandi**: `admin123`

---

## 7. Integrasi API & Basis Data

1. **Jadwal Waktu Salat**: Mengintegrasikan API Kementerian Agama / Aladhan (`https://api.aladhan.com/v1/timingsByCity?city=Pamekasan&country=Indonesia&method=11`) yang menghitung waktu astronomis salat lima waktu dan terbit matahari khusus wilayah Pamekasan, Jawa Timur.
2. **Server Actions (Next.js)**: Mutasi buku kas di `/dashboard/keuangan` berjalan menggunakan React Server Actions (`"use server"`) dengan revalidasi path instan (`revalidatePath`).
3. **Database Eksternal (Opsional)**: Proyek menyertakan [Code.gs](file:///Users/syahrizaalsistani/Documents/Projects/masjid-walisongo/Code.gs) dan [schema_database.txt](file:///Users/syahrizaalsistani/Documents/Projects/masjid-walisongo/schema_database.txt) untuk opsi sinkronisasi dua arah ke Google Sheets sebagai basis data *no-cost* bagi pengurus masjid di daerah.

---

## 8. Kontak & Informasi Takmir

* **Nama Masjid**: Masjid Wali Songo Sakaddu Barat
* **Alamat Lengkap**: Sakaddu Barat, Desa Bungbaruh, Kecamatan Kadur, Kabupaten Pamekasan, Jawa Timur 69355, Indonesia.
* **Surel (Email)**: `takmir@masjidwalisongo.id`
* **Layanan Jamaah / Call Center**: `+62 812 3456 7890`
* **Rekening ZISWAF Resmi**: Bank Syariah Indonesia (BSI) `7123456789` a.n. **Masjid Wali Songo**

---

Dikelola dengan penuh khidmah oleh **Tim IT & Pengurus Takmir Masjid Wali Songo Pamekasan**. Hak Cipta Dilindungi Undang-Undang.
