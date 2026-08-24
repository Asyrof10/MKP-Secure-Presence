import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { ScanFace } from 'lucide-react';

const HISTORY = [
    { id: 1, nama: 'Bela Ratina Rochmansia', tanggal: '24 Agu 2026', masuk: '07:52', pulang: '17:05', lokasi: 'Lobby A', wajah: true, status: 'tepat_waktu' },
    { id: 2, nama: 'Tubagus Syah Fajar A.', tanggal: '24 Agu 2026', masuk: '08:14', pulang: '17:10', lokasi: 'Gerbang Timur', wajah: true, status: 'terlambat' },
    { id: 3, nama: 'Dewi Anggraini', tanggal: '24 Agu 2026', masuk: '07:48', pulang: '17:00', lokasi: 'Front Office', wajah: true, status: 'tepat_waktu' },
    { id: 4, nama: 'Rian Hidayat', tanggal: '24 Agu 2026', masuk: '-', pulang: '-', lokasi: '-', wajah: false, status: 'tidak_masuk' },
    { id: 5, nama: 'Siti Nur Halimah', tanggal: '24 Agu 2026', masuk: '08:20', pulang: '17:02', lokasi: 'Security', wajah: true, status: 'terlambat' },
];

const TONE = { tepat_waktu: 'green', terlambat: 'amber', tidak_masuk: 'red' };
const LABEL = { tepat_waktu: 'Tepat Waktu', terlambat: 'Terlambat', tidak_masuk: 'Tidak Masuk' };

export default function Index() {
    return (
        <AdminLayout header="Riwayat Kehadiran">
            <Head title="Riwayat Kehadiran" />

            <PageHeader
                title="Riwayat Kehadiran"
                description="Log presensi harian hasil verifikasi wajah & GPS."
            />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'tanggal', label: 'Tanggal' },
                    { key: 'masuk', label: 'Jam Masuk' },
                    { key: 'pulang', label: 'Jam Pulang' },
                    { key: 'lokasi', label: 'Lokasi' },
                    {
                        key: 'wajah',
                        label: 'Verifikasi Wajah',
                        render: (r) =>
                            r.wajah ? (
                                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                                    <ScanFace className="h-4 w-4" /> Terverifikasi
                                </span>
                            ) : (
                                <span className="text-gray-400">-</span>
                            ),
                    },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (r) => (
                            <Badge tone={TONE[r.status]}>{LABEL[r.status]}</Badge>
                        ),
                    },
                ]}
                rows={HISTORY}
            />
        </AdminLayout>
    );
}
