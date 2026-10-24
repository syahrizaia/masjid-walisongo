"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="liquid-bento-card p-10 max-w-md w-full border border-white/20 shadow-2xl flex flex-col items-center">
        <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-3xl flex items-center justify-center mb-6 border border-red-500/30">
          <AlertCircle size={32} />
        </div>
        <h2 className="text-2xl font-black text-white mb-2">Terjadi Gangguan Modul</h2>
        <p className="text-xs text-emerald-100/70 mb-8 leading-relaxed font-normal">
          Maaf, sistem mengalami kendala saat memuat data modul dashboard ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
            Muat Ulang
          </Button>
          <Button onClick={() => reset()} variant="secondary" className="w-full">
            <RotateCcw size={16} />
            Coba Lagi
          </Button>
        </div>
      </div>
    </div>
  );
}
