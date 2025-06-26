import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '@/features/users/api';

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });
      const previous = queryClient.getQueryData(['users']);
      return { previous };
    },

    onSuccess: (data, variables, context) => {
      console.log('✅ Successfully created:', data);

      // Invalidate the product list so it refetches from the server
      queryClient.invalidateQueries({ queryKey: ['users'] });

      // Optionally show a toast, reset form, or redirect
    },

    onError: (error, newProduct, context) => {
      console.error('❌ Create failed:', error);
      queryClient.setQueryData(['users'], context?.previous);
    },

    onSettled: (data, error, variables, context) => {
      console.log('🎯 Mutation complete');

      // Safely ensure UI cleanup (spinner stop, button re-enable, etc.)
      // You can still invalidate queries here if not done in onSuccess
    },
  });
}
