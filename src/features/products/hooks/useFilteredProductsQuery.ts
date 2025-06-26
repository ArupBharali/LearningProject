import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { fetchFilteredProducts } from '../api';

type Filters = Record<string, string>;

export function useFilteredProductsQuery(page: number,pageSize: number, filters: Filters) {
  return useQuery({
    queryKey: ['filtered-products', page, pageSize, filters],
    queryFn: () => fetchFilteredProducts(page,pageSize,filters),
    keepPreviousData: true,
});
}