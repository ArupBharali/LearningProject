// lib/lowdb.ts
import { ProjectFormData, INITIAL_DATA } from '@/features/project-form/schema';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

const file = join(process.cwd(), 'project-drafts.json');
const adapter = new JSONFile<ProjectFormData>(file);
const db = new Low<ProjectFormData>(adapter, INITIAL_DATA);

// Ensure defaults
async function getDb() {
  await db.read();
  db.data ||= INITIAL_DATA;
  return db;
}

export default getDb;
