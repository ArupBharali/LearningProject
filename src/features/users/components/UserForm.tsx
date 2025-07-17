'use client';

import { useState } from 'react';
import { useCreateUser } from '@/features/users/hooks/useCreateUser';
import { InputField } from '@/shared/components/ui/InputField';
import { Button } from '@/shared/components/ui/Button';

type Role = 'user' | 'admin' | 'manager';

export function UserForm() {
  const { mutate, isPending, isError, error, data } = useCreateUser();
  const [form, setForm] = useState<{
  name: string;
  email: string;
  role: Role | '';
}>({ name: '', email: '', role: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      name: form.name,
      email: form.email,
      role: form.role || undefined,
    });
  };

  return (
    <section className="transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">🧑‍💼 Create User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded"
        />
        <InputField
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded"
        />

        <select
          value={form.role}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              role: e.target.value as 'user' | 'admin' | 'manager',
            }))
          }
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded px-3 py-2"
        >
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>

        <Button type="submit" isLoading={isPending}>
          Create User
        </Button>
      </form>

      {isError && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          ❌ {(error as Error).message}
        </p>
      )}
      {data && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
          ✅ Created: {data.name}
        </p>
      )}
    </section>
  );
}
