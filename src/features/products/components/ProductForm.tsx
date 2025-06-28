'use client';

import { useState } from 'react';
import { useCreateProduct } from '@/features/products/hooks/useCreateProductQuery';
import { InputField } from '@/shared/components/ui/InputField';
import { Button } from '@/shared/components/ui/Button';
import FileUploader from '@/shared/components/FileUploader';

export function ProductForm() {
  const { mutate, isPending, isError, error, data } = useCreateProduct();
  const [form, setForm] = useState({ title: '', price: '', inventory: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      title: form.title,
      price: parseFloat(form.price),
      inventory: parseInt(form.inventory),
      tags: ['demo'],
    });
  };

  const inputClass =
    'bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded';

  return (
    <section className="transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">🛍️ Create Product</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          type="text"
          placeholder="Product Title"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          className={inputClass}
        />
        <InputField
          type="number"
          placeholder="Price (e.g. 999.99)"
          value={form.price}
          onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
          className={inputClass}
        />
        <InputField
          type="number"
          placeholder="Inventory count"
          value={form.inventory}
          onChange={(e) =>
            setForm((f) => ({ ...f, inventory: e.target.value }))
          }
          className={inputClass}
        />
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Product Image
          </label>
          <FileUploader />
        </div>

        <Button type="submit" isLoading={isPending}>
          Create Product
        </Button>
      </form>

      {isError && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">
          ❌ {(error as Error).message}
        </p>
      )}
      {data && (
        <p className="mt-4 text-sm text-green-600 dark:text-green-400">
          ✅ Created: {data.title}
        </p>
      )}
    </section>
  );
}
