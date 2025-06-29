// src/app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';
import { getUserById, updateUser, deleteUser } from '@/lib/data/usersData';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log('src/app/api/products/[id]/route.ts GET', params.id);
  const user = await getUserById(params.id);
  console.log('src/app/api/products/[id]/route.ts user', user);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updates = await req.json();
  updateUser(params.id, {
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
  deleteUser(params.id);
  return NextResponse.json({ success: true });
}
