// src/types/react-table.d.ts
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface TableMeta {
    pageIndex: number;
  }
}
