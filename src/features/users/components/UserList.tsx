"use client";

import { useUsers } from "@/features/users/hooks/useUsers";
import { EditableUserRow } from "@/features/users/components/EditableUserRow";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { Pagination } from "@/shared/components/Pagination";
import { useState, useMemo } from "react";

const PAGE_SIZE = 50;
const ROW_HEIGHT = 45; // or whatever fits your layout

export function UserList() {
  const { data: users, isLoading, isFetched, isFetching, status } = useUsers();
  const [page, setPage] = useState(1);
  const totalPages = users ? Math.ceil(users.length / PAGE_SIZE) : 0;

  const paginatedUsers = useMemo(() => {
    if (!users) return [];
    const start = (page - 1) * PAGE_SIZE;
    return users.slice(start, start + PAGE_SIZE);
  }, [users, page]);

  console.log("isLoading?", isLoading); // true if it's from cache or network
  console.log("isFetched?", isFetched); // true if it's from cache or network
  console.log("isFetching?", isFetching); // true if it's from cache or network
  console.log("Status:", status); // 'success', 'loading', etc.

  const Row = ({ index, style }: ListChildComponentProps) => {
    const user = paginatedUsers[index];
    const serial = (page - 1) * PAGE_SIZE + index + 1;

    return user ? (
      <div style={style}>
        <EditableUserRow user={user} serial={serial} />
      </div>
    ) : null;
  };

  if (isLoading) return <p className="text-gray-600">Loading users...</p>;
  if (!users || users.length === 0) return <p>No Users found</p>;

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      <List
        height={400}
        itemCount={paginatedUsers?.length}
        itemSize={ROW_HEIGHT}
        width="100%"
      >
        {Row}
      </List>
    </>
  );
}
