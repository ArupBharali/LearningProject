import { db, initDB } from '@/lib/db/products';
import { Product } from '@/features/products/schema';

export async function getProducts(): Promise<{ "products": Product[]}> {
  await initDB();
//   console.log('db.data!',db.data!);
  return db.data!;
}

export async function getProductById(id: string): Promise<Product | null> {
  await initDB();
  return db.data!.products.find(p => p.id === id) || null;
}

export async function addProduct(product: Product) {
  await initDB();
  db.data!.products.push(product);
  await db.write();
}

export async function updateProduct(id: string, updates: Partial<Product>) {
  await initDB();
  const index = db.data!.products.findIndex(p => p.id === id);
  if (index !== -1) {
    db.data!.products[index] = { ...db.data!.products[index], ...updates };
    await db.write();
  }
}

export async function deleteProduct(id: string) {
  await initDB();
  db.data!.products = db.data!.products.filter(p => p.id !== id);
  await db.write();
}
