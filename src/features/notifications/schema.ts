import { z } from 'zod';

export const NotificationSchema = z.object({
  id: z.string(),
  message: z.string(),
  read: z.boolean(),
  createdAt: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

export const NotificationArraySchema = z.array(NotificationSchema);
