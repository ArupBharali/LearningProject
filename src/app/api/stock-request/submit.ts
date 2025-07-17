// Mock handler for submitting final form
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (req.method === 'POST') {
    // Perform final validation, persist data, notify approvers, etc.
    // console.log('🚀 Submission received:', req.body);
    return res.status(200).json({ message: 'Stock request submitted' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
