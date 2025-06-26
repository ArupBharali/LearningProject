import { Sidebar } from '@/shared/components/ui/Sidebar';
import { AdminLayoutShell } from '@/features/admin/components/AdminLayoutShell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar
        title="Admin Tools"
        links={[
          { label: 'Dashboard', href: '/admin' },
          { label: 'Roles', href: '/admin/roles' },
          { label: 'Permissions', href: '/admin/permissions' },
          { label: 'Audit Logs', href: '/admin/audit' },
          { label: 'Update Employee Data', href: '/admin/employees-grid' },
        ]}
      />
      <AdminLayoutShell>{children}</AdminLayoutShell>
    </div>
  );
}
