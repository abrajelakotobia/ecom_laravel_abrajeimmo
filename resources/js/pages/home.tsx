import ProductListing from '@/components/frontend/ProductListing';
import ShopBanner from '@/components/frontend/ShopBanner';
import ShopCategories from '@/components/frontend/ShopCategories';
import ShopFrontLayout from '@/layouts/shop-front-layout';
import { CategoryItem } from '@/types/categories';
import { ProductItem } from '@/types/products';


export default function home({ categories, products }: { categories: CategoryItem[]; products: ProductItem[] }) {
    console.log(products);

    // Define carouselSlides with sample data or fetch from props/api as needed


    return (
        <ShopFrontLayout>
            <div className="min-h-screen">
                <div className="container mx-auto max-w-6xl">

                    <ShopBanner />
                    <div className="py-16">
                        <ShopCategories categories={categories} />
                    </div>
                    <div className="py-8">
                        <ProductListing products={products} />
                    </div>
                </div>
            </div>
        </ShopFrontLayout>
    );
}
