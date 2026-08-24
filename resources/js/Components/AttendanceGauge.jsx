import useColorScheme from '@/hooks/useColorScheme';

const SIZE = 140;
const STROKE = 14;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function AttendanceGauge({ title, percent, sublabel }) {
    const isDark = useColorScheme();
    const fill = isDark ? '#3987e5' : '#2a78d6';
    const track = isDark ? '#184f95' : '#cde2fb';
    const offset = CIRCUMFERENCE * (1 - percent / 100);

    return (
        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="self-start text-sm font-semibold text-gray-800 dark:text-gray-100">
                {title}
            </h3>

            <div className="relative mt-2 h-40 w-40">
                <svg
                    width={SIZE}
                    height={SIZE}
                    viewBox={`0 0 ${SIZE} ${SIZE}`}
                    className="-rotate-90"
                >
                    <circle
                        cx={SIZE / 2}
                        cy={SIZE / 2}
                        r={RADIUS}
                        fill="none"
                        stroke={track}
                        strokeWidth={STROKE}
                    />
                    <circle
                        cx={SIZE / 2}
                        cy={SIZE / 2}
                        r={RADIUS}
                        fill="none"
                        stroke={fill}
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={offset}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold tabular-nums text-gray-800 dark:text-gray-100">
                        {percent}%
                    </span>
                    {sublabel && (
                        <span className="mt-0.5 text-xs text-gray-400">
                            {sublabel}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
