<?php
// app/Services/CarouselService.php
namespace App\Services;

use App\Models\CarouselSlide;

class CarouselService
{
    public function getActiveSlides()
    {
        return CarouselSlide::active()->orderBy('created_at', 'desc')->get();
    }

    public function getSlideById($id)
    {
        return CarouselSlide::findOrFail($id);
    }
}
