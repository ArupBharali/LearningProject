import { db, initDB } from '@/lib/db/users';
import { User } from '@/features/users/schema';

export async function getUsers(): Promise<{ "users": User[]}> {
  await initDB();
//   console.log('db.data!',db.data!);
  return db.data!;
}

export async function getUserById(id: string): Promise<User | null> {
  await initDB();
  return db.data!.users.find(p => p.id === id) || null;
}

export async function addUser(user: User) {
  await initDB();
  db.data!.users.push(user);
  await db.write();
}

export async function updateUser(id: string, updates: Partial<User>) {
  await initDB();
  const index = db.data!.users.findIndex(p => p.id === id);
  if (index !== -1) {
    db.data!.users[index] = { ...db.data!.users[index], ...updates };
    await db.write();
  }
}

export async function deleteUser(id: string) {
  await initDB();
  db.data!.users = db.data!.users.filter(p => p.id !== id);
  await db.write();
}
