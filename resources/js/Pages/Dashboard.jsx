import AttendanceGauge from '@/Components/AttendanceGauge';
import BlacklistTable from '@/Components/BlacklistTable';
import DeviceUsageChart from '@/Components/DeviceUsageChart';
import PieCard from '@/Components/PieCard';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const DIVISI_DATA = [
    { name: 'MKP UMRO JP2', value: 24 },
    { name: 'Operasional Lapangan', value: 15 },
    { name: 'Human Resources', value: 8 },
    { name: 'Finance & Accounting', value: 7 },
    { name: 'IT & Sistem Informasi', value: 6 },
];

const TIDAK_HADIR_DATA = [
    { name: 'Izin', value: 40 },
    { name: 'Sakit', value: 25 },
    { name: 'Cuti', value: 15 },
    { name: 'Alpha', value: 12 },
    { name: 'Lainnya', value: 8 },
];

const FLAG_DATA = [
    { name: 'GPS Tidak Sesuai', value: 40 },
    { name: 'Wajah Tidak Cocok', value: 30 },
    { name: 'Perangkat Tidak Dikenal', value: 13 },
    { name: 'Percobaan Berulang', value: 10 },
    { name: 'Lainnya', value: 7 },
];

export default function Dashboard() {
    return (
        <AdminLayout header="MKP Secure Presence">
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
                <PieCard title="Divisi" data={DIVISI_DATA} />
                <AttendanceGauge
                    title="Masuk"
                    percent={77}
                    sublabel="dari total user hari ini"
                />
                <PieCard title="Tidak Hadir" data={TIDAK_HADIR_DATA} />

                <div className="lg:row-span-2">
                    <BlacklistTable />
                </div>

                <div className="lg:col-span-2">
                    <DeviceUsageChart />
                </div>
                <PieCard title="Flag Kecurangan" data={FLAG_DATA} />
            </div>
        </AdminLayout>
    );
}
