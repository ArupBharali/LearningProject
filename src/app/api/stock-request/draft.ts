// Mock handler for saving draft data
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // You could write to a database here
    // console.log('💾 Draft saved:', req.body);
    return res.status(200).json({ message: 'Draft saved' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
