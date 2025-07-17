// src/app/projects/page.tsx
import ProjectFormWizard from '@/features/projects/components/ProjectFormWizard';
import { INITIAL_DATA } from '@/features/projects/schema';
import { auth } from '@/lib/auth/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProjectFormPage() {
  console.log('src/app/projects/page.tsx/ProjectFormPage');
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  // TODO
  // get the new project id from this route /api/projects/new
  // ✅ Request new projectId from API
  const cookieHeader = cookies().toString();

  const res = await fetch(`http://localhost:3000/api/projects/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      cookie: cookieHeader, // 👈 attach session manually
    },
  });

  if (!res.ok) {
    console.log('response ', res);
    throw new Error('Failed to create new project');
  }

  const { projectId } = await res.json();
  // console.log('src/app/projects/page.tsx ProjectFormPage session', session);

  const defaultValues = INITIAL_DATA;

  return (
    <ProjectFormWizard
      createdBy={session.user?.email??''}
      projectId={projectId}
      defaultValues={defaultValues}
    />
  );
}
