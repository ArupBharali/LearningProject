import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from "@/features/products/api";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (err) => {
      console.error('❌ Delete failed:', err);
    }
  });
}
