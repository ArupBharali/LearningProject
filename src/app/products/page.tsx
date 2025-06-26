"use client";

import { useTransition, useEffect, useState } from "react";
import { ProductList } from "@/features/products/components/ProductList";
import { Button } from "@/shared/components/ui/Button";
import { CreateProductModal } from "@/features/products/modals/CreateProductModal";
import { Spinner } from "@/shared/components/ui/Spinner";
import { SidebarToggle } from "@/shared/components/SidebarToggle";
import { Sidebar } from "@/features/products/components/Sidebar";
import ProductDataTable from "@/features/products/components/ProductDataTable";
import { useProductsQuery } from "@/features/products/hooks/useProductsQuery";
import { useFilteredProductsQuery } from "@/features/products/hooks/useFilteredProductsQuery";

export default function Products() {
  const [showList, setShowList] = useState(false);
  const [showProductDataTable, setShowProductDataTable] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowList(true);
    });
  }, []);

  return (
    <div>
      <Sidebar />

      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SidebarToggle />
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                🛒 Products List
              </h1>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setShowProductDataTable(prev => !prev)}
                variant="primary"
                type="button"
              >
                Go in depth
              </Button>
              <Button
                size="sm"
                onClick={() => setModalOpen(true)}
                variant="primary"
                type="button"
              >
                Create Product
              </Button>
            </div>
          </div>

          {modalOpen && (
            <CreateProductModal onClose={() => setModalOpen(false)} />
          )}

          {isPending && (
            <div className="flex justify-center py-6">
              <Spinner />
            </div>
          )}

          {showProductDataTable && <ProductDataTable />}

          {showList && (
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <ProductList />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

