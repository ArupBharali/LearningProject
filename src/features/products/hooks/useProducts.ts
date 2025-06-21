import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/api";
import { useEffect } from "react";

export function useProducts() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const cached = queryClient.getQueryData(["products"]);
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
