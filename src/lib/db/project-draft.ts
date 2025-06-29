// lib/lowdb.ts
import { ProjectFormData, INITIAL_DATA } from '@/features/project-form/schema';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

type DraftEntry = {
  id: string;
  data: ProjectFormData;
  status: 'draft' | 'submitted';
};

type DraftDB = {
  drafts: DraftEntry[];
};

const file = join(process.cwd(), 'src/lib/db/project-drafts.json');
const adapter = new JSONFile<DraftDB>(file);
const db = new Low<DraftDB>(adapter, {drafts: []});

// Ensure defaults
async function getDb() {
  await db.read();
  db.data ||= {drafts: []};
  return db;
}

export default getDb;
