// Mock handler for saving draft data
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
    // You could write to a database here
    // console.log('💾 Draft saved:', req.body);
    return res.status(200).json({ message: 'Draft saved' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
