'use client';

import { useState } from 'react';
import { Button } from '@/shared/components/ui/Button';
import { EditUserModal } from '@/features/users/modals/EditUserModal';
import { ConfirmDeleteModal } from '@/features/users/modals/ConfirmDeleteModal';

export function EditableUserRow({ user, serial }: { user: any, serial: number }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-md mb-4">
      <p className="m-0">
        <strong>{serial} - {user.name}</strong> — ${user.email} (Role: {user.role})
      </p>
      <div className="flex gap-2">
        <Button onClick={() => setEditOpen(true)}>Edit</Button>
        <Button variant="danger" onClick={() => setDeleteOpen(true)}>
          Delete
        </Button>
      </div>

      {editOpen && (
        <EditUserModal
          user={user}
          onClose={() => setEditOpen(false)}
        />
      )}
      {deleteOpen && (
        <ConfirmDeleteModal
          id={user.id}
          onClose={() => setDeleteOpen(false)}
        />
      )}
    </div>
  );
}
