import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { Product } from '@/features/products/schema';

type Data = {
  products: Product[];
};

// File location (e.g., /src/lib/db/products.json)
const filePath = path.join(process.cwd(), 'src/lib/db/products.json');
const adapter = new JSONFile<Data>(filePath);
const db = new Low<Data>(adapter, { products: [] });

// Initialize with default data if empty
export async function initDB() {
  await db.read();
  db.data ||= { products: [] };
  await db.write();
}

export { db };
