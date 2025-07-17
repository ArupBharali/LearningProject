'use client';

import { useRouter } from 'next/navigation';

export function NewProjectButton() {
  const router = useRouter();

  const handleCreate = async () => {
    const res = await fetch('/api/projects/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({}), // no user info needed
    });

    const { projectId } = await res.json();
    router.push(`/projects/${projectId}/edit`);
  };

  return (
    <button
      onClick={handleCreate}
      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
    >
      + New Project
    </button>
  );
}
