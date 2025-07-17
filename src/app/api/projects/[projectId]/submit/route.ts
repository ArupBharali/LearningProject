import { NextRequest, NextResponse } from 'next/server';
import getDb from '@/lib/db/project-draft';
import { merge } from 'lodash';
import { getToken } from 'next-auth/jwt';


export async function POST(
  req: NextRequest,
  { params }: {params: Promise<{projectId: string}>}
) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { projectId } = await params;
    const { id, data } = await req.json();
    const db = await getDb();

    const now = new Date().toISOString();

    if (!id || !data) {
      return NextResponse.json(
        { message: 'Missing user ID or project data' },
        { status: 400 }
      );
    }

    // Check if a draft already exists
    const index = db.data!.findIndex(
      (entry) =>
        entry.projectId === decodeURIComponent(projectId) &&
        entry.status === 'draft'
    );

    if (index >= 0) {
      // Update existing record
      // Ensure auditLog is initialized
      db.data[index].data.auditLog ??= [];

      // Add the new audit log entry
      db.data[index].data.auditLog.push({
        status: 'submitted',
        updatedBy: id,
        updatedAt: now,
        comment: 'Submitted successfully',
      });

      // Deep merge the incoming fields into existing data
      merge(db.data[index].data, data);

      // Update meta fields (non-destructive)
      db.data[index].updatedBy = id;
      db.data[index].updatedAt = now;
      db.data[index].status = 'submitted';

      await db.write();

      return NextResponse.json({
        success: true,
        message: 'Draft submitted successfully',
      });
    }

    await db.write();
  } catch (err) {
    console.error('Submission error:', err);
    return NextResponse.json({ message: 'Submission failed' }, { status: 500 });
  }
}
