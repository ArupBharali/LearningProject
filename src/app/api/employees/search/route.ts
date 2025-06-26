// src/app/api/employees/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { initDB, db } from '@/lib/db/employees';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  await initDB();

  const matches = db
    .data!.employees.filter((emp) => emp.name.toLowerCase().includes(query))
    .slice(0, 10); // limit suggestions

  return NextResponse.json(matches);
}
