import ProductsDataTable from '@/components/dashboard/ProductsDataTable';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { CategoryItem } from '@/types/categories';
import { ProductItem } from '@/types/products';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/dashboard/products',
    },
];

export default function Products({ categories, products }: { categories: CategoryItem[]; products: ProductItem[] }) {
    const data = products.map((item) => {
        return {
            id: item.id,
            name: item.name,
            category: item.category,
            salesCount: 0,
            image: item.images[0],
            stock: 0,
            price: item.price,
            status: item.in_stock ? 'in-stock' : 'out-stock',
        };
    });
    console.log(data);
    const categoryOptions = categories.map((item) => {
        return {
            label: item.name,
            value: item.id,
        };
    });
    console.log(products);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductsDataTable products={data} categories={categoryOptions} />
            </div>
        </AppLayout>
    );
}
