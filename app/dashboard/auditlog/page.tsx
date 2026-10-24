"use client";

import { useState } from "react";
import { ShieldAlert, RefreshCw, Key, Database, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AuditItem {
  id: number;
  timestamp: string;
  user: string;
  aksi: "INSERT" | "UPDATE" | "DELETE" | "LOGIN";
  tabel: string;
  detail: string;
}

export default function AuditLogPage() {
  const [logs, setLogs] = useState<AuditItem[]>([
    {
      id: 1,
      timestamp: "2026-09-04 14:32:10",
      user: "admin",
      aksi: "INSERT",
      tabel: "Donasi",
      detail: "Menerbitkan penerimaan donasi baru: H. Abdullah (Rp 1.000.000)",
    },
    {
      id: 2,
      timestamp: "2026-09-04 13:15:02",
      user: "admin",
      aksi: "LOGIN",
      tabel: "Users",
      detail: "Otorisasi berhasil via IP 192.168.1.104",
    },
    {
      id: 3,
      timestamp: "2026-09-03 18:45:22",
      user: "admin",
      aksi: "UPDATE",
      tabel: "JadwalImam",
      detail: "Memperbarui jadwal muadzin salat rawatib",
    },
    {
      id: 4,
      timestamp: "2026-09-02 09:12:44",
      user: "admin",
      aksi: "INSERT",
      tabel: "Pemasukan",
      detail: "Input kas kotak amal harian",
    },
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const initAuditLog = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Sistem Audit Log & Keamanan</h2>
          <p className="text-xs text-emerald-200/70 mt-1 font-medium">
            Jejak rekaman aktivitas pengguna dan mutasi data database (Super Administrator Only).
          </p>
        </div>
        <Button variant="outline" onClick={initAuditLog} isLoading={isRefreshing}>
          <RefreshCw size={16} />
          Segarkan Log
        </Button>
      </div>

      {/* Tabel Audit */}
      <div className="liquid-bento-card overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert size={18} className="text-yellow-400" />
            <h3 className="text-base font-bold text-white">Catatan Aktivitas CRUD & Akses</h3>
          </div>
          <span className="text-xs text-emerald-200/70">{logs.length} Jejak Terdata</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-white/5 text-emerald-200 text-xs uppercase tracking-wider border-b border-white/10">
                <th className="py-4 px-6 font-bold">Waktu (WIB)</th>
                <th className="py-4 px-6 font-bold">User</th>
                <th className="py-4 px-6 font-bold text-center">Aksi</th>
                <th className="py-4 px-6 font-bold">Tabel Terkait</th>
                <th className="py-4 px-6 font-bold">Rincian Perubahan</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5 font-mono text-xs">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-emerald-200">{log.timestamp}</td>
                  <td className="py-4 px-6 font-bold text-white">{log.user}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                      log.aksi === "INSERT"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : log.aksi === "LOGIN"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : log.aksi === "UPDATE"
                        ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}>
                      {log.aksi}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-yellow-300 font-semibold">{log.tabel}</td>
                  <td className="py-4 px-6 text-emerald-100/80 font-sans">{log.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
