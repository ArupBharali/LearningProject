import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/api";
import { useEffect } from "react";

export function useProductsQuery(page: number, pageSize: number) {
  console.log('useProductsQuery',page,pageSize);
  
  const query = useQuery({
    queryKey: ["products", page, pageSize],
    queryFn: () => fetchProducts(page,pageSize),
    keepPreviousData: true,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const cached = queryClient.getQueryData(["products",page,pageSize]);
    console.log("Is it cached? products", !!cached);

    queryClient
      .getQueryCache()
      .getAll()
      .forEach((q) => {
        console.log("Cached key:", q.queryKey);
      });
  }, [queryClient, query.dataUpdatedAt]);

  return query;
}
