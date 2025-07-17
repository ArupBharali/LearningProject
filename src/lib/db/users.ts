import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { User } from '@/features/users/schema';

type Data = {
  users: User[];
};

// File location (e.g., /src/lib/db/users.json)
const filePath = path.join(process.cwd(), 'src/lib/db/users.json');
const adapter = new JSONFile<Data>(filePath);
const db = new Low<Data>(adapter, { users: [] });

// Initialize with default data if empty
export async function initDB() {
  await db.read();
  db.data ||= { users: [] };
  await db.write();
}

export { db };
