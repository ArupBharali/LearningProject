'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store';
import { toggleTheme } from '@/shared/store/slices/themeSlice';

export function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="flex items-center gap-2 px-4 py-0 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
}
