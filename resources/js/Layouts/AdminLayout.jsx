import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import {
    Bell,
    Building2,
    CalendarClock,
    ChevronDown,
    ChevronRight,
    FileText,
    Fingerprint,
    History,
    LayoutGrid,
    Menu,
    ScrollText,
    Tag,
    UserCircle,
    Users,
    X,
} from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
    { label: 'Beranda', icon: LayoutGrid, route: 'dashboard' },
    { label: 'Organisasi', icon: Building2, route: 'organisasi' },
    { label: 'Perangkat Absensi', icon: Fingerprint, route: 'perangkat-absensi' },
    { label: 'User', icon: Users, route: 'user' },
    { label: 'Atribut', icon: Tag, route: 'atribut' },
    {
        label: 'Setting Jadwal Kerja',
        icon: CalendarClock,
        children: [
            { label: 'Jadwal Kerja', route: 'jadwal-kerja' },
            { label: 'Hari Libur', route: 'hari-libur' },
        ],
    },
    {
        label: 'Pengajuan',
        icon: FileText,
        children: [
            { label: 'Izin', route: 'pengajuan.izin' },
            { label: 'Cuti', route: 'pengajuan.cuti' },
            { label: 'Lembur', route: 'pengajuan.lembur' },
        ],
    },
    { label: 'Riwayat Kehadiran', icon: History, route: 'riwayat-kehadiran' },
    {
        label: 'Laporan',
        icon: FileText,
        children: [
            { label: 'Laporan Harian', route: 'laporan.harian' },
            { label: 'Laporan Bulanan', route: 'laporan.bulanan' },
        ],
    },
    { label: 'Log Sistem', icon: ScrollText, route: 'log-sistem' },
];

function NavItem({ item, current }) {
    const childActive =
        item.children?.some((child) => current(child.route)) ?? false;
    const [open, setOpen] = useState(childActive);
    const Icon = item.icon;
    const isActive = item.route && current(item.route);

    if (item.children) {
        return (
            <div>
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        childActive
                            ? 'text-brand-700 dark:text-brand-300'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                    }`}
                >
                    <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 shrink-0" />
                        {item.label}
                    </span>
                    <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                </button>
                {open && (
                    <div className="ms-8 mt-1 space-y-1 border-s border-gray-200 ps-3 dark:border-gray-700">
                        {item.children.map((child) => (
                            <Link
                                key={child.route}
                                href={route(child.route)}
                                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition ${
                                    current(child.route)
                                        ? 'font-medium text-brand-700 dark:text-brand-300'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-200'
                                }`}
                            >
                                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                                {child.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    const Comp = item.route ? Link : 'a';
    const props = item.route
        ? { href: route(item.route) }
        : { href: '#' };

    return (
        <Comp
            {...props}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
            }`}
        >
            <Icon className="h-5 w-5 shrink-0" />
            {item.label}
        </Comp>
    );
}

function SidebarContent({ current, tenant }) {
    return (
        <>
            <div className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-100 px-5 dark:border-gray-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                    MK
                </div>
                <div className="leading-tight">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                        MKP Secure Presence
                    </p>
                    <p className="text-xs text-gray-400">{tenant}</p>
                </div>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                {NAV_ITEMS.map((item) => (
                    <NavItem key={item.label} item={item} current={current} />
                ))}
            </nav>
        </>
    );
}

export default function AdminLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [mobileOpen, setMobileOpen] = useState(false);
    const current = (name) => route().current(name);

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Desktop sidebar */}
            <aside className="hidden w-64 shrink-0 flex-col border-e border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 lg:flex">
                <SidebarContent current={current} tenant="JMI" />
            </aside>

            {/* Mobile sidebar */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 flex lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/40"
                        onClick={() => setMobileOpen(false)}
                    />
                    <aside className="relative flex w-64 flex-col bg-white dark:bg-gray-800">
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute end-3 top-3 rounded-md p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <SidebarContent current={current} tenant="JMI" />
                    </aside>
                </div>
            )}

            <div className="flex min-w-0 flex-1 flex-col">
                {/* Topbar */}
                <header className="flex h-16 shrink-0 items-center justify-between bg-brand-600 px-4 shadow-sm sm:px-6">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="rounded-md p-1.5 text-white/90 hover:bg-white/10 lg:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <h1 className="text-lg font-semibold text-white">
                            {header ?? 'MKP Secure Presence'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="rounded-full p-2 text-white/90 hover:bg-white/10">
                            <Bell className="h-5 w-5" />
                        </button>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25">
                                    <UserCircle className="h-6 w-6" />
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <div className="border-b border-gray-100 px-4 py-2 text-sm dark:border-gray-700">
                                    <p className="font-medium text-gray-800 dark:text-gray-100">
                                        {user.name}
                                    </p>
                                    <p className="truncate text-xs text-gray-400">
                                        {user.email}
                                    </p>
                                </div>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
