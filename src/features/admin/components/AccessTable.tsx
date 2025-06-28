'use client';

import { useState } from 'react';
import { users } from '../data/mockAdminData';

export function AccessTable() {
  const [filter, setFilter] = useState('');

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">Access Control</h2>
        <input
          type="text"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm rounded px-2 py-1 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors"
          placeholder="Search user..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <table className="w-full text-sm text-left">
        <thead className="text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="py-2 font-medium">Name</th>
            <th className="font-medium">Role</th>
            <th className="font-medium">Status</th>
            <th className="font-medium">Last Login</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="py-2">{user.name}</td>
              <td>{user.role}</td>
              <td
                className={`font-medium ${
                  user.status === 'Active'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-yellow-600 dark:text-yellow-400'
                }`}
              >
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
