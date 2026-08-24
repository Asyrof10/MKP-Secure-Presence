export default function DataTable({ columns, rows, keyField = 'id' }) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/40">
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="whitespace-nowrap px-4 py-3 font-semibold text-gray-500 dark:text-gray-400"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr
                                key={row[keyField]}
                                className="border-b border-gray-50 last:border-0 hover:bg-gray-50 dark:border-gray-700/60 dark:hover:bg-gray-700/30"
                            >
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className="whitespace-nowrap px-4 py-3 text-gray-700 dark:text-gray-200"
                                    >
                                        {col.render
                                            ? col.render(row)
                                            : row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-4 py-10 text-center text-gray-400"
                                >
                                    Belum ada data.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
