// features/auth/schema.ts or shared/types/user.ts
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  role: z.enum(["admin", "user", "manager"]).default("user"),
  avatarUrl: z.string().url().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  isActive: z.boolean().default(true),
});

const MetaSchema = z.object({
  createdBy: z.string().optional(),
  createdAt: z.string().datetime().optional(),
  updatedBy: z.string().optional(),
  updatedAt: z.string().datetime().optional(),
});

const UserWithMeta = UserSchema.merge(MetaSchema);


// Transformed + refined schema
export const ValidatedUserSchema = UserWithMeta
  .transform((data) => ({
    ...data,
    initials: data.name
      .split(' ')
      .map((n) => n[0].toUpperCase())
      .join(''),
    domain: data.email.split('@')[1],
  }))
  .refine((data) => data.name.length >= 3, {
    message: 'Name must be at least 3 characters long',
    path: ['name'],
  })
  .refine((data) => ['admin', 'user', 'manager'].includes(data.role), {
    message: 'Invalid role',
    path: ['role'],
  });

// API response wrapper
export const ValidatedUserArraySchema = z.array(ValidatedUserSchema);
export const UserApiResponseSchema = z.object({
  users: ValidatedUserArraySchema,
});

// Create input schema (no system fields)
export const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(['admin', 'user', 'manager']).optional(),
  avatarUrl: z.string().url().optional(),
});

export type User = z.infer<typeof ValidatedUserSchema>;
export type Users = z.infer<typeof ValidatedUserArraySchema>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;

// Parsers
export function parseUser(data: unknown): User {
  const result = ValidatedUserSchema.safeParse(data);
  if (!result.success) {
    console.error('❌ User validation failed:', result.error.format());
    throw new Error('Invalid user data');
  }
  return result.data;
}

export function parseUsers(data: unknown): Users {
  const result = UserApiResponseSchema.safeParse(data);
  if (!result.success) {
    console.error('❌ Users validation failed:', result.error.format());
    throw new Error('Invalid users data');
  }
  return result.data.users;
}