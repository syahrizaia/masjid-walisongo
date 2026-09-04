"use client";

export default function AuditLogPage() {
  const initAuditLog = () => {
    alert("Segarkan log ditekan");
  };

  return (
    <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Sistem Audit Log</h2>
          <p className="text-gray-500 text-sm">Jejak rekaman aktivitas pengguna sistem (Admin Only).</p>
        </div>
        <button onClick={initAuditLog} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors text-sm md:text-base">
          <i className="fa-solid fa-sync mr-1"></i> Segarkan Log
        </button>
      </div>

      {/* Tabel Audit */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-800 text-white text-sm border-b">
                <th className="py-3 px-6 font-medium">Timestamp</th>
                <th className="py-3 px-6 font-medium">User ID</th>
                <th className="py-3 px-6 font-medium">Aksi</th>
                <th className="py-3 px-6 font-medium">Nama Tabel</th>
                <th className="py-3 px-6 font-medium">Detail Perubahan</th>
              </tr>
            </thead>
            <tbody id="tbl-audit-body" className="text-sm divide-y divide-gray-100 font-mono text-xs">
              <tr><td colSpan={5} className="py-8 text-center text-gray-400">Memuat jejak audit...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
