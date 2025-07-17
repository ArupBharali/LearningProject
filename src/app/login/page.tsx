'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '@/features/login/schema';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/shared/store';
import { login } from '@/shared/store/slices/authSlice';
import Image from 'next/image';
import { auth } from '@/lib/auth/auth';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCredentialsLogin = async (data: LoginSchemaType) => {
    setIsLoading(true);
    setErrorMessage(null);

    const result = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.ok) {
      const session = await auth();
      if (session?.user) {
        dispatch(
          login({
            user: {
              id: '',
              role: 'user', // session.user.role if extended
              name: session.user.name ?? '',
              email: session.user.email ?? '',
              avatar: session.user.image ?? '',
            },
            token: '',
          })
        );
      }
      router.push('/');
    } else {
      if (result?.error === 'CredentialsSignIn') {
        setErrorMessage('Invalid email or password');
      } else if (result?.error === 'OAuthAccountNotLinked') {
        setErrorMessage('You have tried to login with the wrong provider');
      } else if (result?.error === 'Configuration') {
        setErrorMessage('Provider misconfigured');
      } else {
        setErrorMessage(result?.error || 'Login failed');
      }
    }
  };

  const handleProviderLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl: '/' });
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

      <form onSubmit={handleSubmit(handleCredentialsLogin)} className="space-y-4">
        <input
          type="email"
          {...register('email')}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
        />
        {errors.email && (
          <p className="text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
        )}

        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
        />
        {errors.password && (
          <p className="text-sm text-red-500 dark:text-red-400">{errors.password.message}</p>
        )}

        {errorMessage && (
          <p className="text-sm text-red-500 dark:text-red-400">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded disabled:opacity-50"
        >
          {isLoading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>

      <div className="my-6 text-center text-gray-500 dark:text-gray-400">or</div>

      <button
        onClick={() => handleProviderLogin('google')}
        className="w-full bg-white dark:bg-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-200 text-black dark:text-black py-2 rounded flex items-center justify-center gap-2 mb-2"
      >
        <Image
          width={20}
          height={20}
          src="/icons/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>

      <button
        onClick={() => handleProviderLogin('github')}
        className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded flex items-center justify-center gap-2"
      >
        <Image
          width={20}
          height={20}
          src="/icons/github.svg"
          alt="GitHub"
          className="w-5 h-5 invert"
        />
        Continue with GitHub
      </button>
    </div>
  );
}
