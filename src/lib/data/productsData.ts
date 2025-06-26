import { db, initDB } from '@/lib/db/products';
import { Product } from '@/features/products/schema';

export async function getProducts(): Promise<{ "products": Product[]}> {
  await initDB();
//   console.log('db.data!',db.data!);
  return db.data!;
}

export async function getFilteredProducts({
  where,
  skip,
  take,
}: {
  where: Record<string, any>;
  skip: number;
  take: number;
}) {
  await initDB();
  const allProducts = db.data!.products;

  console.log('getFilteredProducts where', where, 'skip', skip, 'take', take);
  // Filter products
  const filtered = allProducts.filter((product) => {
    return Object.entries(where).every(([key, condition]) => {
      const value = (product as any)[key];

      // Case-insensitive partial match
      if (typeof condition === 'object' && condition.contains) {
        return String(value).toLowerCase().includes(String(condition.contains).toLowerCase());
      }
      if(key == 'price'){
        return parseFloat(value.toString().replace(/[^\d.]/g, '')) == condition;
      }
      // Boolean or exact match
      return value === condition;
    });
  });
console.log('getFilteredProducts filtered[0]',filtered[0]);
  // Paginate
  const paginated = filtered.slice(skip, skip + take);
// console.log('arup4',paginated);
  return {
    data: paginated,
    total: filtered.length,
  };
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
