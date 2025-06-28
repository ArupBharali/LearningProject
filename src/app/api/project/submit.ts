import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';
import { getUser } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

const db = new Low(new JSONFile('db/projects.json'));
const audit = new Low(new JSONFile('db/audit.json'));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const user = await getUser(req.headers['x-user-id'] as string); // Pass user ID from client
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const form = { ...req.body, status: 'submitted', id: nanoid(), owner: user.id };

  await db.read();
  db.data ||= { projects: [] };
  db.data.projects.push(form);
  await db.write();

  await audit.read();
  audit.data ||= { logs: [] };
  audit.data.logs.push({
    formId: form.id,
    action: 'Submitted',
    by: user.name,
    at: new Date().toISOString(),
  });
  await audit.write();

  return res.status(200).json({ success: true, id: form.id });
}
