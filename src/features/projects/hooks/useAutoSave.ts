import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { ProjectFormData } from '../schema';

export default function useAutoSave(
  projectId: string,
  watch: UseFormWatch<ProjectFormData>
) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const { data: session } = useSession();
  const userId = session?.user?.email;
  const hasMounted = useRef(false);

  const debouncedSave = useDebouncedCallback((formData: ProjectFormData) => {
  setStatus('saving');

  fetch(`/api/projects/${projectId}/draft`, {
    method: 'POST',
    body: JSON.stringify({
      updatedBy: userId,
      data: formData.data, // 👈 use passed-in data directly
    }),
  }).then(() => {
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2000);
  });
}, 1000);


  useEffect(() => {
    const subscription = watch((data: any) => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return; // skip first trigger
      }

      debouncedSave(data);
    });

    return () => subscription.unsubscribe();
  }, [debouncedSave, userId, watch]);

  return { status };
}
