const fs = require('fs');
const path = require('path');

const routes = [
  'app/dashboard/donasi',
  'app/dashboard/kegiatan',
  'app/dashboard/jamaah',
  'app/dashboard/inventaris',
  'app/dashboard/jadwal',
  'app/dashboard/surat',
  'app/dashboard/laporan',
  'app/dashboard/auditlog',
  'app/tv'
];

routes.forEach(route => {
  fs.mkdirSync(route, { recursive: true });
  
  const titleName = route.split('/').pop();
  const title = titleName.charAt(0).toUpperCase() + titleName.slice(1);
  
  const content = `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ${title}Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Modul ${title}</h2>
        <p className="text-gray-500 text-sm">Halaman ini sedang dalam tahap pengembangan (Work in Progress).</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Data ${title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-8 text-center bg-gray-50 border border-dashed border-gray-300 rounded-xl">
            <p className="text-gray-500">Modul ini akan segera tersedia. Modul saat ini menggunakan data dummy atau masih kosong.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
`;

  fs.writeFileSync(path.join(route, 'page.tsx'), content);
});

console.log('Done creating placeholders.');
