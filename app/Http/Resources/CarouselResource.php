<?php
// app/Http/Resources/CarouselResource.php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarouselResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'imageSrc' => asset('storage/' . $this->image_path),
            'mobileImageSrc' => $this->mobile_image_path ? asset('storage/' . $this->mobile_image_path) : null,
            'buttonLink' => $this->button_link,
            'price' => $this->price ? '$' . number_format($this->price, 2) : null,
            'discountPercentage' => $this->discount ? "{$this->discount}%" : null,
            // ... autres champs
        ];
    }
}
