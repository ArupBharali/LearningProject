'use client';

import { useUsers } from '@/features/users/hooks/useUsers';
import { EditableUserRow } from '@/features/users/components/EditableUserRow';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { Pagination } from '@/shared/components/Pagination';
import { useState, useMemo } from 'react';
import { Spinner } from '@/shared/components/ui/Spinner';

const PAGE_SIZE = 50;
const ROW_HEIGHT = 70;

export function UserList() {
  const { data: users, isLoading, isFetched, isFetching, status } = useUsers();
  const [page, setPage] = useState(1);
  const totalPages = users ? Math.ceil(users.length / PAGE_SIZE) : 0;

  const paginatedUsers = useMemo(() => {
    if (!users) return [];
    const start = (page - 1) * PAGE_SIZE;
    return users.slice(start, start + PAGE_SIZE);
  }, [users, page]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const user = paginatedUsers[index];
    const serial = (page - 1) * PAGE_SIZE + index + 1;

    return user ? (
      <div style={style} className="transition-colors duration-300">
        <EditableUserRow user={user} serial={serial} />
      </div>
    ) : null;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-6">
        <Spinner />
      </div>
    );
  }

  if (!users || users.length === 0) {
    return <p className="text-gray-700 dark:text-gray-300">No Users found</p>;
  }

  return (
    <div className="transition-colors duration-300">
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      <div className="rounded-md border border-gray-200 dark:border-gray-700 mt-4 overflow-hidden">
        <List
          height={400}
          itemCount={paginatedUsers.length}
          itemSize={ROW_HEIGHT}
          width="100%"
        >
          {Row}
        </List>
      </div>
    </div>
  );
}
