import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchNotifications,
  markNotificationAsRead,
  dismissNotification,
  clearNotifications
} from '@/features/notifications/api';

export function useNotifications() {
    const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    staleTime: 30 * 1000, // optional: 30 seconds cache freshness
    refetchOnWindowFocus: false // optional: don't refetch on tab focus
  });

  const markAsRead = useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notifications'] })
  });

  const dismiss = useMutation({
    mutationFn: dismissNotification,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notifications'] })
  });

  const clearAll = useMutation({
    mutationFn: clearNotifications,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notifications'] })
  });

  return {
    ...query,
    markAsRead: markAsRead.mutate,
    dismiss: dismiss.mutate,
    clearAll: clearAll.mutate,
    isMarking: markAsRead.isPending,
    isDismissing: dismiss.isPending,
    isClearing: clearAll.isPending
  };
}
