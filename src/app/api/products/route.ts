// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/data/productsData';
import { nanoid } from 'nanoid';

export async function GET() {
  return NextResponse.json(await getProducts());
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = {
    ...body,
    id: nanoid(),
    slug: body.title.toLowerCase().replace(/\s+/g, '-'),
    priceInCents: Math.round(body.price * 100),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    updatedBy: 'admin'
  };
  addProduct(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
