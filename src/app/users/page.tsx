'use client';

import { useTransition, useState, useEffect } from 'react';
import { UserList } from '@/features/users/components/UserList';
import { Button } from '@/shared/components/ui/Button';
import { CreateUserModal } from '@/features/users/modals/CreateUserModal';
import { Spinner } from '@/shared/components/ui/Spinner';

export default function Users() {
  const [showList, setShowList] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowList(true);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">👤 Users List</h1>
          <Button
            size="sm"
            onClick={() => setModalOpen(true)}
            type="button"
            variant="primary"
          >
            Create User
          </Button>
        </div>

        {modalOpen && <CreateUserModal onClose={() => setModalOpen(false)} />}

        {isPending && (
          <div className="flex justify-center py-6">
            <Spinner />
          </div>
        )}

        {showList && (
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow p-4 sm:p-6 transition-colors">
            <UserList />
          </div>
        )}
      </div>
    </main>
  );
}
