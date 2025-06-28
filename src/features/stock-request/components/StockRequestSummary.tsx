'use client';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

export default function StockRequestSummary() {
  const { getValues } = useFormContext();
  const [open, setOpen] = useState(false);

  const values = getValues();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-2"
      >
        {open ? 'Hide Summary ▲' : 'Preview Summary ▼'}
      </button>

      {open && (
        <div className="text-sm text-gray-800 dark:text-gray-100 space-y-2">
          <div>
            <strong>Requester:</strong> {values.requester} ({values.department})
          </div>
          <div>
            <strong>Date:</strong> {values.requestDate}
          </div>

          <div>
            <strong>Items:</strong>
            <ul className="ml-4 list-disc">
              {(values.items ?? []).map((item, i) => (
                <li key={i}>
                  {item.quantity} × {item.sku} ({item.description || '—'})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Approver:</strong> {values.approval?.approver} — Priority: {values.approval?.priority}
          </div>
          {values.approval?.comments && (
            <div>
              <strong>Comments:</strong> {values.approval.comments}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
