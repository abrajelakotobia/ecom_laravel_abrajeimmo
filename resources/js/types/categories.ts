export interface CategoryItem {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    color: string;
}
export interface CreateCategoryItem {
    name: string;
    slug: string;
    image: File | null;
    description: string;
    color: string;
}
