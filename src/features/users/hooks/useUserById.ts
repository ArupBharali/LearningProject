import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '@/features/users/api';

export function useUserById(id: string) {
  const query = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, // avoids firing if ID is undefined
  });

  return query;
}
