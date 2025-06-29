// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getProducts,
  addProduct,
  getFilteredProducts,
} from '@/lib/data/productsData';
import { nanoid } from 'nanoid';
import { buildProductsFilterFromQuery } from '@/shared/lib/utils/buildProductsFilterFromQuery';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '20');
  const skip = (page - 1) * pageSize;

  const where = buildProductsFilterFromQuery(searchParams);

  // console.log('arup1', req.url, page, pageSize, skip);

  // 🔀 If no filters provided, return all products (paginated)
  if (Object.keys(where).length === 0) {
    // console.log('no filters applied on products, so fetching all');
    const all = await getProducts();
    const data = all.products.slice(skip, skip + pageSize);
    return NextResponse.json({ data, total: all.products.length });
  } else {
    // console.log('filters applied on products, so fetching filtered');

    // console.log('arup2',{where, skip, take: pageSize});
    return NextResponse.json(
      await getFilteredProducts({ where, skip, take: pageSize })
    );
  }
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
    updatedBy: 'admin',
  };
  addProduct(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
