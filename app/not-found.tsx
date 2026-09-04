import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center">
        <div className="bg-emerald-900 py-12 px-8 flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-emerald-800">
            <span className="text-4xl">🕌</span>
          </div>
          <h1 className="text-6xl font-black text-white tracking-widest mb-2">404</h1>
          <p className="text-emerald-100 font-medium uppercase tracking-widest text-sm">
            Halaman Tidak Ditemukan
          </p>
        </div>
        
        <div className="p-8">
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari mungkin telah dipindahkan, diganti namanya, atau tidak pernah ada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full">
                Ke Beranda
              </Button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Ke Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
