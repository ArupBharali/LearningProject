// src/app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';
import {
  getProducts,
  updateProduct,
  deleteProduct,
} from '@/lib/data/productsData';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updates = await req.json();
  updateProduct(params.id, {
    ...updates,
    updatedAt: new Date().toISOString(),
    updatedBy: 'admin',
  });
  return NextResponse.json({ success: true });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  deleteProduct(params.id);
  return NextResponse.json({ success: true });
}
