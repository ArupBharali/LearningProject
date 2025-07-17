// src/features/users/components/UserActions.tsx
'use client';

import Link from 'next/link';

export function UserActions() {
  return (
    <div className="mt-6 flex gap-3">
      <button
        className="px-4 py-2 rounded 
          bg-blue-600 hover:bg-blue-700 
          text-white transition-colors duration-200"
      >
        Edit User
      </button>
      <Link href="/users">
        <button
          className="px-4 py-2 rounded 
            bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-gray-100 
            hover:bg-gray-300 dark:hover:bg-gray-600 
            transition-colors duration-200"
        >
          Back to Users
        </button>
      </Link>
    </div>
  );
}
