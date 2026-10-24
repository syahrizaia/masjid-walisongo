"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mesh-ambient-bg mashrabiya-watermark">
      <div className="max-w-md w-full text-center space-y-6 liquid-bento-card p-8 sm:p-10 border border-white/20 shadow-2xl">
        <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-3xl flex items-center justify-center mx-auto border border-red-500/30">
          <AlertCircle size={32} />
        </div>
        
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Terjadi Gangguan Sistem</h2>
          <p className="text-sm text-emerald-100/75 leading-relaxed font-normal">
            Aplikasi mengalami kendala teknis yang tidak terduga. Silakan coba muat ulang halaman.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button onClick={() => reset()} variant="secondary" className="w-full sm:w-auto">
            <RotateCcw size={16} />
            Coba Muat Ulang
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              <Home size={16} />
              Ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
