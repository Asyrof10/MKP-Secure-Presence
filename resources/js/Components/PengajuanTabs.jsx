import { Link } from '@inertiajs/react';

const TABS = [
    { key: 'izin', label: 'Izin', route: 'pengajuan.izin' },
    { key: 'cuti', label: 'Cuti', route: 'pengajuan.cuti' },
    { key: 'lembur', label: 'Lembur', route: 'pengajuan.lembur' },
];

export default function PengajuanTabs({ active }) {
    return (
        <div className="mb-5 flex gap-1 border-b border-gray-200 dark:border-gray-700">
            {TABS.map((tab) => (
                <Link
                    key={tab.key}
                    href={route(tab.route)}
                    className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition ${
                        active === tab.key
                            ? 'border-brand-600 text-brand-700 dark:text-brand-300'
                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                >
                    {tab.label}
                </Link>
            ))}
        </div>
    );
}
