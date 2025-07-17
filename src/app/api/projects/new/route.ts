import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { v4 as uuidv4 } from 'uuid';
import getDb from '@/lib/db/project-draft';
import { INITIAL_DATA, ProjectFormData } from '@/features/projects/schema';

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const db = await getDb();
  const projectId = uuidv4();
  const now = new Date().toISOString();

  const newProject: ProjectFormData = {
    ...INITIAL_DATA,
    projectId,
    createdBy: token.email!,
    createdAt: now,
    updatedBy: token.email!,
    updatedAt: now,
    status: 'draft',
    isArchived: false,
  };

  db.data!.push(newProject);
  await db.write();

  return NextResponse.json({ projectId });
}
