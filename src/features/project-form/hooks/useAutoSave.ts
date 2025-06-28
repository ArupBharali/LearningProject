import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useAutoSave(watch: any) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const save = useDebouncedCallback(async (data) => {
    setStatus('saving');
    await fetch('/api/project/draft', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    setStatus('saved');
  }, 1000);

  useEffect(() => {
    const subscription = watch((data: any) => save(data));
    return () => subscription.unsubscribe();
  }, [watch]);

  return { status };
}
