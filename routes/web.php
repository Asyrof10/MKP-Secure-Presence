<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/organisasi', fn () => Inertia::render('Organisasi/Index'))->name('organisasi');
    Route::get('/perangkat-absensi', fn () => Inertia::render('PerangkatAbsensi/Index'))->name('perangkat-absensi');
    Route::get('/user', fn () => Inertia::render('User/Index'))->name('user');
    Route::get('/atribut', fn () => Inertia::render('Atribut/Index'))->name('atribut');
    Route::get('/jadwal-kerja', fn () => Inertia::render('JadwalKerja/Index'))->name('jadwal-kerja');
    Route::get('/hari-libur', fn () => Inertia::render('HariLibur/Index'))->name('hari-libur');
    Route::get('/pengajuan/izin', fn () => Inertia::render('Pengajuan/Izin'))->name('pengajuan.izin');
    Route::get('/pengajuan/cuti', fn () => Inertia::render('Pengajuan/Cuti'))->name('pengajuan.cuti');
    Route::get('/pengajuan/lembur', fn () => Inertia::render('Pengajuan/Lembur'))->name('pengajuan.lembur');
    Route::get('/riwayat-kehadiran', fn () => Inertia::render('RiwayatKehadiran/Index'))->name('riwayat-kehadiran');
    Route::get('/laporan/harian', fn () => Inertia::render('Laporan/Harian'))->name('laporan.harian');
    Route::get('/laporan/bulanan', fn () => Inertia::render('Laporan/Bulanan'))->name('laporan.bulanan');
    Route::get('/log-sistem', fn () => Inertia::render('LogSistem/Index'))->name('log-sistem');
});

require __DIR__.'/auth.php';
