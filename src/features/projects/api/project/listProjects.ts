import getDb from '@/lib/db/project-draft';
import { ProjectEntry, ProjectFormData } from '../../schema';


export async function listUserProjects(userId: string): Promise<ProjectFormData[]> {
  const db = await getDb();

  if (!db?.data) return [];

  const projects = db.data.filter((project) => project.createdBy === userId);

  return projects;
}
