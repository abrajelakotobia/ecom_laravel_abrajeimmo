import { ReactNode } from 'react';

// The main column definition interface
export interface Column<T> {
    header: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    accessorKey: keyof T | ((row: T) => any);
    cell?: (row: T) => ReactNode;
}

// Sample item interface
export interface BriefItemDTO {
    id: string;
    name: string;
    slug: string;
    sellingPrice: number;
    costPrice: number;
    salesCount: number;
    salesTotal: number;
    createdAt: Date;
    thumbnail: string | null;
}
