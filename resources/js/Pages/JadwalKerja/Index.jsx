import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const SCHEDULES = [
    { id: 1, nama: 'Shift Reguler', masuk: '08:00', pulang: '17:00', toleransi: '15 menit', hari: 'Senin - Jumat' },
    { id: 2, nama: 'Shift Pagi', masuk: '06:00', pulang: '14:00', toleransi: '10 menit', hari: 'Senin - Sabtu' },
    { id: 3, nama: 'Shift Siang', masuk: '14:00', pulang: '22:00', toleransi: '10 menit', hari: 'Senin - Sabtu' },
    { id: 4, nama: 'Shift Malam', masuk: '22:00', pulang: '06:00', toleransi: '10 menit', hari: 'Senin - Sabtu' },
];

export default function Index() {
    return (
        <AdminLayout header="Setting Jadwal Kerja">
            <Head title="Jadwal Kerja" />

            <PageHeader
                title="Jadwal Kerja"
                description="Pola shift yang berlaku dan dipakai untuk validasi keterlambatan."
            />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama Shift',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'masuk', label: 'Jam Masuk' },
                    { key: 'pulang', label: 'Jam Pulang' },
                    {
                        key: 'toleransi',
                        label: 'Toleransi',
                        render: (r) => <Badge tone="amber">{r.toleransi}</Badge>,
                    },
                    { key: 'hari', label: 'Hari Berlaku' },
                ]}
                rows={SCHEDULES}
            />
        </AdminLayout>
    );
}
