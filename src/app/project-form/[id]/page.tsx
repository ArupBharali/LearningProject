'use client';

import { useEffect, useState } from 'react';

export default function ProjectViewer({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/project/${params.id}`)
      .then((r) => r.json())
      .then(setData);
  }, [params.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">📁 Project: {data.generalInfo.name}</h1>
      <p>Status: <strong>{data.status}</strong></p>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>

      {/* 🔜 Add approve/reject buttons if current user.role matches action bucket */}
    </div>
  );
}
