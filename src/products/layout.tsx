import { Sidebar } from '@/shared/components/ui/Sidebar';
import type { Metadata } from 'next';
import { ProductLayoutShell } from '@/features/products/components/ProductLayoutShell';
import {
  HomeIcon,
  CubeIcon,
  FolderIcon,
  Squares2X2Icon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Products',
};

const productLinks = [
  {
    label: 'Dashboard',
    href: '/products',
    icon: <HomeIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />,
  },
  {
    label: 'Products',
    href: '/products/list',
    icon: <CubeIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />,
  },
  {
    label: 'Categories',
    href: '/products/categories',
    icon: <FolderIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />,
  },
  {
    label: 'Stock Manager',
    href: '/products/inventory',
    icon: (
      <Squares2X2Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
    ),
  },
  {
    label: 'Pricing Rules',
    href: '/products/pricing',
    icon: (
      <CurrencyDollarIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
    ),
  },
  {
    label: 'Stock Request',
    href: '/products/stock-request',
    icon: (
      <CurrencyDollarIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
    ),
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Sidebar title="Product Catalog" links={productLinks} />
      <ProductLayoutShell>{children}</ProductLayoutShell>
    </div>
  );
}
