// src/features/users/components/UserActions.tsx
import Link from 'next/link';

export function UserActions() {
  return (
    <div className="mt-6 flex gap-3">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Edit User
      </button>
      <Link href="/users">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          Back to Users
        </button>
      </Link>
    </div>
  );
}
