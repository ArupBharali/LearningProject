import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';
import { loadProjectById } from '@/features/projects/api/project/loadProjectById';
// import { INITIAL_DATA } from '@/features/projects/schema';
import ProjectFormWizard from '@/features/projects/components/ProjectFormWizard';
// import { useSession } from 'next-auth/react';

interface PageProps {
  searchParams: {
    id: string;
    projectId: string;
    readonly: boolean;
  };
}

export default async function ProjectFormByIdPage({ searchParams }: PageProps) {
  const session = await auth();
  if (!session) redirect('/login');

  const { projectId } = await searchParams;

  const project = await loadProjectById(projectId);

  const isOwner = project?.createdBy === session.user?.email;
  const isSubmitted = project?.status === 'submitted';

  // Final authority
  const readonly = !isOwner || isSubmitted;

  if (!project) {
    // optionally: check if user is authorized to view this project
    return (
      <div className="text-center text-red-600 mt-10">
        Project not found or access denied.
      </div>
    );
  }

  return (
    <ProjectFormWizard
      createdBy={project.createdBy}
      projectId={projectId}
      defaultValues={project}
      readonly={readonly}
    />
  );
}
