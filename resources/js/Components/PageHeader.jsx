export default function PageHeader({ title, description, action }) {
    return (
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {title}
                </h2>
                {description && (
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                )}
            </div>
            {action}
        </div>
    );
}
