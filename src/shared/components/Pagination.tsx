// src/shared/components/Pagination.tsx
'use client';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 my-4 transition-colors duration-300">
      <button
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-3 py-1 rounded 
          bg-gray-200 dark:bg-gray-700 
          text-gray-800 dark:text-gray-100 
          hover:bg-gray-300 dark:hover:bg-gray-600 
          disabled:opacity-50 transition-colors"
      >
        ← Prev
      </button>
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
        className="px-3 py-1 rounded 
          bg-gray-200 dark:bg-gray-700 
          text-gray-800 dark:text-gray-100 
          hover:bg-gray-300 dark:hover:bg-gray-600 
          disabled:opacity-50 transition-colors"
      >
        Next →
      </button>
    </div>
  );
}
