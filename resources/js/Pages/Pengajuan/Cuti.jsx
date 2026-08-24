import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import PengajuanTabs from '@/Components/PengajuanTabs';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const REQUESTS = [
    { id: 1, nama: 'Dewi Anggraini', mulai: '01 Sep 2026', selesai: '03 Sep 2026', sisaCuti: 9, status: 'disetujui' },
    { id: 2, nama: 'Bela Ratina Rochmansia', mulai: '10 Sep 2026', selesai: '12 Sep 2026', sisaCuti: 11, status: 'pending' },
];

const TONE = { disetujui: 'green', pending: 'amber', ditolak: 'red' };
const LABEL = { disetujui: 'Disetujui', pending: 'Menunggu', ditolak: 'Ditolak' };

export default function Cuti() {
    return (
        <AdminLayout header="Pengajuan">
            <Head title="Pengajuan Cuti" />

            <PageHeader
                title="Pengajuan"
                description="Permohonan izin, cuti, dan lembur dari karyawan."
            />
            <PengajuanTabs active="cuti" />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'mulai', label: 'Tanggal Mulai' },
                    { key: 'selesai', label: 'Tanggal Selesai' },
                    {
                        key: 'sisaCuti',
                        label: 'Sisa Cuti',
                        render: (r) => `${r.sisaCuti} hari`,
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
