import { CategoryItem } from './categories';

export interface SimilarProduct {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviewCount: number;
    image: string;
}
export interface CreateProductItem {
    name: string;
    slug: string;
    category_id: string | number;
    price: number;
    original_price: number;
    description: string;
    features: string | string[];
    image: File | null;
    images: File[] | null;
    colors: string | string[];
    is_featured: boolean;
}
export interface ProductItem {
    id: number;
    name: string;
    slug: string;
    category: CategoryItem;
    price: number;
    original_price: number;
    description: string;
    features: string;
    image: string | null;
    images: string | null;
    colors: string;
    is_featured: boolean;
    in_stock: boolean;
}
