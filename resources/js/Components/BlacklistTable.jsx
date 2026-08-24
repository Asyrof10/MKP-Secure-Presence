import Badge from '@/Components/Badge';

const STATUS_TONE = { Hadir: 'green', Terlambat: 'amber', 'Tidak Hadir': 'red' };

const ROWS = [
    { id: 1, nama: 'Clara', status: 'Terlambat', flag: false },
    { id: 2, nama: 'Junipeer', status: 'Hadir', flag: true },
    { id: 3, nama: 'Jodi', status: 'Hadir', flag: false },
    { id: 4, nama: 'Lilliey', status: 'Tidak Hadir', flag: true },
    { id: 5, nama: 'Ryliey', status: 'Hadir', flag: true },
    { id: 6, nama: 'Relaigh', status: 'Hadir', flag: true },
    { id: 7, nama: 'Laly', status: 'Terlambat', flag: true },
    { id: 8, nama: 'Sophia', status: 'Terlambat', flag: false },
    { id: 9, nama: 'John', status: 'Hadir', flag: false },
    { id: 10, nama: 'Marc', status: 'Hadir', flag: false },
    { id: 11, nama: 'Janna', status: 'Hadir', flag: false },
    { id: 12, nama: 'Henry', status: 'Hadir', flag: false },
    { id: 13, nama: 'Jadeyn', status: 'Hadir', flag: true },
    { id: 14, nama: 'Pennington', status: 'Terlambat', flag: true },
];

export default function BlacklistTable() {
    return (
        <div className="flex h-full max-h-[420px] flex-col rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-1 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Blacklist
                </h3>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    Pelanggaran berulang
                </span>
            </div>

            <div className="mt-1 flex-1 overflow-y-auto">
                <table className="w-full text-left text-sm">
                    <tbody>
                        {ROWS.map((row) => (
                            <tr
                                key={row.id}
                                className="border-b border-gray-50 last:border-0 dark:border-gray-700/60"
                            >
                                <td className="py-1.5 pe-2 text-gray-700 dark:text-gray-200">
                                    <span className="flex items-center gap-1.5">
                                        {row.nama}
                                        {row.flag && (
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                                        )}
                                    </span>
                                </td>
                                <td className="py-1.5 text-end">
                                    <Badge tone={STATUS_TONE[row.status]}>
                                        {row.status}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
