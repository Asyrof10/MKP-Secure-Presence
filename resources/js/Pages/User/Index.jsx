import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const USERS = [
    { id: 1, nama: 'Bela Ratina Rochmansia', nip: 'MKP-0001', divisi: 'MKP UMRO JP2', jabatan: 'Team Lead', status: 'aktif', face: true },
    { id: 2, nama: 'Tubagus Syah Fajar A.', nip: 'MKP-0002', divisi: 'MKP UMRO JP2', jabatan: 'Staff', status: 'aktif', face: true },
    { id: 3, nama: 'Dewi Anggraini', nip: 'MKP-0003', divisi: 'Human Resources', jabatan: 'HR Manager', status: 'aktif', face: true },
    { id: 4, nama: 'Rian Hidayat', nip: 'MKP-0004', divisi: 'Operasional Lapangan', jabatan: 'Supervisor', status: 'aktif', face: false },
    { id: 5, nama: 'Siti Nur Halimah', nip: 'MKP-0005', divisi: 'Finance & Accounting', jabatan: 'Staff Finance', status: 'nonaktif', face: true },
];

export default function Index() {
    return (
        <AdminLayout header="User">
            <Head title="User" />

            <PageHeader
                title="Data User"
                description="Karyawan yang terdaftar sebagai pengguna sistem presensi."
            />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => (
                            <div>
                                <p className="font-medium">{r.nama}</p>
                                <p className="text-xs text-gray-400">{r.nip}</p>
                            </div>
                        ),
                    },
                    { key: 'divisi', label: 'Divisi' },
                    { key: 'jabatan', label: 'Jabatan' },
                    {
                        key: 'face',
                        label: 'Wajah Terdaftar',
                        render: (r) => (
                            <Badge tone={r.face ? 'blue' : 'amber'}>
                                {r.face ? 'Terdaftar' : 'Belum'}
                            </Badge>
                        ),
                    },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (r) => (
                            <Badge tone={r.status === 'aktif' ? 'green' : 'red'}>
                                {r.status === 'aktif' ? 'Aktif' : 'Non Aktif'}
                            </Badge>
                        ),
                    },
                ]}
                rows={USERS}
            />
        </AdminLayout>
    );
}
