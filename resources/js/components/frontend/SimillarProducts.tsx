import { ProductItem } from '@/types/products';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SimilarProducts({ similarProducts }: { similarProducts: ProductItem[] }) {
    return (
        <div className="mt-16">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Similar Products</h2>
                <div className="flex space-x-2">
                    <button className="rounded-full border border-gray-300 p-2 transition-all duration-200 hover:bg-gray-50">
                        <ChevronLeft className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="rounded-full border border-gray-300 p-2 transition-all duration-200 hover:bg-gray-50">
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {similarProducts.map((product) => (
                    <Link href={`/products/${product.slug}`} key={product.id} className="group block">
                        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src={`/storage/${product.images?.[0] ?? 'default-image.jpg'}`}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>

                            <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
