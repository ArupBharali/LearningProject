// src/app/project-form/page.tsx
import { loadDraft } from '@/features/project-form/api/draft/loadDraft';
import ProjectFormWizard from '@/features/project-form/components/ProjectFormWizard';
import { INITIAL_DATA } from '@/features/project-form/schema';
import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';

export default async function ProjectFormPage() {
  console.log('src/app/project-form/page.tsx/ProjectFormPage');
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  // console.log('src/app/project-form/page.tsx ProjectFormPage session', session);
  const res = await loadDraft(session.user.email);

  const defaultValues = res.draft?.data ?? INITIAL_DATA;

  return <ProjectFormWizard defaultValues={defaultValues} />;
}
