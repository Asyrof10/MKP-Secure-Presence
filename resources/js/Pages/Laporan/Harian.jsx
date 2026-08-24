import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import LaporanTabs from '@/Components/LaporanTabs';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Download } from 'lucide-react';

const ROWS = [
    { id: 1, nama: 'Bela Ratina Rochmansia', masuk: '07:52', pulang: '17:05', status: 'tepat_waktu' },
    { id: 2, nama: 'Tubagus Syah Fajar A.', masuk: '08:14', pulang: '17:10', status: 'terlambat' },
    { id: 3, nama: 'Dewi Anggraini', masuk: '07:48', pulang: '17:00', status: 'tepat_waktu' },
    { id: 4, nama: 'Rian Hidayat', masuk: '-', pulang: '-', status: 'tidak_masuk' },
];

const TONE = { tepat_waktu: 'green', terlambat: 'amber', tidak_masuk: 'red' };
const LABEL = { tepat_waktu: 'Tepat Waktu', terlambat: 'Terlambat', tidak_masuk: 'Tidak Masuk' };

export default function Harian() {
    return (
        <AdminLayout header="Laporan">
            <Head title="Laporan Harian" />

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
            <LaporanTabs active="harian" />

            <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                24 Agustus 2026
            </p>

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'masuk', label: 'Jam Masuk' },
                    { key: 'pulang', label: 'Jam Pulang' },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (r) => (
                            <Badge tone={TONE[r.status]}>{LABEL[r.status]}</Badge>
                        ),
                    },
                ]}
                rows={ROWS}
            />
        </AdminLayout>
    );
}
