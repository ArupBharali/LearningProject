import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '@/features/auth/api';

export function useCurrentUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchCurrentUser,
  });
}
