export default function StatCard({ icon: Icon, label, value, tone = 'brand' }) {
    const tones = {
        brand: 'bg-brand-600',
        green: 'bg-emerald-600',
        indigo: 'bg-indigo-600',
        red: 'bg-rose-600',
        amber: 'bg-amber-500',
        teal: 'bg-teal-600',
    };

    return (
        <div
            className={`flex items-center justify-between rounded-xl ${tones[tone]} px-5 py-4 text-white shadow-sm`}
        >
            <div>
                <p className="text-sm font-medium text-white/85">{label}</p>
                <p className="mt-1 text-3xl font-bold tabular-nums">{value}</p>
            </div>
            {Icon && (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Icon className="h-6 w-6" />
                </div>
            )}
        </div>
    );
}
