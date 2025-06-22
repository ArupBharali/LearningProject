'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/shared/store';
import { toggleSidebar } from '@/shared/store/slices/uiSlice';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Optional icon (Heroicons)

export function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const dispatch = useDispatch();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Sidebar</h2>
        <button onClick={() => dispatch(toggleSidebar())}>
          <XMarkIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <nav className="p-4 space-y-2">
        <a href="/" className="block text-gray-700 hover:text-blue-600">
          Dashboard
        </a>
        <a href="/products" className="block text-gray-700 hover:text-blue-600">
          Products
        </a>
        <a href="/users" className="block text-gray-700 hover:text-blue-600">
          Users
        </a>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
}
