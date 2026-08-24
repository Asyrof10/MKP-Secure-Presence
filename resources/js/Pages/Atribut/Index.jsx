import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const ATTRIBUTES = [
    { id: 1, nama: 'Golongan', tipe: 'Pilihan', digunakan: 60 },
    { id: 2, nama: 'Jabatan', tipe: 'Teks', digunakan: 60 },
    { id: 3, nama: 'Status Kepegawaian', tipe: 'Pilihan', digunakan: 60 },
    { id: 4, nama: 'Lokasi Kerja', tipe: 'Pilihan', digunakan: 55 },
    { id: 5, nama: 'Nomor Rekening', tipe: 'Teks', digunakan: 48 },
];

export default function Index() {
    return (
        <AdminLayout header="Atribut">
            <Head title="Atribut" />

            <PageHeader
                title="Atribut User"
                description="Field tambahan yang bisa dilekatkan ke data karyawan."
            />

            <DataTable
                columns={[
                    { key: 'nama', label: 'Nama Atribut' },
                    { key: 'tipe', label: 'Tipe' },
                    {
                        key: 'digunakan',
                        label: 'Digunakan Oleh',
                        render: (r) => `${r.digunakan} user`,
                    },
                ]}
                rows={ATTRIBUTES}
            />
        </AdminLayout>
    );
}
