// schema.ts
import { z } from 'zod';

export const stockRequestSchema = z.object({
  requester: z.string().min(1),
  department: z.string().min(1),
  requestDate: z.string().datetime(),
  items: z.array(z.object({
    sku: z.string().min(1),
    quantity: z.number().min(1),
    description: z.string().optional(),
  })),
  approval: z.object({
    approver: z.string().min(1),
    comments: z.string().optional(),
    priority: z.enum(['Low', 'Medium', 'High']),
  }),
});

export type StockRequestFormType = z.infer<typeof stockRequestSchema>;
