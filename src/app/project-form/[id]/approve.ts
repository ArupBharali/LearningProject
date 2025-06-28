import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { getUser } from '@/lib/auth';

const db = new Low(new JSONFile('db/projects.json'));
const audit = new Low(new JSONFile('db/audit.json'));

export default async function handler(req, res) {
  const { id } = req.query;
  const user = await getUser(req.headers['x-user-id']);

  await db.read();
  const form = db.data.projects.find(p => p.id === id);
  if (!form) return res.status(404).json({ error: 'Not found' });

  const roleAction = {
    Reviewer: ['submitted', 'reviewed'],
    Approver: ['reviewed', 'approved']
  };

  const allowed = roleAction[user.role]?.[0] === form.status;
  if (!allowed) return res.status(403).json({ error: 'Not allowed' });

  const newStatus = roleAction[user.role][1];
  form.status = newStatus;
  await db.write();

  await audit.read();
  audit.data.logs.push({
    formId: id,
    action: `${user.role} Approved`,
    at: new Date().toISOString(),
    by: user.name
  });
  await audit.write();

  res.json({ success: true, newStatus });
}
