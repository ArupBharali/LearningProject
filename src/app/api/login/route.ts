import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/features/login/schema';

// simulate a fake user database
const fakeUsers = [{
  id: 'u123',
  name: 'Jane Doe',
  email: 'user@example.com',
  role: "user",
  password: '123456', // in production, passwords should always be hashed!
  avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/39.jpg',
},
{
  id: 'u124',
  name: 'Timothy Gizinsky',
  email: 'manager@example.com',
  role: "manager",
  password: '123456', // in production, passwords should always be hashed!
  avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/68.jpg',
},
{
  id: 'u125',
  name: 'Walter Welch',
  email: 'admin@example.com',
  role: "admin",
  password: '123456', // in production, passwords should always be hashed!
  avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/21.jpg',
}];



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

    const fakeUser = fakeUsers.filter((user, index) => {
      return user.email === email && user.password === password;
    })
    // Replace this with real user lookup and secure password check
    if (!fakeUser) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id: fakeUser[0].id,
        name: fakeUser[0].name,
        email: fakeUser[0].email,
        avatar: fakeUser[0].avatar,
        role: fakeUser[0].role
      },
      token: 'fake-jwt-token-abc123', // eventually replace with real JWT
    });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
