import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/features/users/api';
import { User } from '../schema';

type UpdateUserInput = { id: string; updates: Partial<User> }
type UpdateUserResponse = User;
type UpdateUserError = Error;

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<UpdateUserResponse, UpdateUserError, UpdateUserInput>({
    mutationFn: ({ id, updates }: UpdateUserInput) =>
      updateUser(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      console.error('❌ Update failed:', err);
    },
  });
}
