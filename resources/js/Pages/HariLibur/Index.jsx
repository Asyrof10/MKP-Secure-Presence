import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const HOLIDAYS = [
    { id: 1, tanggal: '01 Jan 2026', nama: 'Tahun Baru Masehi', tipe: 'nasional' },
    { id: 2, tanggal: '17 Feb 2026', nama: 'Isra Mikraj', tipe: 'nasional' },
    { id: 3, tanggal: '20 Mar 2026', nama: 'Hari Raya Nyepi', tipe: 'nasional' },
    { id: 4, tanggal: '21 Mar 2026', nama: 'Cuti Bersama Nyepi', tipe: 'cuti_bersama' },
    { id: 5, tanggal: '17 Agu 2026', nama: 'HUT Kemerdekaan RI', tipe: 'nasional' },
    { id: 6, tanggal: '25 Des 2026', nama: 'Hari Raya Natal', tipe: 'nasional' },
];

export default function Index() {
    return (
        <AdminLayout header="Setting Jadwal Kerja">
            <Head title="Hari Libur" />

            <PageHeader
                title="Hari Libur"
                description="Kalender libur nasional & cuti bersama yang dikecualikan dari presensi."
            />

            <DataTable
                columns={[
                    { key: 'tanggal', label: 'Tanggal' },
                    {
                        key: 'nama',
                        label: 'Nama Libur',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    {
                        key: 'tipe',
                        label: 'Tipe',
                        render: (r) => (
                            <Badge tone={r.tipe === 'nasional' ? 'blue' : 'gray'}>
                                {r.tipe === 'nasional' ? 'Libur Nasional' : 'Cuti Bersama'}
                            </Badge>
                        ),
                    },
                ]}
                rows={HOLIDAYS}
            />
        </AdminLayout>
    );
}
