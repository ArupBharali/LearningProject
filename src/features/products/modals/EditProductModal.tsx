'use client';

import { useState } from 'react';
import { useUpdateProduct } from '@/features/products/hooks/useUpdateProduct';
import { InputField } from '@/shared/components/ui/InputField';
import { Button } from '@/shared/components/ui/Button';

export function EditProductModal({
  product,
  onClose
}: {
  product: any;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    title: product.title,
    price: product.price.toString(),
    inventory: product.inventory.toString()
  });
  const { mutate, isPending } = useUpdateProduct();

  const handleSave = () => {
    mutate({
      id: product.id,
      updates: {
        title: form.title,
        price: parseFloat(form.price),
        inventory: parseInt(form.inventory)
      }
    });
    onClose();
  };

  return (
    <div className="bg-white p-8 border-2 border-gray-300 rounded-md shadow-sm max-w-md">
      <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
      <div className="space-y-4">
        <InputField
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm((f) => ({ ...f, title: e.target.value }))
          }
        />
        <InputField
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm((f) => ({ ...f, price: e.target.value }))
          }
        />
        <InputField
          type="number"
          placeholder="Inventory"
          value={form.inventory}
          onChange={(e) =>
            setForm((f) => ({ ...f, inventory: e.target.value }))
          }
        />
      </div>
      <div className="flex gap-2 mt-6">
        <Button isLoading={isPending} onClick={handleSave} type="button">
          Save
        </Button>
        <Button variant="secondary" onClick={onClose} type="button">
          Cancel
        </Button>
      </div>
    </div>
  );
}
