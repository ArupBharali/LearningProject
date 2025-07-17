// src/app/stock-request/page.tsx

import { StockRequestForm } from '@/features/stock-request/components/StockRequestForm';
import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';

export default async function StockRequestPage() {
  const session = await auth();
  if (!session) redirect('/login');

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        🧾 New Stock Request
      </h1>
      <StockRequestForm />
    </div>
  );
}
