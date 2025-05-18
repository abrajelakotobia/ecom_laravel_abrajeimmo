<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class CarouselSlide extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'button_text',
        'button_link',
        'image_path',
        'mobile_image_path',
        'text_color',
        'overlay_color',
        'alignment',
        'badge',
        'price',
        'original_price',
        'discount',
        'is_active'
    ];

    protected function discountPercentage(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->discount ? "{$this->discount}%" : '0%'
        );
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
