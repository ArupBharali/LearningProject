'use client';

import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '@/shared/store/slices/uiSlice';
import { RootState } from '@/shared/store';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ReactNode } from 'react';

type SidebarProps = {
  title: string;
  links: { label: string; href: string; icon: ReactNode }[];
};

export function Sidebar({ title, links }: SidebarProps) {
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const dispatch = useDispatch();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-[64px] left-0 bottom-0 w-64
        bg-white dark:bg-gray-900
        text-gray-800 dark:text-gray-100
        shadow-md border-r border-gray-200 dark:border-gray-700
        z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={() => dispatch(toggleSidebar())}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-2 py-1 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:dark:bg-gray-800 hover:text-blue-600 transition-colors"
            >
              <div className="w-5 h-5 text-gray-500 dark:text-gray-300">{link.icon}</div>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sticky Toggle Bar */}
      {!isOpen && (
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2
          bg-white dark:bg-gray-900
          border border-gray-300 dark:border-gray-700
          rounded-r-md shadow px-1.5 py-2
          hover:bg-gray-100 hover:dark:bg-gray-800
          transition"
          aria-label="Expand sidebar"
        >
          <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </button>
      )}
    </>
  );
}
