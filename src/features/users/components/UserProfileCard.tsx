'use client';

import Image from 'next/image';
import { useUserById } from '../hooks/useUserById';

interface UserProfileCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
  role: string;
}

export function UserProfileCard({ id }: { id: string }) {
  const { data: user, isLoading, isError } = useUserById(id);

  if (isLoading) return <p className="text-gray-500">Loading user...</p>;
  if (isError) return <p className="text-red-600">Failed to load user.</p>;

  return (
    <section className="flex items-center gap-5 rounded-lg bg-white shadow-sm p-4 sm:p-6 border border-gray-200">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <Image
          src={user?.avatarUrl || '/default-avatar.png'}
          alt={`${user?.name}'s avatar`}
          fill
          className="rounded-full object-cover border border-gray-300"
        />
      </div>
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          {user?.name}
        </h2>
        <p className="text-sm text-gray-600">{user?.email}</p>
        <span className="inline-block text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
          {user?.role}
        </span>
      </div>
    </section>
  );
}
