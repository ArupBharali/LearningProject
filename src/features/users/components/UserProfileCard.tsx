'use client';

import Image from 'next/image';
import { useUserById } from '../hooks/useUserById';

export function UserProfileCard({ id }: { id: string }) {
  const { data: user, isLoading, isError } = useUserById(id);

  if (isLoading)
    return <p className="text-sm text-gray-500 dark:text-gray-400">Loading user...</p>;
  if (isError)
    return <p className="text-sm text-red-600 dark:text-red-400">Failed to load user.</p>;

  return (
    <section className="flex items-center gap-5 rounded-lg 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100 
      shadow-sm p-4 sm:p-6 
      border border-gray-200 dark:border-gray-700 
      transition-colors duration-300"
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <Image
          src={user?.avatarUrl || '/default-avatar.png'}
          alt={`${user?.name}'s avatar`}
          fill
          className="rounded-full object-cover border border-gray-300 dark:border-gray-600"
        />
      </div>
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          {user?.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
        <span className="inline-block text-xs font-medium 
          text-blue-700 dark:text-blue-400 
          bg-blue-100 dark:bg-blue-900 
          px-2 py-0.5 rounded-full"
        >
          {user?.role}
        </span>
      </div>
    </section>
  );
}
