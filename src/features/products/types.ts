import { Product, Products } from './schema';

export type ProductListProps = {
  products: Products[];
  isLoading: boolean;
  isFetched: boolean;
  isFetching: boolean;
};
export type TableMeta = {
  pageIndex: number;
};

export type ProductListResponse = {
  data: Product[];
  total: number;
};
