"use client";

import { useTransition, useEffect, useState } from "react";
import { ProductList } from "@/features/products/components/ProductList";
import { ProductForm } from "@/features/products/components/ProductForm";

export default function Products() {
  const [showList, setShowList] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setShowList(true);
    });
  }, []);

  return (
    <main>
      <h1>🛒 Product List</h1>
      <ProductForm />
      {isPending && (
        <p className="text-sm text-gray-500">Loading products...</p>
      )}
      {showList && <ProductList />}
    </main>
  );
}
