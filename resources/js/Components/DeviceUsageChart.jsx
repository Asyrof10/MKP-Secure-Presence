import useColorScheme from '@/hooks/useColorScheme';
import { CATEGORICAL, CHROME } from '@/lib/chartColors';
import {
    Bar,
    BarChart,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const DATA = [
    { name: 'Lobby A', value: 62 },
    { name: 'Security', value: 448 },
    { name: 'Front Office', value: 18 },
    { name: 'Ruang Meeting', value: 9 },
    { name: 'Gerbang Timur', value: 121 },
];

function CustomTooltip({ active, payload, chrome }) {
    if (!active || !payload?.length) return null;
    const p = payload[0];
    return (
        <div
            className="rounded-lg border px-3 py-2 text-sm shadow-md"
            style={{
                background: chrome.surface,
                borderColor: chrome.grid,
                color: chrome.textPrimary,
            }}
        >
            <p className="font-medium">{p.payload.name}</p>
            <p style={{ color: chrome.textSecondary }}>
                {p.value.toLocaleString('id-ID')} presensi
            </p>
        </div>
    );
}

export default function DeviceUsageChart() {
    const isDark = useColorScheme();
    const colors = isDark ? CATEGORICAL.dark : CATEGORICAL.light;
    const chrome = isDark ? CHROME.dark : CHROME.light;

    return (
        <div className="rounded-xl border border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                Top 5 Penggunaan Mesin Absensi
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                {DATA.map((d, i) => (
                    <span
                        key={d.name}
                        className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300"
                    >
                        <span
                            className="h-2.5 w-2.5 rounded-sm"
                            style={{ background: colors[i % colors.length] }}
                        />
                        {d.name}
                    </span>
                ))}
            </div>

            <div className="mt-3 h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={DATA}
                        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                        barCategoryGap="24%"
                    >
                        <XAxis
                            dataKey="name"
                            tick={{ fill: chrome.muted, fontSize: 12 }}
                            axisLine={{ stroke: chrome.axis }}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fill: chrome.muted, fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            width={40}
                        />
                        <Tooltip
                            cursor={{ fill: chrome.grid, opacity: 0.4 }}
                            content={<CustomTooltip chrome={chrome} />}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={56}>
                            {DATA.map((_, i) => (
                                <Cell
                                    key={i}
                                    fill={colors[i % colors.length]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
