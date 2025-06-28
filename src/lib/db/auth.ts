import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

type Role = 'Requester' | 'Reviewer' | 'Approver';
type User = { id: string; name: string; role: Role };

const adapter = new JSONFile<{ users: User[] }>('db/users.json');
const db = new Low(adapter);
await db.read();

export async function getUser(id: string) {
  await db.read();
  return db.data?.users.find(u => u.id === id);
}

export function hasAccess(role: string, formStatus: string): boolean {
  const rules: Record<string, string[]> = {
    Requester: ['draft', 'rejected'],
    Reviewer: ['submitted'],
    Approver: ['reviewed'],
  };
  return rules[role]?.includes(formStatus);
}

// Add to existing auth utilities
export function canTakeAction(user: any, form: any): boolean {
  const bucket = {
    Requester: ['draft', 'rejected'],
    Reviewer: ['submitted'],
    Approver: ['reviewed'],
  };
  return bucket[user.role]?.includes(form.status);
}
