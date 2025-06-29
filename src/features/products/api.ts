import { apiFetch } from '@/shared/lib/api';
import {
  parseProducts,
  parseProduct,
  productSchema,
  CreateProductInput,
  Product,
  parseProductsApiResponse,
  ProductsApiResponse,
} from '@/features/products/schema';

export async function fetchProductById(id: string) {
  const data = await apiFetch(`/api/products/${id}`);
  return parseProduct(data);
}

type ProductsResponse = {
  data: Product[];
  total: number;
};

export async function fetchProducts(
  page: number,
  pageSize: number
): Promise<ProductsApiResponse> {
  // console.log('src/feature/products/api.ts fetchProducts arguments', page, pageSize);
  const data = await apiFetch('/api/products', {
    params: {
      page,
      pageSize,
    },
  });
  // console.log('src/feature/products/api.ts fetchProducts api response data', data);
  return parseProductsApiResponse(data);
}
export async function fetchFilteredProducts(
  page: number,
  pageSize: number,
  filters: Record<string, string>
): Promise<ProductsApiResponse> {
  // console.log('src/feature/products/api.ts fetchFilteredProducts arguments', page, pageSize);

  const data = await apiFetch('/api/products', {
    params: {
      page,
      pageSize,
      ...filters,
    },
  });
  // console.log('fetchFilteredProducts fetchFilteredProducts api response data', data);
  return parseProductsApiResponse(data);
}
export async function updateProduct(
  id: string,
  updates: Partial<CreateProductInput>
): Promise<Product> {
  const res = await apiFetch<Product>(`/api/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });

  return res;
}

export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  const res = await apiFetch<{ success: boolean }>(`/api/products/${id}`, {
    method: 'DELETE',
  });

  return res;
}

export async function createProduct(
  input: CreateProductInput
): Promise<Product> {
  const parsed = productSchema.safeParse(input);
  if (!parsed.success) {
    console.error('fetchFilteredProducts createProduct ❌ Validation failed', parsed.error.format());
    throw new Error('Invalid input');
  }

  const res = await apiFetch<Product>('/api/products', {
    method: 'POST',
    body: JSON.stringify(parsed.data),
  });

  return res;
}
