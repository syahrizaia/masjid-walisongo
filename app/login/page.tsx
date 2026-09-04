"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

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
        setError("Username atau password salah!");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center bg-emerald-900 text-white rounded-t-xl pb-8 pt-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-emerald-800">
            <span className="text-emerald-900 text-3xl">🕌</span>
          </div>
          <CardTitle className="text-2xl text-white">SIM Masjid Wali Songo</CardTitle>
          <p className="text-emerald-100 text-sm mt-2">Login Portal Pengurus</p>
        </CardHeader>
        <CardContent className="p-8 pt-6">
          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              label="Username"
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
              Masuk ke Dashboard
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Untuk ujicoba gunakan:</p>
            <p className="font-mono mt-1">User: admin | Pass: admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
