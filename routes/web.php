<?php

use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

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
});

Route::get('/bonjour', function(){
    $utilisateurs = [
        ['id' => 1, 'nom'=>'jean', 'age'=>2],
        ['id' => 2, 'nom'=>'paul', 'age'=>3],
        ['id' => 3, 'nom'=>'anne', 'age'=>34]
    ];
    return Inertia::render('Bonjour', ['utilisateurs' => $utilisateurs]);
});

Route::get('/mapage', function(){
    return Inertia::render('Mapage');
})->middleware('auth');

Route::get('/produits', [ProduitController::class, 'index'])->name('produits.index');
Route::get('/produits/create', [ProduitController::class,'create'])->name('produits.create');
Route::post('/produits', [ProduitController::class, 'store'])->name('produits.store');
Route::get('produits/{id}/edit', [ProduitController::class, 'edit'])->name('produits.edit');
Route::put('produits/{id}', [ProduitController::class, 'update'])->name('produits.update');
Route::delete('produits/{id}', [ProduitController::class, 'destroy'])->name('produits.destroy');

require __DIR__.'/auth.php';
