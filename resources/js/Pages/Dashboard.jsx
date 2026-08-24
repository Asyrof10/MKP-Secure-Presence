import DailyTrendChart from '@/Components/DailyTrendChart';
import DeviceUsageChart from '@/Components/DeviceUsageChart';
import StatCard from '@/Components/StatCard';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import {
    ScanFace,
    UserCheck,
    UserX,
    Users,
    UserSquare2,
    Timer,
    XCircle,
} from 'lucide-react';

const REGISTRATION = {
    tenantId: 'TEN-0001',
    orgId: 'ORG-BPDZNU',
    operatorCode: 'RSNFIJ',
};

export default function Dashboard() {
    return (
        <AdminLayout header="Masook">
            <Head title="Dashboard" />

            <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl bg-blue-700 px-5 py-4 text-white shadow-sm">
                        <p className="text-sm font-semibold">Kode Registrasi</p>
                        <dl className="mt-2 space-y-1 text-xs text-white/85">
                            <div className="flex gap-2">
                                <dt className="w-24 shrink-0">Tenant ID</dt>
                                <dd>: {REGISTRATION.tenantId}</dd>
                            </div>
                            <div className="flex gap-2">
                                <dt className="w-24 shrink-0">Organisasi ID</dt>
                                <dd>: {REGISTRATION.orgId}</dd>
                            </div>
                            <div className="flex gap-2">
                                <dt className="w-24 shrink-0">Kode Operator</dt>
                                <dd>: {REGISTRATION.operatorCode}</dd>
                            </div>
                        </dl>
                    </div>

                    <StatCard icon={Users} label="Total User" value={60} tone="green" />
                    <StatCard icon={UserCheck} label="User Aktif" value={69} tone="indigo" />
                    <StatCard icon={UserX} label="User Non Aktif" value={0} tone="red" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard icon={ScanFace} label="Verifikasi Wajah" value={37} tone="red" />
                    <StatCard icon={UserSquare2} label="Sudah Presensi" value={0} tone="teal" />
                    <StatCard icon={Timer} label="Terlambat" value={0} tone="amber" />
                    <StatCard icon={XCircle} label="Tidak Masuk" value={0} tone="red" />
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <DeviceUsageChart />
                    <DailyTrendChart />
                </div>
            </div>
        </AdminLayout>
    );
}
