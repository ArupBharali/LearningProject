import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProducts } from '@/features/products/api';
import { useEffect } from 'react';
import { ProductsApiResponse } from '../schema';

export function useProductsQuery(page: number, pageSize: number) {
  // console.log('src/features/products/hooks/useProductsQuery', page, pageSize);

  const query = useQuery<ProductsApiResponse>({
    queryKey: ['products', page, pageSize],
    queryFn: () => fetchProducts(page, pageSize),
    placeholderData: (previousData) => previousData
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    // const cached = queryClient.getQueryData(['products', page, pageSize]);
    // console.log('src/features/products/hooks/useProductsQuery/useProductsQuery/useEffect Is it cached? products', !!cached);

    queryClient.getQueryCache().getAll();
    // .forEach((q) => {
    //   // console.log('src/features/products/hooks/useProductsQuery/useProductsQuery/useEffect Cached key:', q.queryKey);
    // });
  }, [queryClient, query.dataUpdatedAt, page, pageSize]);

  return query;
}
