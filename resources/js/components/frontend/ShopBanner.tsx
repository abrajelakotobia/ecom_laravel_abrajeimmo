import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

import { JSX, useCallback, useEffect, useRef, useState } from 'react';

// Enhanced types for carousel data
interface CarouselSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    secondaryButtonText?: string;
    buttonLink: string;
    secondaryButtonLink?: string;
    imageSrc: string;
    mobileImageSrc?: string;
    textColor: string;
    overlayColor: string;
    alignment?: 'left' | 'right' | 'center';
    badge?: string;
    price?: string;
    originalPrice?: string;
    discount?: number;
}

// Enhanced carousel data with more premium features
const carouselData: CarouselSlide[] = [
    {
        id: 1,
        title: 'Our Newest & Trendy Shoes Collection',
        subtitle: 'Discover Your Own Shoes',
        description:
            'Step into style with our latest footwear designs. Premium comfort meets contemporary fashion. Handcrafted with the finest materials for lasting quality.',
        buttonText: 'Shop Collection',
        secondaryButtonText: 'View Lookbook',
        buttonLink: '/collections/shoes',
        secondaryButtonLink: '/lookbooks/shoes-2025',
        imageSrc:
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
        textColor: 'text-gray-900',
        overlayColor: 'from-white/80 to-white/40',
        alignment: 'left',
        badge: 'NEW ARRIVAL',
        price: '$299',
        originalPrice: '$399',
        discount: 25,
    },
    {
        id: 2,
        title: 'Elegant Watches For Every Occasion',
        subtitle: 'Timeless Elegance',
        description:
            'Precision craftsmanship and sophisticated design. Our watches make a statement without saying a word. Each timepiece represents generations of watchmaking expertise.',
        buttonText: 'View Collection',
        secondaryButtonText: 'Learn More',
        buttonLink: '/collections/watches',
        secondaryButtonLink: '/about/craftsmanship',
        imageSrc:
            'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        textColor: 'text-gray-900',
        overlayColor: 'from-gray-100/80 to-gray-50/60',
        alignment: 'right',
        badge: 'PREMIUM',
        price: '$1,299',
        originalPrice: '$1,499',
        discount: 13,
    },
    {
        id: 3,
        title: 'Premium Bags & Accessories',
        subtitle: 'Carry Your Style',
        description:
            'Handcrafted with premium materials. Our bags combine functionality with uncompromising style. Designed for those who appreciate the finest details and superior quality.',
        buttonText: 'Explore Collection',
        secondaryButtonText: 'View Materials',
        buttonLink: '/collections/bags',
        secondaryButtonLink: '/materials/premium-leather',
        imageSrc:
            'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        textColor: 'text-gray-900',
        overlayColor: 'from-amber-50/70 to-white/40',
        alignment: 'left',
        badge: 'EXCLUSIVE',
        price: '$899',
        originalPrice: '$1,199',
        discount: 25,
    },
];

