// src/app/api/employees/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { initDB, db } from '@/lib/db/employees';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  await initDB();

  const matches = db
    .data!.employees.filter((emp) => emp.name.toLowerCase().includes(query))
    .slice(0, 10); // limit suggestions

  return NextResponse.json(matches);
}
