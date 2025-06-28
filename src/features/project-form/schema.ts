import { z } from 'zod';

export const projectSchema = z.object({
  step: z.number(), // keep track of current step
  generalInfo: z.object({
  name: z.string().min(2),
  sponsor: z.string().min(2),
  type: z.enum(['Internal', 'External']),
  description: z.string().optional(),
  code: z.string().min(3),
  businessUnit: z.string(),
  confidentiality: z.enum(['Public', 'Internal', 'Restricted']),
  relatedProjects: z.string().optional(),
  tags: z.string().optional(),
}),
timeline: z.object({
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  delayTolerance: z.number(),
  kickoffMethod: z.enum(['In-person', 'Remote', 'Hybrid']),
  phases: z.array(z.object({
    label: z.string(),
    from: z.string(),
    to: z.string(),
  })),
  milestones: z.array(z.object({
    title: z.string(),
    deadline: z.string(),
    owner: z.string(),
  })),
}),
resources: z.object({
  teamSize: z.number(),
  departments: z.string().min(1),
  roles: z.string().optional(),
  budget: z.string(),
  skillMatrix: z.array(z.object({
    skill: z.string().min(1),
    required: z.number(),
    available: z.number(),
  })),
}),

  requirements: z.object({
  complianceNeeds: z.boolean(),
  complianceFramework: z.string().optional(),
  securityLevel: z.enum(['PII', 'PCI', 'GDPR', 'None']).optional(),
  storagePolicy: z.string().optional(),
  integrationTypes: z.array(z.string().min(1)),
  cloudProvider: z.string().optional(),
  cloudRegion: z.string().optional(),
  cloudCost: z.number().optional(),
}),

  approval: z.object({
    reviewer: z.string(),
    notes: z.string().optional(),
  }),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
