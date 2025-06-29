'use client';

import { useForm } from 'react-hook-form';
import { useLogin } from '@/features/login/hooks/useLogin';
import { useRouter } from 'next/navigation';
import { loginSchema, LoginSchemaType } from '@/features/login/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const { mutate, isPending, error } = useLogin();
  const router = useRouter();

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data, {
      onSuccess: () => router.push('/'),
    });
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4 text-gray-900 dark:text-gray-100 transition-colors">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded transition-colors"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded transition-colors"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
          )}
        </div>

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error.message as string}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2 rounded transition-colors"
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
