// src/app/employees-grid/page.tsx
'use client';

import { EditableEmployeeGrid } from '@/shared/components/ui/EditableEmployeeGrid';

export default function EmployeesGridPage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 tracking-tight">
          🧾 Update Employee Data
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors">
          <EditableEmployeeGrid />
        </div>
      </div>
    </main>
  );
}
