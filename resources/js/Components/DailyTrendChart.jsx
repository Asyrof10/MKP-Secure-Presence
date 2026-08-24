import useColorScheme from '@/hooks/useColorScheme';
import { CATEGORICAL, CHROME } from '@/lib/chartColors';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const SERIES = [
    { key: 'terlambat', label: 'Terlambat' },
    { key: 'sakit', label: 'Sakit' },
    { key: 'izin', label: 'Izin' },
    { key: 'mangkir', label: 'Mangkir' },
    { key: 'pulangCepat', label: 'Pulang Cepat' },
];

const DATA = [
    { day: 'Sen', terlambat: 15, sakit: 3, izin: 5, mangkir: 2, pulangCepat: 4 },
    { day: 'Sel', terlambat: 9, sakit: 6, izin: 4, mangkir: 3, pulangCepat: 7 },
    { day: 'Rab', terlambat: 17, sakit: 2, izin: 9, mangkir: 1, pulangCepat: 3 },
    { day: 'Kam', terlambat: 12, sakit: 4, izin: 6, mangkir: 5, pulangCepat: 6 },
    { day: 'Jum', terlambat: 8, sakit: 5, izin: 3, mangkir: 14, pulangCepat: 5 },
    { day: 'Sab', terlambat: 14, sakit: 3, izin: 5, mangkir: 4, pulangCepat: 10 },
    { day: 'Min', terlambat: 25, sakit: 4, izin: 6, mangkir: 3, pulangCepat: 2 },
];

function CustomTooltip({ active, payload, label, chrome }) {
    if (!active || !payload?.length) return null;
    return (
        <div
            className="rounded-lg border px-3 py-2 text-sm shadow-md"
            style={{
                background: chrome.surface,
                borderColor: chrome.grid,
                color: chrome.textPrimary,
            }}
        >
            <p className="mb-1 font-medium">{label}</p>
            {payload.map((p) => (
                <div
                    key={p.dataKey}
                    className="flex items-center justify-between gap-4"
                >
                    <span
                        className="flex items-center gap-1.5"
                        style={{ color: chrome.textSecondary }}
                    >
                        <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: p.color }}
                        />
                        {p.name}
                    </span>
                    <span className="font-medium tabular-nums">
                        {p.value}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function DailyTrendChart() {
    const isDark = useColorScheme();
    const colors = isDark ? CATEGORICAL.dark : CATEGORICAL.light;
    const chrome = isDark ? CHROME.dark : CHROME.light;

    return (
        <div className="rounded-xl border border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                Trend Harian
            </h3>

            <div className="mt-3 h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={DATA}
                        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid
                            stroke={chrome.grid}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="day"
                            tick={{ fill: chrome.muted, fontSize: 12 }}
                            axisLine={{ stroke: chrome.axis }}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fill: chrome.muted, fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            width={30}
                        />
                        <Tooltip
                            content={<CustomTooltip chrome={chrome} />}
                        />
                        <Legend
                            iconType="circle"
                            iconSize={8}
                            wrapperStyle={{
                                fontSize: 12,
                                color: chrome.textSecondary,
                            }}
                        />
                        {SERIES.map((s, i) => (
                            <Line
                                key={s.key}
                                type="monotone"
                                dataKey={s.key}
                                name={s.label}
                                stroke={colors[i % colors.length]}
                                strokeWidth={2}
                                dot={{ r: 4, strokeWidth: 0 }}
                                activeDot={{ r: 5 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
