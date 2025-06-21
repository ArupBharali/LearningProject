import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number()
});

const ExtendedProductSchema = ProductSchema.extend({
  inventory: z.number().nonnegative(),
  tags: z.array(z.string()).default([]),
  createdAt: z.string().datetime()
});

const MetaSchema = z.object({
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

export const CreateProductSchema = z.object({
  title: z.string().min(1),
  price: z.number().positive(),
  inventory: z.number().nonnegative(),
  tags: z.array(z.string()).optional()
});

export const ProductApiResponseSchema = z.object({
  products: ValidatedProductArraySchema
});

export type Product = z.infer<typeof ValidatedProductSchema>;
export type Products = z.infer<typeof ValidatedProductArraySchema>;
export type CreateProductInput = z.infer<typeof CreateProductSchema>;

export function parseProduct(data: unknown): Product {
  const result = ValidatedProductSchema.safeParse(data);
  if (!result.success) {
    console.error('❌ Product validation failed:', result.error.format());
    throw new Error('Invalid product data');
  }
  return result.data;
}

export function parseProducts(data: unknown): Products {
  const result = ProductApiResponseSchema.safeParse(data);
  if (!result.success) {
    console.error('❌ Products validation failed:', result.error.format());
    throw new Error('Invalid products data');
  }
  return result.data.products;
}