export default function ShopBanner(): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const slideCount: number = carouselData.length;
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const progressRef = useRef<NodeJS.Timeout | null>(null);
    const slideDuration = 8000; // 8 seconds per slide
    const animationDuration = 700; // 700ms for transitions
    // Navigation functions
    const goToSlide = useCallback(
        (index: number): void => {
            if (isAnimating) return;
            setIsAnimating(true);
            setCurrentSlide(index);
            setTimeout(() => setIsAnimating(false), animationDuration);
        },
        [isAnimating],
    );
    // Reset timer when slide changes
    useEffect(() => {
        setProgress(0);

        if (progressRef.current) {
            clearInterval(progressRef.current);
        }

        if (!isHovering) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        return 0;
                    }
                    return prev + 100 / (slideDuration / 100);
                });
            }, 100);

            progressRef.current = interval;
        }

        return () => {
            if (progressRef.current) {
                clearInterval(progressRef.current);
            }
        };
    }, [currentSlide, isHovering, slideDuration]);
    const goToNextSlide = useCallback((): void => {
        const newIndex = (currentSlide + 1) % slideCount;
        goToSlide(newIndex);
    }, [currentSlide, goToSlide, slideCount]);
    // Auto-advance the carousel
    useEffect(() => {
        if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current);
        }

        if (!isHovering && !isAnimating) {
            autoPlayRef.current = setTimeout(() => {
                goToNextSlide();
            }, slideDuration);
        }

        return () => {
            if (autoPlayRef.current) {
                clearTimeout(autoPlayRef.current);
            }
        };
    }, [currentSlide, goToNextSlide, isAnimating, isHovering]);

    const goToPrevSlide = useCallback((): void => {
        const newIndex = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(newIndex);
    }, [currentSlide, goToSlide, slideCount]);

    return (
        <section
            className="relative mt-8 h-screen max-h-[400px] min-h-[100px] w-full overflow-hidden rounded-2xl border-2 border-gray-300 shadow"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Full-width image carousel */}
            <div className="absolute inset-0 h-full w-full">
                {carouselData.map((slide: CarouselSlide, index: number) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 h-full w-full transition-all duration-700 ease-in-out ${
                            currentSlide === index ? 'z-10 scale-100 transform opacity-100' : 'z-0 scale-105 transform opacity-0'
                        }`}
                    >
                        {/* Full-width background image */}
                        <div className="absolute inset-0 h-full w-full">
                            <img src={slide.imageSrc} alt={`${slide.title}`} className="object-cover" sizes="100vw" />

                            {/* Enhanced gradient overlay for better text readability */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor} backdrop-blur-[2px]`}></div>
                        </div>

                        {/* Content container */}
                        <div className="relative z-10 h-full w-full">
                            <div className="container mx-auto flex h-full items-center px-4 md:px-8">
                                {/* Text content with dynamic positioning */}
                                <div
                                    className={`w-full max-w-xl lg:w-1/2 ${
                                        slide.alignment === 'right'
                                            ? 'mr-0 ml-auto'
                                            : slide.alignment === 'center'
                                              ? 'mx-auto text-center'
                                              : 'mr-auto ml-0'
                                    }`}
                                >
                                    <div className="rounded-2xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-sm md:p-8 lg:p-10">
                                        {/* Title */}
                                        <h2 className={`mb-4 text-3xl leading-tight font-bold md:text-4xl ${slide.textColor}`}>{slide.title}</h2>

                                        {/* Description */}
                                        <p className={`mb-6 text-base md:mb-8 md:text-lg ${slide.textColor.replace('900', '700')}`}>
                                            {slide.description}
                                        </p>

                                        {/* Price display if available */}
                                        {slide.price && (
                                            <div className="mb-6 inline-block rounded-lg bg-black/10 px-4 py-2 backdrop-blur-sm">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl font-bold text-gray-900">{slide.price}</span>
                                                    {slide.originalPrice && (
                                                        <span className="text-base text-gray-500 line-through">{slide.originalPrice}</span>
                                                    )}
                                                    {slide.discount && (
                                                        <span className="rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                                                            SAVE {slide.discount}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <Button
                                                asChild
                                                className="flex h-12 cursor-pointer items-center rounded-full bg-blue-700 px-8 py-2 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl"
                                            >
                                                <Link href={slide.buttonLink}>
                                                    <ShoppingBag className="mr-2 h-4 w-4" />
                                                    {slide.buttonText}
                                                </Link>
                                            </Button>

                                            {slide.secondaryButtonText && slide.secondaryButtonLink && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="flex h-12 cursor-pointer items-center rounded-full border-gray-400 bg-white/50 px-6 py-2 text-base font-medium text-gray-800 transition-all duration-300 hover:bg-white/80"
                                                >
                                                    <Link href={slide.secondaryButtonLink}>
                                                        {slide.secondaryButtonText}
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced navigation arrows */}
            <button
                onClick={goToPrevSlide}
                className="absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer rounded-full border border-white/60 bg-white/30 p-3 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none md:left-8 md:p-4"
                aria-label="Previous slide"
                type="button"
            >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer rounded-full border border-white/60 bg-white/30 p-3 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none md:right-8 md:p-4"
                aria-label="Next slide"
                type="button"
            >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Enhanced slide indicators with progress */}
            <div className="absolute right-0 bottom-8 left-0 z-20 flex justify-center px-4">
                <div className="flex items-center gap-4 rounded-full border border-white/20 bg-black/20 px-4 py-3 shadow-lg backdrop-blur-md">
                    {/* Slide counter */}
                    <div className="text-sm font-medium text-white">
                        <span className="text-base font-bold">{currentSlide + 1}</span>
                        <span className="mx-1">/</span>
                        <span>{slideCount}</span>
                    </div>

                    {/* Slide indicators */}
                    <div className="flex space-x-3">
                        {carouselData.map((_: CarouselSlide, index: number) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 cursor-pointer rounded-full transition-all duration-300 focus:outline-none ${
                                    currentSlide === index ? 'w-8 bg-blue-600' : 'w-2 bg-white/50 hover:bg-white/80'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={currentSlide === index ? 'true' : 'false'}
                                type="button"
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 w-24 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full rounded-full bg-blue-600 transition-all ease-linear" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
