import getDb from '@/lib/db/project-draft';
import { ProjectFormData } from '../../schema';

export async function loadProjectById(
  projectId: string
): Promise<ProjectFormData | null> {
  const db = await getDb();

  // Alternative: search by both user + projectId
  const entry = db.data?.find((p) => p.projectId === projectId);

  return entry ?? null;
}
