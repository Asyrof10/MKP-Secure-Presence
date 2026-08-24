import Badge from '@/Components/Badge';
import DataTable from '@/Components/DataTable';
import PageHeader from '@/Components/PageHeader';
import PengajuanTabs from '@/Components/PengajuanTabs';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const REQUESTS = [
    { id: 1, nama: 'Rian Hidayat', tanggal: '24 Agu 2026', jenis: 'Izin Sakit', alasan: 'Demam, ada surat dokter', status: 'disetujui' },
    { id: 2, nama: 'Siti Nur Halimah', tanggal: '25 Agu 2026', jenis: 'Izin Keperluan Keluarga', alasan: 'Mengurus dokumen keluarga', status: 'pending' },
    { id: 3, nama: 'Tubagus Syah Fajar A.', tanggal: '20 Agu 2026', jenis: 'Izin Sakit', alasan: 'Sakit gigi', status: 'ditolak' },
];

const TONE = { disetujui: 'green', pending: 'amber', ditolak: 'red' };
const LABEL = { disetujui: 'Disetujui', pending: 'Menunggu', ditolak: 'Ditolak' };

export default function Izin() {
    return (
        <AdminLayout header="Pengajuan">
            <Head title="Pengajuan Izin" />

            <PageHeader
                title="Pengajuan"
                description="Permohonan izin, cuti, dan lembur dari karyawan."
            />
            <PengajuanTabs active="izin" />

            <DataTable
                columns={[
                    {
                        key: 'nama',
                        label: 'Nama',
                        render: (r) => <span className="font-medium">{r.nama}</span>,
                    },
                    { key: 'tanggal', label: 'Tanggal' },
                    { key: 'jenis', label: 'Jenis Izin' },
                    { key: 'alasan', label: 'Alasan' },
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
