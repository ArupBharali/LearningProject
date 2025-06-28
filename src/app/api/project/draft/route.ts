// app/api/project/draft/route.ts
import { NextRequest, NextResponse } from 'next/server';
import getDb from '@/lib/db/project-draft';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const db = await getDb();

  const id = 'current'; // or use session/user-specific ID
  const index = db.data!.drafts.findIndex((d) => d.id === id);

  if (index >= 0) {
    db.data!.drafts[index].data = body;
  } else {
    db.data!.drafts.push({ id, data: body });
  }

  await db.write();

  return NextResponse.json({ success: true });
}

export async function GET() {
  const db = await getDb();
  const draft = db.data!.drafts.find((d) => d.id === 'current');
  return NextResponse.json({ draft });
}
