import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
// lib/auth.ts
const users = [
  {
    id: 'u123',
    name: 'Jane Doe',
    email: 'user@example.com',
    role: 'user',
    password: '123456', // in production, passwords should always be hashed!
    avatar:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/39.jpg',
  },
  {
    id: 'u124',
    name: 'Timothy Gizinsky',
    email: 'manager@example.com',
    role: 'manager',
    password: '123456', // in production, passwords should always be hashed!
    avatar:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/68.jpg',
  },
  {
    id: 'u125',
    name: 'Walter Welch',
    email: 'admin@example.com',
    role: 'admin',
    password: '123456', // in production, passwords should always be hashed!
    avatar:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/21.jpg',
  },
];

export async function verifyUser(email: string, password: string) {
  const user = users.find((u) => u.email === email && u.password === password);
  return user
    ? {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      }
    : null;
}

export async function auth(){
    return await getServerSession(authOptions as any);
}