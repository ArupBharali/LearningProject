'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema, ProjectFormData } from '../schema';
import useAutoSave from '../hooks/useAutoSave';
import Step1GeneralInfo from './steps/Step1GeneralInfo';
import Step2Timeline from './steps/Step2Timeline';
import Step3Resources from './steps/Step3Resources';
import Step4Requirements from './steps/Step4Requirements';
import Step5Review from './steps/Step5Review';
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';

const STEPS = [
  'General Info',
  'Timeline',
  'Resources',
  'Requirements',
  'Review',
];

type Props = {
  createdBy: string;
  projectId: string;
  defaultValues: ProjectFormData;
  readonly?: boolean;
};

export default function ProjectFormWizard({
  createdBy,
  projectId,
  defaultValues,
  readonly = false,
}: Props) {
  console.log('src/features/projects/components/ProjectFormWizard.tsx');

  const router = useRouter();

  const methods = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues,
    mode: 'onChange',
  });

  const step = methods.watch('step', 0);
  const setStep = (n: number) => methods.setValue('step', n);
  const { status } = useAutoSave(projectId, methods.watch);
  const { data: session } = useSession();
  const userId = session?.user?.email;

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const onSubmit = async (data: ProjectFormData) => {
    console.log('✅ Submitted project form:', data);

    try {
      const response = await fetch(`/api/projects/${projectId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: userId,
          data: {
            ...data,
            submittedAt: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) throw new Error('Submission failed.');

      alert('✅ Project successfully submitted!');
      router.push('/projects');
    } catch (error) {
      console.error('❌ Submit error:', error);
      alert('Something went wrong while submitting the project.');
    }
  };

  return (
    <FormProvider {...methods}>
      {readonly && (
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 px-4 py-2">
          <div className="p-3 mb-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded">
            🛈 You’re viewing a submitted project in <strong>read-only</strong>{' '}
            mode.
          </div>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
            🔒 Read-only Mode
          </span>
        </div>
      )}

      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center pt-3">
          <h2 className="text-xl font-bold">{STEPS[step]}</h2>
          <div className="text-right text-sm text-gray-500">
            {status === 'saving'
              ? 'Saving...'
              : status === 'idle'
              ? 'Idle'
              : 'Saved'}
          </div>
        </div>

        <fieldset disabled={readonly} className={readonly ? 'opacity-90' : ''}>
          {step === 0 && <Step1GeneralInfo />}
          {step === 1 && <Step2Timeline />}
          {step === 2 && <Step3Resources />}
          {step === 3 && <Step4Requirements />}
          {step === 4 && <Step5Review />}
        </fieldset>

        <div className="flex justify-between mt-6 pb-8">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-500 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1 dark:focus:ring-offset-gray-900 disabled:opacity-50"
          >
            ◀ Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 dark:focus:ring-offset-gray-900"
            >
              Next ▶
            </button>
          ) : (
            !readonly && (
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 dark:focus:ring-offset-gray-900"
              >
                ✅ Submit
              </button>
            )
          )}
        </div>
      </form>
    </FormProvider>
  );
}
