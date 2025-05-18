<?php

namespace Database\Seeders;

use App\Models\CarouselSlide;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CarouselSlideSeeder extends Seeder
{
    public function run()
    {
        // Nettoyer le dossier storage/app/public/carousel
        Storage::deleteDirectory('public/carousel');
        Storage::makeDirectory('public/carousel');

        $slides = [
            [
                'title' => 'Nouvelle Collection Printemps 2024',
                'subtitle' => 'Découvrez les dernières tendances',
                'description' => 'Des pièces uniques pour votre garde-robe printanière. Matières légères et coupes modernes pour un style impeccable.',
                'button_text' => 'Voir la collection',
                'button_link' => '/collections/printemps-2024',
                'image_path' => $this->storeImage('carousel1.jpg', 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'),
                'mobile_image_path' => $this->storeImage('carousel1-mobile.jpg', 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'),
                'text_color' => 'text-gray-900',
                'overlay_color' => 'from-white/80 to-white/40',
                'alignment' => 'left',
                'badge' => 'NOUVEAUTÉ',
                'price' => 129.99,
                'original_price' => 159.99,
                'discount' => 19,
                'is_active' => true,
            ],
            [
                'title' => 'Équipement Sportif Professionnel',
                'subtitle' => 'Performance et qualité supérieure',
                'description' => 'Optimisez vos performances avec notre gamme d\'équipements conçus pour les athlètes exigeants.',
                'button_text' => 'Acheter maintenant',
                'button_link' => '/categories/sport',
                'image_path' => $this->storeImage('carousel2.jpg', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'),
                'mobile_image_path' => $this->storeImage('carousel2-mobile.jpg', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'),
                'text_color' => 'text-white',
                'overlay_color' => 'from-black/60 to-black/30',
                'alignment' => 'right',
                'badge' => 'LIMITÉ',
                'price' => 89.99,
                'original_price' => 120.00,
                'discount' => 25,
                'is_active' => true,
            ],
            [
                'title' => 'Technologie Innovante',
                'subtitle' => 'Découvrez nos derniers gadgets',
                'description' => 'Restez à la pointe de la technologie avec nos produits high-tech dernier cri.',
                'button_text' => 'Explorer',
                'button_link' => '/categories/technologie',
                'image_path' => $this->storeImage('carousel3.jpg', 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'),
                'mobile_image_path' => $this->storeImage('carousel3-mobile.jpg', 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'),
                'text_color' => 'text-gray-900',
                'overlay_color' => 'from-blue-50/80 to-white/40',
                'alignment' => 'center',
                'badge' => 'TENDANCE',
                'price' => 299.99,
                'is_active' => true,
            ]
        ];

        foreach ($slides as $slide) {
            CarouselSlide::create($slide);
        }
    }

    /**
     * Télécharge et stocke une image depuis une URL
     */
    private function storeImage(string $filename, string $url): string
    {
        try {
            $contents = file_get_contents($url);
            $path = 'carousel/' . $filename;
            Storage::put('public/' . $path, $contents);
            return $path;
        } catch (\Exception $e) {
            // En cas d'erreur, utiliser une image par défaut
            return 'carousel/default.jpg';
        }
    }
}
