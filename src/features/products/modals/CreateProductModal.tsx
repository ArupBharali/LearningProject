'use client';

import { ProductForm } from '@/features/products/components/ProductForm';

export function CreateProductModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-colors">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg p-6 w-full max-w-lg transition-colors duration-300">
        <h2 className="text-xl font-bold mb-4">Create New Product</h2>
        <ProductForm />
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded 
              bg-gray-200 dark:bg-gray-700 
              text-gray-800 dark:text-gray-100 
              hover:bg-gray-300 dark:hover:bg-gray-600 
              transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
