import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Utama</h2>
        <p className="text-gray-500 text-sm">Ringkasan operasional dan keuangan Masjid Wali Songo.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Saldo Kas Utama</p>
                <h3 className="text-2xl font-bold text-gray-900">Rp 45.500.000</h3>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-xl">💰</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Pemasukan Bulan Ini</p>
                <h3 className="text-2xl font-bold text-gray-900">Rp 12.000.000</h3>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📈</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Total Jamaah</p>
                <h3 className="text-2xl font-bold text-gray-900">450 Orang</h3>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xl">👥</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Kegiatan Terjadwal</p>
                <h3 className="text-2xl font-bold text-gray-900">8 Agenda</h3>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-xl">📅</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Agenda Terdekat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { tgl: "Hari Ini, 18:00", nama: "Kajian Fiqih", pj: "Ust. Fulan" },
                { tgl: "Besok, 15:30", nama: "TPA Anak", pj: "Ust. Ahmad" },
                { tgl: "Jumat, 12:00", nama: "Jumat Berkah", pj: "Pengurus" },
              ].map((keg, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <h4 className="font-bold text-gray-800">{keg.nama}</h4>
                    <p className="text-sm text-gray-500">{keg.pj}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                      {keg.tgl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
