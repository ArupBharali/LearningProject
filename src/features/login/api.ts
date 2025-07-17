// //src/feature/logn/api.ts
// import { loginSchema, LoginSchemaType } from '@/features/login/schema';
// import { getToken } from 'next-auth/jwt';
// // import { apiFetch } from '@/shared/lib/api';
// import { signIn, getSession } from 'next-auth/react';

export async function loginUser(
  // input: LoginSchemaType
) {
  // const parsed = loginSchema.safeParse(input);

  // if (!parsed.success) {
  //   console.error(
  //     'src/feature/logn/api.ts loginUser ❌ Login validation failed:',
  //     parsed.error.format()
  //   );
  //   throw new Error('Invalid login input');
  // }

  // console.log('src/feature/logn/api.ts loginUser parsed', parsed);
  // const result = await signIn('credentials', {
  //   email: parsed.data.email,
  //   password: parsed.data.password,
  //   // callbackUrl: '/',
  //   redirect: false,
  // });

  // if (result?.ok) {
  //   console.log('login successful');

  //   // 🔑 Now fetch the session
  //   const session = await getSession();
  //   console.log('🎟️ User session:', session);

  //   const rawToken = await getToken({
  //     req, 
  //     secret: process.env.NEXTAUTH_SECRET,
  //     raw: true
  //   })
  //   // Example return
  //   if (result?.ok && session?.user)
  //   return {
  //     user: session?.user ? {
  //   id: session?.user.email || 'placeholder-id', // Adjust if not returned by session
  //   name: session?.user.name || '',
  //   email: session?.user.email || '',
  //   avatar: session?.user.image || '',
  //   role: 'user' as const, // Default or derive based on your logic
  // } : null,
  //     token: rawToken,
  //   };
  // } 
  // if (result?.error) {
  // console.error('Login error', result.error);
  // throw new Error(result.error);
// }

throw new Error('Unexpected login failure');
  // return await apiFetch<{ user: unknown ; token: string }>('/api/login', {
  //   method: 'POST',
  //   body: JSON.stringify(parsed.data),
  // });
}
