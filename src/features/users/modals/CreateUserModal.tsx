'use client';

import { UserForm } from '@/features/users/components/UserForm';

export function CreateUserModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-colors">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg p-6 w-full max-w-lg transition-colors duration-300">
        <h2 className="text-xl font-bold mb-4">Create New User</h2>
        <UserForm />
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded 
              bg-gray-200 dark:bg-gray-700 
              text-gray-800 dark:text-gray-100 
              hover:bg-gray-300 dark:hover:bg-gray-600 
              transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
