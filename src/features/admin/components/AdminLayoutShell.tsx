'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store';

export function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <div
      className={`flex-1 min-h-screen p-6 bg-gray-50 transition-all duration-300 ${
        isOpen ? 'ml-64' : 'ml-0'
      }`}
    >
      {children}
    </div>
  );
}
