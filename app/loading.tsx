import { MosqueIcon } from "@/components/ui/MosqueIcon";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center mesh-ambient-bg mashrabiya-watermark p-4">
      <div className="flex flex-col items-center gap-5 liquid-bento-card p-10 border border-white/20 text-center shadow-2xl">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-ping" />
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-emerald-950 shadow-xl shadow-yellow-500/30 border border-yellow-200/50">
            <MosqueIcon size={32} variant="solid" className="text-emerald-950 animate-pulse" />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-white tracking-wide">Memuat Sistem Masjid Wali Songo...</p>
          <p className="text-xs text-emerald-200/60 mt-1">Menyiapkan antarmuka Liquid Glass</p>
        </div>
      </div>
    </div>
  );
}
