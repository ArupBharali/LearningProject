'use client';

import { useEffect, useState } from 'react';

export default function AuditLogPage() {
  const [logs, setLogs] = useState<{by:string, at: string,action: string}[]>([]);

  useEffect(() => {
    fetch('/api/project/audit')
      .then((r) => r.json())
      .then(setLogs);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-2">
      <h1 className="text-xl font-semibold mb-2">🕵️ Audit Logs</h1>
      <ul className="text-sm space-y-1">
        {logs.map((log, i) => (
          <li key={i}>
            [{new Date(log.at).toLocaleString()}] <strong>{log.by}</strong>:{' '}
            {log.action}
          </li>
        ))}
      </ul>
    </div>
  );
}
