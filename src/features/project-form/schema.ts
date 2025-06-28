import { z } from 'zod';

export const generalInfoSchema = z.object({
  name: z.string().min(2, 'Project name must be at least 2 characters'),
  sponsor: z.string().min(2, 'Sponsor name must be at least 2 characters'),
  type: z.enum(['Internal', 'External'], {
    required_error: 'Project type is required',
  }),
  description: z.string().optional(),
  code: z.string().min(3, 'Project code must be at least 3 characters'),
  businessUnit: z.string().min(1, 'Business Unit is required'),
  confidentiality: z.enum(['Public', 'Internal', 'Restricted'], {
    required_error: 'Confidentiality level is required',
  }),
  relatedProjects: z.string().optional(),
  tags: z.string().optional(),
});

export const timelineSchema = z.object({
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  delayTolerance: z.number({
    required_error: 'Delay tolerance is required',
    invalid_type_error: 'Must be a number',
  }),
  kickoffMethod: z.enum(['In-person', 'Remote', 'Hybrid'], {
    required_error: 'Kickoff method is required',
  }),
  phases: z.array(
    z.object({
      label: z.string().min(1, 'Phase name is required'),
      from: z.string().min(1, 'Start date is required'),
      to: z.string().min(1, 'End date is required'),
    })
  ),
  milestones: z.array(
    z.object({
      title: z.string().min(1, 'Milestone title is required'),
      deadline: z.string().min(1, 'Deadline is required'),
      owner: z.string().min(1, 'Owner is required'),
    })
  ),
});

// Reusable nested log schema
const allocationLogSchema = z.object({
  timestamp: z.string(),
  phase: z.string().min(1, 'Phase is required'),
  allocation: z.number().min(0).max(100),
  status: z.enum(['Planned', 'Confirmed', 'Rejected']),
  reviewer: z.string().min(1, 'Reviewer is required'),
});

// Extended employee schema
const extendedEmployeeSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
  joiningDate: z.string().optional(),
  comment: z.string().optional(),
  los: z
    .string()
    .min(1, 'LOS is required')
    .refine((val) => val !== 'LOS', {
      message: 'Please select a valid LOS',
    }),
  sbu: z
    .string()
    .min(1, 'SBU is required')
    .refine((val) => val !== 'SBU', {
      message: 'Please select a valid SBU',
    }),
  subSbu: z
    .string()
    .min(1, 'Sub-SBU is required')
    .refine((val) => val !== 'SubSBU', {
      message: 'Please select a valid SubSBU',
    }),
  competency: z
    .string()
    .min(1, 'Competency is required')
    .refine((val) => val !== 'Competency', {
      message: 'Please select a valid Competency',
    }),
  allocationLogs: z
    .array(allocationLogSchema)
    .min(1, 'Add at least one log')
    .superRefine((logs, ctx) => {
      const total = logs.reduce((sum, l) => sum + l.allocation, 0);
      if (total > 100) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Total allocation cannot exceed 100%',
        });
      }
    }),
});

// Skill matrix row schema
const skillSchema = z.object({
  skill: z.string().min(1, 'Skill is required'),
  required: z.number().min(0),
  available: z.number().min(0),
});

// Entire resources block
export const resourcesSchema = z.object({
  teamSize: z.number().min(1, 'Team size is required'),
  departments: z.string().min(1, 'At least one department is required'),
  roles: z.string().optional(),
  budget: z.string().min(1, 'Budget is required'),
  skillMatrix: z.array(skillSchema),
  extendedEmployees: z
    .array(extendedEmployeeSchema)
    .min(1, 'Add at least one employee'),
});

