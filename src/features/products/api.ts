import { apiFetch } from '@/shared/lib/api';
import {
  parseProducts,
  parseProduct,
  CreateProductSchema,
  CreateProductInput,
  Product
} from '@/features/products/schema';

export async function fetchProductById(id: string) {
  const data =  await apiFetch(`/api/products/${id}`);
  return parseProduct(data);
}

export async function fetchProducts(): Promise<Product[]> {
  const data = await apiFetch('/api/products');
  return parseProducts(data);
}
export async function updateProduct(id: string, updates: Partial<CreateProductInput>): Promise<Product> {
  const res = await apiFetch<Product>(`/api/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates)
  });

  return res;
}

export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  const res = await apiFetch<{ success: boolean }>(`/api/products/${id}`, {
    method: 'DELETE'
  });

  return res;
}

export async function createProduct(input: CreateProductInput): Promise<Product> {
  const parsed = CreateProductSchema.safeParse(input);
  if (!parsed.success) {
    console.error('❌ Validation failed', parsed.error.format());
    throw new Error('Invalid input');
  }

  const res = await apiFetch<Product>('/api/products', {
    method: 'POST',
    body: JSON.stringify(parsed.data)
  });

  return res;
}
