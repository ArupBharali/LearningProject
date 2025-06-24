"use client";

import { useProducts } from "@/features/products/hooks/useProducts";
import { EditableProductRow } from "@/features/products/components/EditableProductRow";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { Pagination } from "@/shared/components/Pagination";
import { useState, useMemo } from "react";
import { Spinner } from "@/shared/components/ui/Spinner";
import { ProductListProps } from "../types";

const PAGE_SIZE = 50;
const ROW_HEIGHT = 70; // or whatever fits your layout


export function ProductList({products, isLoading, isFetched, isFetching} : ProductListProps) {
  
  const [page, setPage] = useState(1);
  const totalPages = products ? Math.ceil(products.length / PAGE_SIZE) : 0;

  const paginatedProducts = useMemo(() => {
    if (!products) return [];
    const start = (page - 1) * PAGE_SIZE;
    return products.slice(start, start + PAGE_SIZE);
  }, [products, page]);

  console.log("isLoading?", isLoading);
  console.log("isFetched?", isFetched);
  console.log("isFetching?", isFetching);
  console.log("Status:", status);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const user = paginatedProducts[index];
    const serial = (page - 1) * PAGE_SIZE + index + 1;

    return user ? (
      <div style={style}>
        <EditableProductRow product={user} serial={serial} />
      </div>
    ) : null;
  };

  if (isLoading)
    return (
      <div className="flex justify-center py-6">
        <Spinner />
      </div>
    );
  if (!products || products.length === 0) return <p>No Users found</p>;

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      <List
        height={400}
        itemCount={paginatedProducts?.length}
        itemSize={ROW_HEIGHT}
        width="100%"
      >
        {Row}
      </List>
    </>
  );
}
