//src/feature/logn/api.ts
import { loginSchema, LoginSchemaType } from '@/features/login/schema';
import { apiFetch } from '@/shared/lib/api';
import { signIn, getSession } from 'next-auth/react';

export async function loginUser(input: LoginSchemaType) {
  const parsed = loginSchema.safeParse(input);

  if (!parsed.success) {
    console.error('src/feature/logn/api.ts loginUser ❌ Login validation failed:', parsed.error.format());
    throw new Error('Invalid login input');
  }

  console.log('src/feature/logn/api.ts loginUser parsed', parsed);
  const result = await signIn('credentials', {
    email: parsed.data.email,
    password: parsed.data.password,
    // callbackUrl: '/',
    redirect: false,
  });

  if (result?.ok) {
    console.log('login successful');

    // 🔑 Now fetch the session
    const session = await getSession();
    console.log('🎟️ User session:', session);

    // Example return
    return {
      user: session?.user,
      token: session,
    };
  } else if (result?.error) {
    console.log('Login error', result.error);
    throw new Error(result.error);
  }

  return null;
  // return await apiFetch<{ user: any; token: string }>('/api/login', {
  //   method: 'POST',
  //   body: JSON.stringify(parsed.data),
  // });
}
