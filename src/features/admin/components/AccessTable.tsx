'use client';

import { useState } from 'react';
import { users } from '../data/mockAdminData';

export function AccessTable() {
  const [filter, setFilter] = useState('');

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="bg-white p-6 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Access Control</h2>
        <input
          type="text"
          className="border px-2 py-1 rounded text-sm"
          placeholder="Search user..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr>
            <th className="py-2">Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(user => (
            <tr key={user.id} className="border-t">
              <td className="py-2">{user.name}</td>
              <td>{user.role}</td>
              <td className={`font-medium ${user.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                {user.status}
              </td>
              <td>{user.lastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
