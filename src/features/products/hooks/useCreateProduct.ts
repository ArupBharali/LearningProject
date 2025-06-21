import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "@/features/products/api";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,

    onMutate: async (newProduct) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previous = queryClient.getQueryData(["products"]);
      return { previous };
    },

    onSuccess: (data, variables, context) => {
      console.log("✅ Successfully created:", data);

      // Invalidate the product list so it refetches from the server
      queryClient.invalidateQueries({ queryKey: ["products"] });

      // Optionally show a toast, reset form, or redirect
    },

    onError: (error, newProduct, context) => {
      console.error("❌ Create failed:", error);
      queryClient.setQueryData(["products"], context?.previous);
    },

    onSettled: (data, error, variables, context) => {
      console.log("🎯 Mutation complete");

      // Safely ensure UI cleanup (spinner stop, button re-enable, etc.)
      // You can still invalidate queries here if not done in onSuccess
    },
  });
}
