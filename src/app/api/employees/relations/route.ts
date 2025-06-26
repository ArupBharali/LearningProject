// relations route
import { initDB, db } from '@/lib/db/employees';
import { NextResponse } from 'next/server';

export async function GET() {
  await initDB();
  return NextResponse.json(db.data!.relations);
}
