import { z } from 'zod';

export const productSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
  description: z.string().max(2000).optional(),
  summary: z.string().max(300).optional(),
  price: z.number().nonnegative(),
  discountPercentage: z.number().min(0).max(100).default(0),
  inventory: z.number().int().nonnegative(),
  sku: z.string().optional(),
  barcode: z.string().optional(),
  category: z.string(),
  subcategory: z.string().optional(),
  tags: z.array(z.string()).optional(),
  brand: z.string().optional(),
  isActive: z.boolean().default(true),
  featured: z.boolean().default(false),
  rating: z.number().min(0).max(5).default(0),
  
});


const ExtendedProductSchema = productSchema.extend({
  images: z.array(z.string().url()).optional()
});

const MetaSchema = z.object({
  createdAt: z.string().datetime(),
  createdBy: z.string(),
  updatedBy: z.string(),
  updatedAt: z.string().datetime()
});

const ProductWithMeta = ExtendedProductSchema.merge(MetaSchema);

export const ValidatedProductSchema = ProductWithMeta
  .transform((data) => ({
    ...data,
    priceInCents: Math.round(data.price * 100),
    slug: data.title.toLowerCase().replace(/\s+/g, '-')
  }))
  .refine((data) => data.tags.length > 0, {
    message: 'Product must have at least one tag'
  })
  .refine((data) => data.title.length >= 3, {
    message: 'Title must be at least 3 characters long'
  });

export const ValidatedProductArraySchema = z.array(ValidatedProductSchema);

export const ProductApiResponseSchema = z.object({
  products: ValidatedProductArraySchema
});

export const ProductsApiResponseSchema = z.object({
  data: z.array(ValidatedProductSchema),
  total: z.number(),
})

export type ProductsApiResponse = z.infer<typeof ProductsApiResponseSchema>;

export type Product = z.infer<typeof ValidatedProductSchema>;
export type Products = z.infer<typeof ValidatedProductArraySchema>;
export type CreateProductInput = z.infer<typeof productSchema>;

export function parseProduct(data: unknown): Product {
  const result = ValidatedProductSchema.safeParse(data);
  if (!result.success) {
    console.error('❌ Product validation failed:', result.error.format());
    throw new Error('Invalid product data');
  }
  return result.data;
}

export function parseProductsApiResponse(data: unknown): ProductsApiResponse {
  const result = ProductsApiResponseSchema.safeParse(data);
  if (!result.success) {
    console.error('❌ Api response products validation failed:', result.error.format());
    throw new Error('Invalid api response products structure');
  }
  return result.data;
}
