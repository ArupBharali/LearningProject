import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/features/users/api';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      console.error('❌ Delete failed:', err);
    },
  });
}
