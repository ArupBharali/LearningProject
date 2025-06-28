'use client';

import { useProductsQuery } from '@/features/products/hooks/useProductsQuery';
import { EditableProductRow } from '@/features/products/components/EditableProductRow';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { Pagination } from '@/shared/components/Pagination';
import { useState, useMemo, useEffect } from 'react';
import { Spinner } from '@/shared/components/ui/Spinner';

const PAGE_SIZE = 50;
const ROW_HEIGHT = 70;

export function ProductList() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('✅ ProductList rendered on client', page, PAGE_SIZE);
  }, [page]);

  const { data, isLoading } = useProductsQuery(page, PAGE_SIZE);

  const products = data?.data ?? [];
  const totalProductsCount = data?.total ?? 0;
  const totalPages = products ? Math.ceil(totalProductsCount / PAGE_SIZE) : 0;

  const Row = ({ index, style }: ListChildComponentProps) => {
    const product = products[index];
    const serial = (page - 1) * PAGE_SIZE + index + 1;

    return product ? (
      <div
        style={style}
        className="transition-colors duration-300"
      >
        <EditableProductRow product={product} serial={serial} />
      </div>
    ) : null;
  };

  if (isLoading)
    return (
      <div className="flex justify-center py-6">
        <Spinner />
      </div>
    );

  if (!products || products.length === 0)
    return (
      <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
        No products found
      </p>
    );

  return (
    <div className="transition-colors duration-300">
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      <div className="mt-4 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <List
          height={400}
          itemCount={products.length}
          itemSize={ROW_HEIGHT}
          width="100%"
        >
          {Row}
        </List>
      </div>
    </div>
  );
}
