// resources/js/Components/ShopBanner.jsx
import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export default function ShopBanner({ carouselSlides }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(goToNext, 8000);
        return () => clearInterval(interval);
    }, [isHovering, carouselSlides.length]);

    if (!carouselSlides.length) return null;

    const slide = carouselSlides[currentSlide];

    return (
        <section
            className="relative h-[400px] md:h-[600px] w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Head title={slide.title} />

            {/* Slide Image */}
            <div className="absolute inset-0">
                <img
                    src={slide.imageSrc}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl bg-white/80 p-6 rounded-lg backdrop-blur-sm">
                        <h2 className="text-3xl font-bold">{slide.title}</h2>
                        <p className="my-4">{slide.description}</p>
                        <Link
                            href={slide.buttonLink}
                            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            <ShoppingBag className="mr-2" />
                            {slide.buttonText}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2">
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2">
                <ChevronRight className="h-8 w-8" />
            </button>
        </section>
    );
}
