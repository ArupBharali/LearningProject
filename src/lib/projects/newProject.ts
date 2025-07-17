// src/lib/projects/newProject.ts
import { v4 as uuidv4 } from 'uuid';
import getDb from '@/lib/db/project-draft';
import { INITIAL_DATA, ProjectFormData } from '@/features/projects/schema';

export async function createNewProject(createdBy: string): Promise<string> {
  const db = await getDb();
  const projectId = uuidv4();
  const now = new Date().toISOString();

  const newProject: ProjectFormData = {
    ...INITIAL_DATA,
    projectId,
    createdBy,
    createdAt: now,
    updatedBy: createdBy,
    updatedAt: now,
    status: 'draft',
    isArchived: false,
  };

  db.data!.push(newProject);
  await db.write();

  return projectId;
}
