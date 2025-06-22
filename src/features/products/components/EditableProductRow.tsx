'use client';

import { useState } from 'react';
import { Button } from '@/shared/components/ui/Button';
import { EditProductModal } from '@/features/products/modals/EditProductModal';
import { ConfirmDeleteModal } from '@/features/products/modals/ConfirmDeleteModal';
import Link from 'next/link';

export function EditableProductRow({ product, serial }: { product: any, serial: number }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-md mb-4">
      <Link
        href={`products/${product.id}`}
        className="cursor-pointer text-gray-800 hover:text-blue-600 transition-colors"
      >
        <strong>
          <span className="font-semibold">{serial} - {product.title}</span>{' '}
        </strong>{" "}
        <span className="text-gray-600">
          — ₹{product.price.toFixed(2)} (Qty: {product.inventory})
        </span>
      </Link>

      <div className="flex gap-2">
        <Button 
        size="sm" 
        onClick={() => setEditOpen(true)}
        variant='primary'
        outline
        >
          Edit
        </Button>
        <Button 
        size="sm" 
        variant="danger" 
        outline
        onClick={() => setDeleteOpen(true)}
        >
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
