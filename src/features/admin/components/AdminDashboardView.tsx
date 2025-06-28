'use client';

import { OverviewCards } from './OverviewCards';
import { SystemSummary } from './SystemSummary';
import { AccessTable } from './AccessTable';

export function AdminDashboardView() {
  return (
    <main
      className="transition-colors duration-300 flex-1 p-6 space-y-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">
          🛡️ Admin Control Center
        </h1>
      </div>

      {/* Summary Overview Cards */}
      <OverviewCards />

      {/* Detailed System Insights */}
      <SystemSummary />

      {/* Permission/Access Table */}
      <AccessTable />
    </main>
  );
}
