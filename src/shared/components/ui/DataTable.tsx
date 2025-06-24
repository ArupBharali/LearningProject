'use client';

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
} from '@tanstack/react-table';
import { useState, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
};

export function DataTable<TData>({ data, columns }: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const parentRef = useRef<HTMLTableSectionElement>(null);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 10,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 dark:border-gray-700">
      <table className="table-fixed w-full min-w-[1000px] divide-y divide-gray-300 dark:divide-gray-700">
        {/* <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"> */}
        <thead className="bg-gray-100 dark:bg-gray-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-2 text-left text-sm font-semibold cursor-pointer select-none"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === 'asc' && ' 🔼'}
                  {header.column.getIsSorted() === 'desc' && ' 🔽'}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          ref={parentRef}
          className="divide-y divide-gray-100 dark:divide-gray-800"
          style={{
            position: 'relative',
            height: `${totalSize}px`,
            overflowY: 'auto',
          }}
        >
          <tr style={{ height: `${totalSize}px` }} />
          {virtualRows.map((virtualRow) => {
            const row = table.getRowModel().rows[virtualRow.index];
            return (
              <tr
                key={row.id}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: `translateY(${virtualRow.start}px)`,
                  width: '100%',
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
