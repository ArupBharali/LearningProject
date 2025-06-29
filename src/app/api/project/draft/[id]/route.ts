// app/api/project/draft/[id]/route.ts

import getDb from '@/lib/db/project-draft';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const {id} = await params;
  console.log('app/api/project/draft/[id]/route.ts GET params', {id});
  const db = await getDb();
  const draft = db.data!.drafts.find(
    (entry) => entry.id === id && entry.status === 'draft'
  );

  return NextResponse.json({ draft });
}
