<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Shop\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class,'get_home_data'])->name('home');


Route::get('/products/{slug}', [HomeController::class,'show_detail'])->name('detail');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');


    Route::get('/dashboard/products',[ProductController::class,'list_products'] )->name('dashboard.products.index');
    Route::post('/dashboard/products',[ProductController::class,'save_product'] )->name('dashboard.products.save');


    Route::get('/dashboard/categories',[CategoryController::class,'list_categories'] )->name('dashboard.categories.index');
    Route::post('/dashboard/categories', [CategoryController::class,'save_category'])->name('dashboard.categories.save');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