export const requirementsSchema = z
  .object({
    complianceNeeds: z.boolean(),
    complianceFramework: z.string().optional(),
    securityLevel: z.enum(['PII', 'PCI', 'GDPR', 'None']).optional(),
    storagePolicy: z.string().optional(),

    integrationTypes: z
      .array(z.string().min(1, 'Integration type is required'))
      .min(0),

    cloudProvider: z.string().optional(),
    cloudRegion: z.string().optional(),
    cloudCost: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.complianceNeeds && !data.complianceFramework) {
      ctx.addIssue({
        path: ['complianceFramework'],
        code: z.ZodIssueCode.custom,
        message: 'Compliance framework is required when compliance is needed',
      });
    }

    if (
      data.integrationTypes.some((s) => s.toLowerCase().includes('cloud')) &&
      (!data.cloudProvider || !data.cloudRegion)
    ) {
      ctx.addIssue({
        path: ['cloudProvider'],
        code: z.ZodIssueCode.custom,
        message: 'Cloud provider is required for cloud integrations',
      });
    }
  });

export const projectSchema = z
  .object({
    step: z.number(), // keep track of current step
    generalInfo: generalInfoSchema,
    timeline: timelineSchema,
    resources: resourcesSchema,
    requirements: requirementsSchema,
    approval: z.object({
      reviewer: z.string(),
      notes: z.string().optional(),
    }),
  })
  .superRefine((data, ctx) => {
    // ⚠️ Timeline sanity
    if (data.timeline.startDate > data.timeline.endDate) {
      ctx.addIssue({
        path: ['timeline', 'endDate'],
        code: z.ZodIssueCode.custom,
        message: 'End date must be after start date',
      });
    }

    // 🧠 Skill gap warning
    const hasSkillGap = data.resources.skillMatrix.some(
      (s) => s.required > s.available
    );
    if (hasSkillGap) {
      ctx.addIssue({
        path: ['resources', 'skillMatrix'],
        code: z.ZodIssueCode.custom,
        message: 'One or more skills have unmet demand',
      });
    }

    // 🔐 Compliance flag but missing policy
    if (data.requirements.complianceNeeds && !data.requirements.storagePolicy) {
      ctx.addIssue({
        path: ['requirements', 'storagePolicy'],
        code: z.ZodIssueCode.custom,
        message: 'Storage policy is required for compliance tagging',
      });
    }

    // 💰 Budget must be specified if team is staffed
    if (data.resources.teamSize > 0 && !data.resources.budget.trim()) {
      ctx.addIssue({
        path: ['resources', 'budget'],
        code: z.ZodIssueCode.custom,
        message: 'Provide a budget estimate when team size is non-zero',
      });
    }

    // 🧮 Total allocation across extended employees must not exceed 100% x team size
    const totalAlloc = data.resources.extendedEmployees.reduce((sum, emp) => {
      const perEmp =
        emp.allocationLogs?.reduce((s, log) => s + log.allocation, 0) ?? 0;
      return sum + perEmp;
    }, 0);
    const allocCap = data.resources.teamSize * 100;
    if (totalAlloc > allocCap) {
      ctx.addIssue({
        path: ['resources', 'extendedEmployees'],
        code: z.ZodIssueCode.custom,
        message: `Total allocation (${totalAlloc}%) exceeds staffing capacity (${allocCap}%)`,
      });
    }
  });

export type ProjectFormData = z.infer<typeof projectSchema>;

export const INITIAL_DATA: ProjectFormData = {
  step: 1,
  generalInfo: {
    name: '',
    sponsor: '',
    type: 'Internal', // or ''
    description: '',
    code: '',
    businessUnit: '',
    confidentiality: 'Internal', // or ''
    relatedProjects: '',
    tags: '',
  },
  timeline: {
    startDate: '',
    endDate: '',
    delayTolerance: 0,
    kickoffMethod: 'In-person', // or ''
    phases: [],
    milestones: [],
  },
  resources: {
    teamSize: 0,
    departments: '',
    roles: '',
    budget: '',
    skillMatrix: [],
    extendedEmployees: [],
  },
  requirements: {
    complianceNeeds: false,
    complianceFramework: '',
    securityLevel: 'None',
    storagePolicy: '',
    integrationTypes: [],
    cloudProvider: '',
    cloudRegion: '',
    cloudCost: 0,
  },
  approval: {
    reviewer: '',
    notes: '',
  },
};
