import { apiFetch } from '@/shared/lib/api';
import {
  parseUsers,
  parseUser,
  CreateUserSchema,
  CreateUserInput,
  User,
} from '@/features/users/schema';

export async function fetchUserById(id: string) {
  const data = await apiFetch(`/api/users/${id}`);
  return parseUser(data);
}

export async function fetchUsers(): Promise<User[]> {
  const data = await apiFetch('/api/users');
  return parseUsers(data);
}
export async function updateUser(
  id: string,
  updates: Partial<CreateUserInput>
): Promise<User> {
  return await apiFetch<User>(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });
}

export async function deleteUser(id: string): Promise<{ success: boolean }> {
  return await apiFetch<{ success: boolean }>(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export async function createUser(input: CreateUserInput): Promise<User> {
  const parsed = CreateUserSchema.safeParse(input);
  if (!parsed.success) {
    console.error('❌ Validation failed', parsed.error.format());
    throw new Error('Invalid input');
  }

  return await apiFetch<User>('/api/users', {
    method: 'POST',
    body: JSON.stringify(parsed.data),
  });
}
