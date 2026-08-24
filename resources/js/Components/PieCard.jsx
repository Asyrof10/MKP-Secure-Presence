import useColorScheme from '@/hooks/useColorScheme';
import { CATEGORICAL, CHROME } from '@/lib/chartColors';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

function renderLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    if (percent < 0.05) return null;
    return (
        <text
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-white text-[11px] font-semibold"
        >
            {`${Math.round(percent * 100)}%`}
        </text>
    );
}

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
            <p className="font-medium">{p.name}</p>
            <p style={{ color: chrome.textSecondary }}>
                {p.value.toLocaleString('id-ID')} ({(p.percent * 100).toFixed(0)}%)
            </p>
        </div>
    );
}

export default function PieCard({ title, data }) {
    const isDark = useColorScheme();
    const colors = isDark ? CATEGORICAL.dark : CATEGORICAL.light;
    const chrome = isDark ? CHROME.dark : CHROME.light;
    const total = data.reduce((sum, d) => sum + d.value, 0);

    return (
        <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {title}
            </h3>

            <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="0%"
                            outerRadius="90%"
                            paddingAngle={2}
                            stroke={chrome.surface}
                            strokeWidth={2}
                            label={renderLabel}
                            labelLine={false}
                        >
                            {data.map((_, i) => (
                                <Cell key={i} fill={colors[i % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip chrome={chrome} />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                {data.map((d, i) => (
                    <span
                        key={d.name}
                        className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300"
                    >
                        <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: colors[i % colors.length] }}
                        />
                        {d.name}
                    </span>
                ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">
                Total {total.toLocaleString('id-ID')}
            </p>
        </div>
    );
}
