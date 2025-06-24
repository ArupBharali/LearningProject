import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/shared/components/ui/DataTable';
import { Product } from '../schema';
import { ProductListProps } from '../types';
import { Pagination } from '@/shared/components/Pagination';
import { useMemo,useState } from 'react';

export const productColumns: ColumnDef<Product>[] = [
  { accessorKey: 'title', header: 'Product' },
  { accessorKey: 'slug', header: 'Slug' },
  {
    accessorKey: 'price',
    header: 'Price ($)',
    cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: 'discountPercentage',
    header: 'Discount (%)',
    cell: (info) => `${info.getValue<number>().toFixed(1)}%`,
  },
  { accessorKey: 'inventory', header: 'Stock' },
  { accessorKey: 'category', header: 'Category' },
  { accessorKey: 'subcategory', header: 'Subcategory' },
  { accessorKey: 'sku', header: 'SKU' },
  { accessorKey: 'brand', header: 'Brand' },
  {
    accessorKey: 'rating',
    header: 'Rating',
    cell: (info) => `${info.getValue<number>().toFixed(1)} ★`,
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
    cell: (info) => (info.getValue() ? '✅' : '❌'),
  },
  {
    accessorKey: 'featured',
    header: 'Featured',
    cell: (info) => (info.getValue() ? '🌟' : '—'),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created',
    cell: (info) => new Date(info.getValue<string>()).toLocaleDateString(),
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated',
    cell: (info) => new Date(info.getValue<string>()).toLocaleDateString(),
  },
  {
    accessorKey: 'updatedBy',
    header: 'Updated By',
  },
];

const PAGE_SIZE = 50;
const ROW_HEIGHT = 70; // or whatever fits your layout

export default function ProductDataTable({
  products,
  isLoading,
  isFetched,
  isFetching,
}: ProductListProps) {
  const [page, setPage] = useState(1);
  const totalPages = products ? Math.ceil(products.length / PAGE_SIZE) : 0;

  const paginatedProducts = useMemo(() => {
    if (!products) return [];
    const start = (page - 1) * PAGE_SIZE;
    return products.slice(start, start + PAGE_SIZE);
  }, [products, page]);

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <DataTable data={paginatedProducts} columns={productColumns} />
    </>
  );
}


