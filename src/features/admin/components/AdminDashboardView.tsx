'use client';

import { OverviewCards } from './OverviewCards';
import { SystemSummary } from './SystemSummary';
import { AccessTable } from './AccessTable';
import { SidebarToggle } from '@/shared/components/SidebarToggle';

export function AdminDashboardView() {

  return (
    <main
      className={`transition-all duration-300 flex-1 p-6 space-y-6 bg-gray-50 min-h-screen}`}
    >
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Admin Control Center</h1>
      </div>
      <OverviewCards />
      <SystemSummary />
      <AccessTable />
    </main>
  );
}
