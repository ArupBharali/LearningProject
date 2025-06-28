'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/shared/store';
import { logout } from '@/shared/store/slices/authSlice';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/react-concepts', label: 'Interview Questions' },
  { href: '/products', label: 'Products' },
  { href: '/users', label: 'Users' },
  { href: '/cart', label: 'Cart' },
  { href: '/project-form', label: 'Projects' },
  { href: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm px-6 py-4">
      {/* <div className="bg-white text-black dark:bg-black dark:text-white p-4">
        Theme test block
      </div> */}

      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
          Cart India
        </h1>
        <ul className="flex gap-6 text-sm sm:text-base">
          <ThemeToggle />

          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className={`${isAuthenticated ? 'pt-1' : 'pt-0'}`}>
                <Link
                  href={href}
                  className={`${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                  } transition-colors duration-200`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {user?.avatar && (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border"
                    width={150}
                    height={150}
                  />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {user?.name}
                </span>
                <button
                  onClick={() => dispatch(logout())}
                  className="text-sm text-red-600 hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/register"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}
