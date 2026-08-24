import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Fingerprint } from 'lucide-react';

const DEVICES = [
    { id: 1, nama: 'Lobby A', lokasi: 'Lobby Utama Gedung A', ip: '10.10.1.11', status: 'online', sync: '2 menit lalu' },
    { id: 2, nama: 'Security', lokasi: 'Pos Security Depan', ip: '10.10.1.12', status: 'online', sync: '1 menit lalu' },
    { id: 3, nama: 'Front Office', lokasi: 'Resepsionis Lt. 1', ip: '10.10.1.13', status: 'offline', sync: '3 jam lalu' },
    { id: 4, nama: 'Ruang Meeting', lokasi: 'Meeting Room Lt. 2', ip: '10.10.1.14', status: 'online', sync: '5 menit lalu' },
    { id: 5, nama: 'Gerbang Timur', lokasi: 'Gerbang Masuk Timur', ip: '10.10.1.15', status: 'online', sync: 'Baru saja' },
];

export default function Index() {
    return (
        <AdminLayout header="Perangkat Absensi">
            <Head title="Perangkat Absensi" />

            <PageHeader
                title="Perangkat Absensi"
                description="Mesin/titik verifikasi wajah & GPS yang terdaftar di lingkungan kantor."
            />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama Perangkat',
                        render: (r) => (
                            <div className="flex items-center gap-2">
                                <Fingerprint className="h-4 w-4 text-brand-600" />
                                <span className="font-medium">{r.nama}</span>
                            </div>
                        ),
                    },
                    { key: 'lokasi', label: 'Lokasi' },
                    { key: 'ip', label: 'IP Address' },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (r) => (
                            <Badge tone={r.status === 'online' ? 'green' : 'red'}>
                                {r.status === 'online' ? 'Online' : 'Offline'}
                            </Badge>
                        ),
                    },
                    { key: 'sync', label: 'Terakhir Sync' },
                ]}
                rows={DEVICES}
            />
        </AdminLayout>
    );
}
