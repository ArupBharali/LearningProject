// src/app/projects/page.tsx

import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';
import ProjectFormByIdPage from '@/features/projects/components/ProjectFormByIdPage';

type PageProps = {
  searchParams: Promise<{
    id: string;
    projectId: string;
    readOnly: boolean;
  }>;
};

export default async function ProjectViewEditPage({ searchParams }: PageProps) {
  const session = await auth();
  if (!session) redirect('/login');

  const { id, projectId, readOnly } = await searchParams;

  return (
    <ProjectFormByIdPage searchParams={{ id, projectId, readonly: readOnly }} />
  );
}
