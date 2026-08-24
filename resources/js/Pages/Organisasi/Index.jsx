import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Building2 } from 'lucide-react';

const DIVISIONS = [
    { id: 1, kode: 'MKP-UMRO-JP2', nama: 'MKP UMRO JP2', kepala: 'Bela Ratina Rochmansia', jumlah: 24 },
    { id: 2, kode: 'MKP-HRD', nama: 'Human Resources', kepala: 'Dewi Anggraini', jumlah: 8 },
    { id: 3, kode: 'MKP-IT', nama: 'IT & Sistem Informasi', kepala: 'Tubagus Syah Fajar A.', jumlah: 6 },
    { id: 4, kode: 'MKP-OPS', nama: 'Operasional Lapangan', kepala: 'Rian Hidayat', jumlah: 15 },
    { id: 5, kode: 'MKP-FIN', nama: 'Finance & Accounting', kepala: 'Siti Nur Halimah', jumlah: 7 },
];

export default function Index() {
    return (
        <AdminLayout header="Organisasi">
            <Head title="Organisasi" />

            <PageHeader
                title="Struktur Organisasi"
                description="Daftar divisi/unit kerja di bawah PT Mitra Karya Prima."
            />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Divisi / Unit Kerja',
                        render: (r) => (
                            <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-brand-600" />
                                <span className="font-medium">{r.nama}</span>
                            </div>
                        ),
                    },
                    { key: 'kode', label: 'Kode' },
                    { key: 'kepala', label: 'Kepala Divisi' },
                    {
                        key: 'jumlah',
                        label: 'Jumlah Karyawan',
                        render: (r) => `${r.jumlah} orang`,
                    },
                ]}
                rows={DIVISIONS}
            />
        </AdminLayout>
    );
}
