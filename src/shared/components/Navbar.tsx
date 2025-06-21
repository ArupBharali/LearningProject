// src/shared/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/users', label: 'Users' },
  { href: '/cart', label: 'Cart' },
  // Add more routes as needed
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b px-6 py-4 shadow-sm">
      <ul className="flex gap-4">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${
                pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-500 transition-colors`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
