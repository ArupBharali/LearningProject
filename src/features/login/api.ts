import { loginSchema, LoginSchemaType } from '@/features/login/schema';
import { apiFetch } from '@/shared/lib/api';

export async function loginUser(input: LoginSchemaType) {
  const parsed = loginSchema.safeParse(input);

  if (!parsed.success) {
    console.error('❌ Login validation failed:', parsed.error.format());
    throw new Error('Invalid login input');
  }

  return await apiFetch<{ user: any; token: string }>('/api/login', {
    method: 'POST',
    body: JSON.stringify(parsed.data),
  });
}
