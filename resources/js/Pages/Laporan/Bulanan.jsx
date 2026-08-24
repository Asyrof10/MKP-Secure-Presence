import DataTable from '@/Components/DataTable';
import LaporanTabs from '@/Components/LaporanTabs';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Download } from 'lucide-react';

const ROWS = [
    { id: 1, nama: 'Bela Ratina Rochmansia', hadir: 21, izin: 1, sakit: 0, alpha: 0, terlambat: 1 },
    { id: 2, nama: 'Tubagus Syah Fajar A.', hadir: 19, izin: 0, sakit: 2, alpha: 1, terlambat: 4 },
    { id: 3, nama: 'Dewi Anggraini', hadir: 22, izin: 0, sakit: 0, alpha: 0, terlambat: 0 },
    { id: 4, nama: 'Rian Hidayat', hadir: 18, izin: 2, sakit: 0, alpha: 2, terlambat: 2 },
];

export default function Bulanan() {
    return (
        <AdminLayout header="Laporan">
            <Head title="Laporan Bulanan" />

            <PageHeader
                title="Laporan"
                description="Rekap presensi harian dan bulanan untuk kebutuhan HR."
                action={
                    <button className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
                        <Download className="h-4 w-4" />
                        Export
                    </button>
                }
            />
            <LaporanTabs active="bulanan" />

            <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                Agustus 2026
            </p>

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'hadir', label: 'Hadir' },
                    { key: 'izin', label: 'Izin' },
                    { key: 'sakit', label: 'Sakit' },
                    { key: 'alpha', label: 'Alpha' },
                    { key: 'terlambat', label: 'Terlambat' },
                ]}
                rows={ROWS}
            />
        </AdminLayout>
    );
}
