'use client';

import { useState } from 'react';
import { useCreateProduct } from '@/features/products/hooks/useCreateProduct';
import { InputField } from '@/shared/components/ui/InputField';
import { Button } from '@/shared/components/ui/Button';

export function ProductForm() {
  const { mutate, isPending, isError, error, data } = useCreateProduct();
  const [form, setForm] = useState({ title: '', price: '', inventory: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      title: form.title,
      price: parseFloat(form.price),
      inventory: parseInt(form.inventory),
      tags: ['demo']
    });
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Create Product</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <InputField
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
        />
        <InputField
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
        />
        <InputField
          type="number"
          placeholder="Inventory"
          value={form.inventory}
          onChange={(e) =>
            setForm((f) => ({ ...f, inventory: e.target.value }))
          }
        />
        <Button type="submit" isLoading={isPending}>
          Create Product
        </Button>
      </form>

      {isError && (
        <p className="mt-2 text-sm text-red-600">
          ❌ {(error as Error).message}
        </p>
      )}
      {data && (
        <p className="mt-2 text-sm text-green-600">
          ✅ Created: {data.title}
        </p>
      )}
    </section>
  );
}
