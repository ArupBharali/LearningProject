import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { EmployeeDB } from '@/lib/db/types';
import path from 'path';

const file = path.resolve(process.cwd(), 'src/lib/db/employees.json');
const adapter = new JSONFile<EmployeeDB>(file);
export const db = new Low<EmployeeDB>(adapter, {
  employees: [],
  relations: { los: [] }
});

export async function initDB() {
  await db.read();
}
