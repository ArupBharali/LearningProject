// app/api/project/draft/route.ts
import { NextRequest, NextResponse } from 'next/server';
import getDb from '@/lib/db/project-draft';

export async function POST(req: NextRequest) {
  const { id, data } = await req.json();
  const db = await getDb();

//   console.log('api/project/draft/route.ts POST { id, data }', { id, data });

  const index = db.data!.drafts.findIndex((d) => d.id === id && d.status === 'draft');

  if (index >= 0) {
    console.log('api/project/draft/route.ts POST found, updating it');
    db.data!.drafts[index].data = data;
  } else {
    console.log('api/project/draft/route.ts POST not found, inserting it');
    db.data!.drafts.push({ id, status: 'draft', data: data });
  }

  await db.write();

  return NextResponse.json({ success: true });
}

export async function GET() {
  const db = await getDb();
  const draft = db.data!.drafts.find((d) => d.id === 'current');
  return NextResponse.json({ draft });
}
