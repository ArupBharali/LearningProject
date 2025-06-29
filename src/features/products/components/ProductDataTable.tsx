import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/shared/components/ui/DataTable';
import { Product } from '../schema';
import { ProductListProps } from '../types';
import { Pagination } from '@/shared/components/Pagination';
import { useEffect, useMemo, useState } from 'react';
import { useDebouncedValue } from '@/shared/hooks/useDebouncedValue';
import { useFilteredProductsQuery } from '@/features/products/hooks/useFilteredProductsQuery';

export const productColumns: ColumnDef<Product>[] = [
  {
    id: 'slno',
    header: 'SlNo',
    size: 70,
    cell: (info) =>
      (info.table.options.meta?.pageIndex ?? 0) * PAGE_SIZE +
      info.row.index +
      1, // this is 0-based within current page
  },
  {
    accessorKey: 'title',
    header: 'Product',
    size: 200,
    minSize: 100,
    maxSize: 300,
    enableColumnFilter: true,
  },
  { accessorKey: 'slug', header: 'Slug', size: 200, enableColumnFilter: true },
  {
    accessorKey: 'price',
    header: 'Price ($)',
    cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
    size: 120,
    enableColumnFilter: true,
    filterFn: (row, columnId, filterValue) => {
      const val = row.getValue<number>(columnId);
      const input = Number(filterValue);
      return !isNaN(input) && val.toString().includes(input.toString());
    },
  },
  {
    accessorKey: 'discountPercentage',
    header: 'Discount (%)',
    cell: (info) => `${info.getValue<number>().toFixed(1)}%`,
    size: 150,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'inventory',
    header: 'Stock',
    size: 100,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    size: 120,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'subcategory',
    header: 'Subcategory',
    size: 150,
    enableColumnFilter: true,
  },
  { accessorKey: 'sku', header: 'SKU', size: 150, enableColumnFilter: true },
  {
    accessorKey: 'brand',
    header: 'Brand',
    size: 150,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    cell: (info) => `${info.getValue<number>().toFixed(1)} ★`,
    size: 100,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
    cell: (info) => (info.getValue() ? '✅' : '❌'),
    size: 100,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'featured',
    header: 'Featured',
    cell: (info) => (info.getValue() ? '🌟' : '—'),
    size: 120,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created',
    cell: (info) => new Date(info.getValue<string>()).toLocaleDateString(),
    size: 120,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
    size: 150,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated',
    cell: (info) => new Date(info.getValue<string>()).toLocaleDateString(),
    size: 120,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'updatedBy',
    header: 'Updated By',
    size: 150,
    enableColumnFilter: true,
  },
];

const PAGE_SIZE = 20;
const ROW_HEIGHT = 70; // or whatever fits your layout

export default function ProductDataTable() {
  const [page, setPage] = useState(1);
  useEffect(() => {
    // console.log('src/features/products/components/ProductDataTable ✅ ProductList rendered on client', page, PAGE_SIZE);
  }, [page]);

  const [filters, setFilters] = useState<Record<string, string>>({});
  const debouncedFilters = useDebouncedValue(filters, 300);
  const { data, isLoading } = useFilteredProductsQuery(
    page,
    PAGE_SIZE,
    debouncedFilters
  );

  const products = data?.data ?? [];
  const totalProductsCount = data?.total ?? 0;
  const totalPages = products ? Math.ceil(totalProductsCount / PAGE_SIZE) : 0;

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <DataTable
        data={products}
        columns={productColumns}
        page={page}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}
