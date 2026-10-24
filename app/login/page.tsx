"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { MosqueIcon } from "@/components/ui/MosqueIcon";
import { ShieldCheck, Lock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Mock Authentication
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        router.push("/dashboard");
      } else {
        setError("Kredensial salah! Pastikan username & password sesuai.");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden mesh-ambient-bg mashrabiya-watermark">
      {/* Back to Public Web Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-xs font-semibold text-emerald-200 hover:text-white px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition-all"
      >
        <ArrowLeft size={16} />
        Kembali ke Web Publik
      </Link>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none" />

      <Card className="w-full max-w-md shadow-2xl relative z-10 liquid-glass-dark border border-white/20">
        <CardHeader className="text-center pt-8 pb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-yellow-500/25 border-2 border-yellow-200/50">
            <MosqueIcon size={36} variant="solid" className="text-emerald-950" />
          </div>
          <CardTitle className="text-2xl font-black text-white tracking-wide">
            SIM Masjid Wali Songo
          </CardTitle>
          <CardDescription className="text-xs text-emerald-200/70 mt-1">
            Portal Sistem Informasi Manajemen & Administrasi Takmir
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8 pt-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Nama Pengguna (Username)"
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              label="Kata Sandi (Password)"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <div className="p-3 bg-red-500/20 text-red-300 text-xs rounded-xl border border-red-500/30 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="secondary"
              className="w-full mt-2"
              size="lg"
              isLoading={isLoading}
            >
              Masuk ke Panel Pengurus
            </Button>
          </form>

          {/* Test credentials helper */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-emerald-100/70">
            <p className="font-semibold text-emerald-300 mb-1 flex items-center justify-center gap-1.5">
              <ShieldCheck size={14} className="text-yellow-400" />
              Kredensial Demo Pengurus:
            </p>
            <p className="font-mono text-white/90">User: <span className="text-yellow-400 font-bold">admin</span> | Pass: <span className="text-yellow-400 font-bold">admin123</span></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
