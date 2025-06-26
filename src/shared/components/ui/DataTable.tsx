'use client';

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import React, { useState, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { DebouncedInput } from './DebouncedInput';

type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  page: number;
  filters: Record<string,string>;
  setFilters: React.Dispatch<React.SetStateAction<Record<string,string>>>;
};

export function DataTable<TData>({
  data,
  columns,
  page,
  filters,
  setFilters,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const parentRef = useRef<HTMLTableSectionElement>(null);
  // Inside your component
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: (updater) => {
      const updated =
        typeof updater === 'function' ? updater(columnFilters) : updater;
      setColumnFilters(updated);

      const mapped = updated.reduce((acc, cur) => {
        acc[cur.id] = cur.value as string;
        return acc;
      }, {} as Record<string, string>);

      setFilters(mapped);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: 'onChange', // optional for future resizable columns
    defaultColumn: { size: 150 }, // fallback width
    meta: {
      pageIndex: page - 1,
    },
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
    <div className="max-h-[300px] overflow-y-auto overflow-x-auto rounded-md border border-gray-200 dark:border-gray-700">
      <table className="table-fixed w-full min-w-[1000px] divide-y divide-gray-300 dark:divide-gray-700">
        {/* <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"> */}
        <thead className="bg-gray-300 dark:bg-gray-800 sticky top-0 z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: header.getSize() }} // ← this line
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-2 text-left text-sm font-semibold cursor-pointer select-none sticky top-0 z-10 tracker-wider border-b border-gray-200 dark:border-gray-700 backdrop-blur-md bg-opacity-90" 
                >
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === 'asc' && ' 🔼'}
                    {header.column.getIsSorted() === 'desc' && ' 🔽'}
                  </div>

                  {header.column.getCanFilter() && (
                    <DebouncedInput column={header.column} />
                  )}
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
                  <td
                    key={cell.id}
                    style={{ width: cell.column.getSize() }} // ← here too
                    className="px-4 py-2 text-sm"
                  >
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
