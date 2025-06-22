"use client";

import { useState } from "react";
import { Button } from "@/shared/components/ui/Button";
import { EditUserModal } from "@/features/users/modals/EditUserModal";
import { ConfirmDeleteModal } from "@/features/users/modals/ConfirmDeleteModal";
import Link from "next/link";

export function EditableUserRow({
  user,
  serial,
}: {
  user: any;
  serial: number;
}) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-md mb-4">
      <Link
        href={`users/${user.id}`}
        className="cursor-pointer text-gray-800 hover:text-blue-600 transition-colors"
      >
        <strong>
          {serial} - {user.name}
        </strong>{" "}
        — {user.email} (Role: {user.role})
      </Link>
      <div className="flex gap-2">
        <Button 
        size="sm" 
        onClick={() => setEditOpen(true)}
        variant="primary"
        outline
        >Edit
        </Button>
        <Button 
        size="sm" 
        variant="danger" 
        outline
        onClick={() => setDeleteOpen(true)}
        >
          Delete
        </Button>
      </div>

      {editOpen && (
        <EditUserModal user={user} onClose={() => setEditOpen(false)} />
      )}
      {deleteOpen && (
        <ConfirmDeleteModal id={user.id} onClose={() => setDeleteOpen(false)} />
      )}
    </div>
  );
}
