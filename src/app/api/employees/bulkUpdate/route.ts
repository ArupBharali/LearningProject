// src/app/api/employees/bulkUpdate/route.ts

import { initDB, db } from '@/lib/db/employees';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const updates = await req.json();

  await initDB();

  // Update or insert based on ID
  for (const row of updates) {
    const index = db.data!.employees.findIndex(e => e.id === row.employee?.id);
    if (index !== -1) {
      db.data!.employees[index] = { ...db.data!.employees[index], ...row };
    } else if (row.employee) {
      db.data!.employees.push({ ...row.employee, ...row });
    }
  }

  await db.write();

  return NextResponse.json({ message: '✅ Employee rows saved successfully.' });
}
