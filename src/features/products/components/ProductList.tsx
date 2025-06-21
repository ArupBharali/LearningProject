"use client";

import { useProducts } from "@/features/products/hooks/useProducts";
import { EditableProductRow } from "@/features/products/components/EditableProductRow";

export function ProductList() {
  const {
    data: products,
    isLoading,
    isFetched,
    isFetching,
    status,
  } = useProducts();

  console.log("isLoading?", isLoading); // true if it's from cache or network
  console.log("isFetched?", isFetched); // true if it's from cache or network
  console.log("isFetching?", isFetching); // true if it's from cache or network
  console.log("Status:", status); // 'success', 'loading', etc.

  if (isLoading) return <p className="text-gray-600">Loading products…</p>;

  return (
    <ul className="list-none p-0 m-0">
      {products?.map((p) => (
        <li key={p.id} className="mb-4">
          <EditableProductRow product={p} />
        </li>
      ))}
    </ul>
  );
}
