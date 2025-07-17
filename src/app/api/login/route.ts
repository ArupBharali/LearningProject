import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/features/login/schema';
import { signIn } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

// simulate a fake user database
// const fakeUsers = [
//   {
//     id: 'u123',
//     name: 'Jane Doe',
//     email: 'user@example.com',
//     role: 'user',
//     password: '123456', // in production, passwords should always be hashed!
//     avatar:
//       'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/39.jpg',
//   },
//   {
//     id: 'u124',
//     name: 'Timothy Gizinsky',
//     email: 'manager@example.com',
//     role: 'manager',
//     password: '123456', // in production, passwords should always be hashed!
//     avatar:
//       'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/68.jpg',
//   },
//   {
//     id: 'u125',
//     name: 'Walter Welch',
//     email: 'admin@example.com',
//     role: 'admin',
//     password: '123456', // in production, passwords should always be hashed!
//     avatar:
//       'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/21.jpg',
//   },
// ];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsed.error.format() },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // Try sign in with credentials
  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });
  
    if (!result?.ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
    // const fakeUser = fakeUsers.filter((user) => {
    //   return user.email === email && user.password === password;
    // });
    // Replace this with real user lookup and secure password check
    // if (!fakeUser) {
    //   return NextResponse.json(
    //     { message: 'Invalid credentials' },
    //     { status: 401 }
    //   );
    // }

    // ✅ Get decoded token
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.json({ error: 'Token extraction failed' }, { status: 500 });
  }

  const user = {
    id: token.email ?? 'placeholder-id',
    name: token.name ?? '',
    email: token.email ?? '',
    avatar: token.picture ?? '',
    role: 'user' as const,
  };
    return NextResponse.json({ user, token: JSON.stringify(token) });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
