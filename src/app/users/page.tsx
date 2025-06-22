"use client";

import { useTransition, useState, useEffect } from "react";
import { UserList } from "@/features/users/components/UserList";
import { Button } from "@/shared/components/ui/Button";
import { CreateUserModal } from "@/features/users/modals/CreateUserModal";
import { Spinner } from "@/shared/components/ui/Spinner";
import {withAuthGuard} from '@/shared/guards/withAuthGuard';

function Users() {
  const [showList, setShowList] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowList(true);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            👤 Users List
          </h1>
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
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <UserList />
          </div>
        )}
      </div>
    </main>
  );
}

export default withAuthGuard(Users, ["admin"]);