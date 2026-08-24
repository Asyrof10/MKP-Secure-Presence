import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import PengajuanTabs from '@/Components/PengajuanTabs';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const REQUESTS = [
    { id: 1, nama: 'Rian Hidayat', tanggal: '22 Agu 2026', mulai: '17:00', selesai: '20:00', totalJam: 3, status: 'disetujui' },
    { id: 2, nama: 'Tubagus Syah Fajar A.', tanggal: '23 Agu 2026', mulai: '17:00', selesai: '19:00', totalJam: 2, status: 'pending' },
];

const TONE = { disetujui: 'green', pending: 'amber', ditolak: 'red' };
const LABEL = { disetujui: 'Disetujui', pending: 'Menunggu', ditolak: 'Ditolak' };

export default function Lembur() {
    return (
        <AdminLayout header="Pengajuan">
            <Head title="Pengajuan Lembur" />

            <PageHeader
                title="Pengajuan"
                description="Permohonan izin, cuti, dan lembur dari karyawan."
            />
            <PengajuanTabs active="lembur" />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'tanggal', label: 'Tanggal' },
                    { key: 'mulai', label: 'Jam Mulai' },
                    { key: 'selesai', label: 'Jam Selesai' },
                    {
                        key: 'totalJam',
                        label: 'Total Jam',
                        render: (r) => `${r.totalJam} jam`,
                    },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (r) => (
                            <Badge tone={TONE[r.status]}>{LABEL[r.status]}</Badge>
                        ),
                    },
                ]}
                rows={REQUESTS}
            />
        </AdminLayout>
    );
}
