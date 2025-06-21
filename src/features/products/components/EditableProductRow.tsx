'use client';

import { useState } from 'react';
import { Button } from '@/shared/components/ui/Button';
import { EditProductModal } from '@/features/products/modals/EditProductModal';
import { ConfirmDeleteModal } from '@/features/products/modals/ConfirmDeleteModal';

export function EditableProductRow({ product }: { product: any }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-md mb-4">
      <p className="m-0">
        <strong>{product.title}</strong> — ${product.price} (Qty: {product.inventory})
      </p>
      <div className="flex gap-2">
        <Button onClick={() => setEditOpen(true)}>Edit</Button>
        <Button variant="danger" onClick={() => setDeleteOpen(true)}>
          Delete
        </Button>
      </div>

      {editOpen && (
        <EditProductModal
          product={product}
          onClose={() => setEditOpen(false)}
        />
      )}
      {deleteOpen && (
        <ConfirmDeleteModal
          id={product.id}
          onClose={() => setDeleteOpen(false)}
        />
      )}
    </div>
  );
}
