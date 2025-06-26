'use client';

import { useForm } from 'react-hook-form';
import { useLogin } from '@/features/login/hooks/useLogin';
import { useRouter } from 'next/navigation';
import { loginSchema, LoginSchemaType } from '@/features/login/schema';
import { zodResolver } from '@hookform/resolvers/zod';

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
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full p-2 border rounded"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {error && (
          <p className="text-sm text-red-600">{error.message as string}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
