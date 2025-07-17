// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getUsers, addUser } from '@/lib/data/usersData';
import { nanoid } from 'nanoid';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  console.log('src/app/api/products/route.ts GET');
  return NextResponse.json(await getUsers());
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

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
  addUser(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
