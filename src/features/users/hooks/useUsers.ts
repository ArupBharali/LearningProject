import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsers } from '@/features/users/api';
import { useEffect } from 'react';

export function useUsers() {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const cached = queryClient.getQueryData(['users']);
    console.log('Is it cached? users', !!cached);

    queryClient
      .getQueryCache()
      .getAll()
      .forEach((q) => {
        console.log('Cached key:', q.queryKey);
      });
  }, [queryClient, query.dataUpdatedAt]);

  return query;
}
