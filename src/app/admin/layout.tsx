import { Sidebar } from '@/shared/components/ui/Sidebar';
import { AdminLayoutShell } from '@/features/admin/components/AdminLayoutShell';
import type { Metadata } from 'next';
import {
  HomeIcon,
  UsersIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

const adminLinks = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    label: 'Roles',
    href: '/admin/roles',
    icon: <UsersIcon className="w-5 h-5" />,
  },
  {
    label: 'Permissions',
    href: '/admin/permissions',
    icon: <ShieldCheckIcon className="w-5 h-5" />,
  },
  {
    label: 'Audit Logs',
    href: '/admin/audit',
    icon: <DocumentTextIcon className="w-5 h-5" />,
  },
  {
    label: 'Update Employee Data',
    href: '/admin/employees-grid',
    icon: <PencilSquareIcon className="w-5 h-5" />,
  },
];

export const metadata: Metadata = {
  title: 'Admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar title="Admin Tools" links={adminLinks} />
      <AdminLayoutShell>{children}</AdminLayoutShell>
    </div>
  );
}
