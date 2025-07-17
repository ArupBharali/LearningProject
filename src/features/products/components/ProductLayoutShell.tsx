'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store';

export function ProductLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <div
      className={`flex-1 min-h-screen p-6 
        bg-gray-50 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 
        transition-all duration-300 ease-in-out 
        ${isOpen ? 'ml-64' : 'ml-0'}`}
    >
      {children}
    </div>
  );
}
