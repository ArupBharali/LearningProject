// lib/lowdb.ts
import { ProjectFormData } from '@/features/projects/schema';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

const file = join(process.cwd(), 'src/lib/db/projects.json');
const adapter = new JSONFile<ProjectFormData[]>(file);
const db = new Low<ProjectFormData[]>(adapter, []);

// Ensure defaults
async function getDb() {
  await db.read();
  db.data ||= [];
  return db;
}

export default getDb;
