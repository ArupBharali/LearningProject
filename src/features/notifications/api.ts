//src/app/api/notifications.ts
import type { Notification } from '../../shared/types';
import { NotificationArraySchema } from '../../lib/schemas/notification';

export async function fetchNotifications(): Promise<Notification[]> {
  const res = await fetch('/api/notifications');
  if (!res.ok) throw new Error('Failed to load notifications');
  const data = await res.json();
  const parsed = NotificationArraySchema.safeParse(data);
  if (!parsed.success) {
    console.error('❌ Invalid notifications shape:', parsed.error.format());
    throw new Error('Invalid notifications data');
  }
  return parsed.data;
}

// Mutation APIs (assuming mock endpoints for demo)
export async function markNotificationAsRead(id: string) {
  const res = await fetch(`/api/notifications/${id}/read`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Failed to mark notification as read');
  return res.json();
}

export async function dismissNotification(id: string) {
  const res = await fetch(`/api/notifications/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to dismiss notification');
  return res.json();
}

export async function clearNotifications() {
  const res = await fetch('/api/notifications/clear', { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to clear notifications');
  return res.json();
}
