<?php

// app/Http/Controllers/CarouselController.php
namespace App\Http\Controllers;

use App\Http\Resources\CarouselResource;
use App\Services\CarouselService;
use App\Models\CarouselSlide;
use Inertia\Inertia;

class CarouselController extends Controller
{
    public function __construct(protected CarouselService $carouselService) {}

    public function index()
    {
       // $slides = $this->carouselService->getActiveSlides();
        $slides = CarouselSlide::active()->orderBy('order')->get();
        return Inertia::render('Home', [
            'carouselSlides' => CarouselResource::collection($slides)
        ]);
    }

    public function apiIndex()
    {
        $slides = $this->carouselService->getActiveSlides();
        return CarouselResource::collection($slides);
    }
}
