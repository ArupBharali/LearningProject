// Mock handler for submitting final form
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Perform final validation, persist data, notify approvers, etc.
    console.log('🚀 Submission received:', req.body);
    return res.status(200).json({ message: 'Stock request submitted' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
