<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FormController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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


// Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

// Route::resource('events', EventController::class)
//     ->only(['index', 'store'])
//     ->middleware(['auth', 'verified']);


Route::get('/event', [FormController::class, 'index'])->name('events.index');
Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
Route::post('/events', [FormController::class, 'store'])->name('events.store');
Route::get('/events/', [FormController::class, 'show'])->name('events.show');
Route::get('/events/{event}/edit', [EventController::class, 'edit'])->name('events.edit');
Route::put('/events/{event}', [EventController::class, 'update'])->name('events.update');
Route::delete('/events/{event}', [EventController::class, 'destroy'])->name('events.destroy');


// Route::get('/cities', [CityController::class, 'index'])->name('cities.index');
// Route::get('/cities/create', [CityController::class, 'create'])->name('cities.create');
// Route::post('/cities', [CityController::class, 'store'])->name('cities.store');
// Route::get('/cities/{city}', [CityController::class, 'show'])->name('cities.show');
// Route::get('/cities/{city}/edit', [CityController::class, 'edit'])->name('cities.edit');
// Route::put('/cities/{city}', [CityController::class, 'update'])->name('cities.update');
// Route::delete('/cities/{city}', [CityController::class, 'destroy'])->name('cities.destroy');


// Route::get('/spots', [SpotController::class, 'index'])->name('spots.index');
// Route::get('/spots/create', [SpotController::class, 'create'])->name('spots.create');
// Route::post('/spots', [SpotController::class, 'store'])->name('spots.store');
// Route::get('/spots/{spot}', [SpotController::class, 'show'])->name('spots.show');
// Route::get('/spots/{spot}/edit', [SpotController::class, 'edit'])->name('spots.edit');
// Route::put('/spots/{spot}', [SpotController::class, 'update'])->name('spots.update');
// Route::delete('/spots/{spot}', [SpotController::class, 'destroy'])->name('spots.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
