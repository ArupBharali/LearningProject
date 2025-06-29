// src/app/stock-request/page.tsx
'use client';

import { StockRequestForm } from '@/features/stock-request/components/StockRequestForm';

export default function StockRequestPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">🧾 New Stock Request</h1>
      <StockRequestForm />
    </div>
  );
}
