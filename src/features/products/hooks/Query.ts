import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '@/features/products/api';
import { CreateProductInput } from '../schema';

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<CreateProductInput> }) =>
      updateProduct(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (err) => {
      console.error('❌ Update failed:', err);
    },
  });
}
