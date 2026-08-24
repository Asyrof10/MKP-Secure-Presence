import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const LOGS = [
    { id: 1, waktu: '24 Agu 2026 08:31', user: 'Admin MKP', aktivitas: 'Login ke sistem', ip: '10.10.1.5' },
    { id: 2, waktu: '24 Agu 2026 08:20', user: 'Dewi Anggraini', aktivitas: 'Menambahkan user baru (MKP-0005)', ip: '10.10.1.9' },
    { id: 3, waktu: '24 Agu 2026 07:55', user: 'System', aktivitas: 'Sinkronisasi perangkat Gerbang Timur', ip: '10.10.1.15' },
    { id: 4, waktu: '23 Agu 2026 17:12', user: 'Rian Hidayat', aktivitas: 'Mengajukan izin sakit', ip: '10.10.1.22' },
    { id: 5, waktu: '23 Agu 2026 09:02', user: 'Admin MKP', aktivitas: 'Mengubah jadwal kerja Shift Malam', ip: '10.10.1.5' },
];

export default function Index() {
    return (
        <AdminLayout header="Log Sistem">
            <Head title="Log Sistem" />

            <PageHeader
                title="Log Sistem"
                description="Riwayat aktivitas pengguna & sistem untuk keperluan audit."
            />

            <DataTable
                columns={[
                    { key: 'waktu', label: 'Waktu' },
                    {
                        key: 'user',
                        label: 'User',
                        render: (r) => <span className="font-medium">{r.user}</span>,
                    },
                    { key: 'aktivitas', label: 'Aktivitas' },
                    { key: 'ip', label: 'IP Address' },
                ]}
                rows={LOGS}
            />
        </AdminLayout>
    );
}
