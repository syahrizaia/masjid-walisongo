import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MosqueIcon } from "@/components/ui/MosqueIcon";
import { Compass, ArrowLeft, LayoutDashboard } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 mesh-ambient-bg mashrabiya-watermark">
      <div className="max-w-md w-full liquid-bento-card overflow-hidden text-center p-8 sm:p-10 border border-white/20 shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-yellow-500/25 border-2 border-yellow-200/50">
          <MosqueIcon size={40} variant="solid" className="text-emerald-950" />
        </div>

        <h1 className="text-7xl font-black text-white tracking-widest mb-2 font-mono drop-shadow-md">
          404
        </h1>
        
        <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-4">
          Halaman Tidak Ditemukan
        </p>
        
        <p className="text-sm text-emerald-100/80 mb-8 leading-relaxed font-normal">
          Afwan (mohon maaf), halaman yang Anda tuju mungkin telah dipindahkan, mengalami pembaruan, atau tautan tidak valid.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              <ArrowLeft size={16} />
              Ke Beranda Utama
            </Button>
          </Link>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              <LayoutDashboard size={16} />
              Ke Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
