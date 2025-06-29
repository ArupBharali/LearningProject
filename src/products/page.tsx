'use client';

import { useTransition, useEffect, useState } from 'react';
import { ProductList } from '@/features/products/components/ProductList';
import { Button } from '@/shared/components/ui/Button';
import { CreateProductModal } from '@/features/products/modals/CreateProductModal';
import { Spinner } from '@/shared/components/ui/Spinner';
import ProductDataTable from '@/features/products/components/ProductDataTable';

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
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10 transition-colors duration-300">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                🛒 Products List
              </h1>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setShowProductDataTable((prev) => !prev)}
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
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow p-4 sm:p-6 transition-colors">
              <ProductList />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
