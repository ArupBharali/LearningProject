'use client';

import { useState } from 'react';
import { useUpdateUser } from '@/features/users/hooks/useUpdateUser';
import { InputField } from '@/shared/components/ui/InputField';
import { Button } from '@/shared/components/ui/Button';

export function EditUserModal({
  user,
  onClose
}: {
  user: any;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email.toString(),
    role: user.role.toString()
  });
  const { mutate, isPending } = useUpdateUser();

  const handleSave = () => {
    mutate({
      id: user.id,
      updates: {
        name: form.name,
        email: parseFloat(form.email),
        role: parseInt(form.role)
      }
    });
    onClose();
  };

  return (
    <div className="bg-white p-8 border-2 border-gray-300 rounded-md shadow-sm max-w-md">
      <h3 className="text-lg font-semibold mb-4">Edit User</h3>
      <div className="space-y-4">
        <InputField
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm((f) => ({ ...f, name: e.target.value }))
          }
        />
        <InputField
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((f) => ({ ...f, email: e.target.value }))
          }
        />
        <InputField
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) =>
            setForm((f) => ({ ...f, role: e.target.value }))
          }
        />
      </div>
      <div className="flex gap-2 mt-6">
        <Button isLoading={isPending} onClick={handleSave} type="button">
          Save
        </Button>
        <Button variant="secondary" onClick={onClose} type="button">
          Cancel
        </Button>
      </div>
    </div>
  );
}
