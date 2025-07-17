import { NextRequest, NextResponse } from 'next/server';
import getDb from '@/lib/db/project-draft';
import { merge } from 'lodash'; // if using lodash for deep merging
import {getToken} from 'next-auth/jwt';
console.log(getToken); 

type ParamsProps = {
  params: Promise<{
    projectId: string;
  }>
}

export async function GET(
  req: NextRequest,
  { params }: ParamsProps
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { projectId } = await params;
  console.log('app/api/project/draft/[id]/route.ts GET params', { projectId });

  const body = await req.json();
  const { updatedBy, data } = body;

  if (!updatedBy || !data) {
    return NextResponse.json(
      { error: 'Missing updatedBy or data' },
      { status: 400 }
    );
  }

  const db = await getDb();

  const index = db.data!.findIndex(
    (entry) =>
      entry.projectId === decodeURIComponent(projectId) &&
      entry.status === 'draft'
  );

  if (index === -1) {
    return NextResponse.json(
      { error: 'Draft project not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, projectId });
}

export async function POST(
  req: NextRequest,
  { params }: ParamsProps
) {
  // const token = await jwt.getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // if (!token) {
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  const { projectId } = await params;

  //   console.log('api/project/draft/route.ts POST { id, data }', { id, data });
  const body = await req.json();
  const { updatedBy, data } = body;
  const db = await getDb();
  const now = new Date().toISOString();

  const index = db.data!.findIndex(
    (entry) =>
      entry.projectId === decodeURIComponent(projectId) &&
      entry.status === 'draft'
  );

  if (index === -1) {
    return NextResponse.json(
      { error: 'Draft project not found' },
      { status: 404 }
    );
  }

  // Ensure auditLog is initialized
  db.data[index].data.auditLog ??= [];

  // Add the new audit log entry
  db.data[index].data.auditLog.push({
    status: 'draft',
    updatedBy,
    updatedAt: now,
    comment: 'Auto-saved',
  });

  // Deep merge the incoming fields into existing data
  merge(db.data[index].data, data);

  // Update meta fields (non-destructive)
  db.data[index].updatedBy = updatedBy;
  db.data[index].updatedAt = now;
  db.data[index].status = 'draft';

  await db.write();

  return NextResponse.json({ success: true, projectId });
}
