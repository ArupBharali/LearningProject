// src/features/users/modals/CreateUserModal.tsx
'use client';

import { UserForm } from '@/features/users/components/UserForm';

export function CreateUserModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Create New User</h2>
        <UserForm />
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
