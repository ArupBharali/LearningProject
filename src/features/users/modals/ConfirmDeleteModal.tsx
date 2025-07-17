'use client';

import { useDeleteUser } from '@/features/users/hooks/useDeleteUser';
import { Button } from '@/shared/components/ui/Button';
import { toast } from 'react-hot-toast';

export function ConfirmDeleteModal({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { mutate, isPending } = useDeleteUser();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success('✅ User deleted successfully');
        onClose();
      },
      onError: () => {
        toast.error('Something went wrong while deleting.');
      },
    });
  };

  return (
    <div className="bg-white p-8 border-2 border-red-600 rounded-md shadow-md max-w-md">
      <h3 className="text-lg font-semibold mb-2">Confirm Delete</h3>
      <p className="text-sm text-gray-700">
        Are you sure you want to permanently delete this user?
      </p>
      <div className="flex gap-2 mt-4">
        <Button variant="danger" isLoading={isPending} onClick={handleDelete}>
          Yes, delete
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
