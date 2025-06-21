import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from "@/features/users/api";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => updateUser(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      console.error('❌ Update failed:', err);
    }
  });
}
