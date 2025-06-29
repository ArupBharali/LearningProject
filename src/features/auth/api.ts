//src/app/api/auth.ts
import { User } from '../../shared/types';
import { UserSchema } from '../../lib/schemas/user';

export async function fetchCurrentUser(): Promise<User> {
  const res = await fetch('/api/user');
  if (!res.ok) throw new Error('Failed to load current user');
  const data = await res.json();
  const parsed = UserSchema.safeParse(data);
  if (!parsed.success) {
    console.error('src/app/api/auth.ts fetchCurrentUser ❌ Invalid user shape:', parsed.error.format());
    throw new Error('Invalid user data');
  }
  return parsed.data;
}
