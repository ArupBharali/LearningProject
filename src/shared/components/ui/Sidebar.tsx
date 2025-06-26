'use client';

import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '@/shared/store/slices/uiSlice';
import { RootState } from '@/shared/store';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type SidebarProps = {
  title: string;
  links: { label: string; href: string }[];
};

export function Sidebar({ title, links }: SidebarProps) {
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const dispatch = useDispatch();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md border-r z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button onClick={() => dispatch(toggleSidebar())}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sticky Toggle Bar */}
      {!isOpen && (
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2 bg-white border border-gray-300 rounded-r-md shadow px-1.5 py-2 hover:bg-gray-100 transition"
          aria-label="Expand sidebar"
        >
          <ChevronRightIcon className="h-4 w-4 text-gray-600" />
        </button>
      )}
    </>
  );
}
