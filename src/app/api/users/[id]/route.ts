// src/app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getUserById, updateUser, 
  deleteUser
 } from '@/lib/data/usersData';
import { getToken } from 'next-auth/jwt';

export async function GET(
  req: NextRequest,
  { params }: {params: Promise<{id: string}>}
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
const {id} = await params;
  console.log('src/app/api/products/[id]/route.ts GET', id);
  const user = await getUserById(id);
  console.log('src/app/api/products/[id]/route.ts user', user);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PATCH(
  req: NextRequest,
  { params }: {params: Promise<{id: string}>}
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
const {id} = await params;
  const updates = await req.json();
  updateUser(id, {
    ...updates,
    updatedAt: new Date().toISOString(),
    updatedBy: 'admin',
  });
  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: NextRequest,
  { params }: {params: Promise<{id: string}>}
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
const {id}=await params;
  deleteUser(id);
  return NextResponse.json({ success: true });
}
