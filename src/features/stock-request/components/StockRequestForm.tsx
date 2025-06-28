'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { stockRequestSchema, StockRequestFormType } from '@/features/stock-request/schema';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';

import SectionRequestInfo from '@/features/stock-request/sections/SectionRequestInfo';
import SectionItemList from '@/features/stock-request/sections/SectionItemList';
import SectionApproval from '@/features/stock-request/sections/SectionApproval';
import { Button } from '@/shared/components/ui/Button';
import AutoSaveStatus from './AutoSaveStatus';

export function StockRequestForm({ draft }: { draft?: Partial<StockRequestFormType> }) {
  const methods = useForm<StockRequestFormType>({
    resolver: zodResolver(stockRequestSchema),
    defaultValues: draft,
    mode: 'onChange',
  });

  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const autoSave = useDebouncedCallback(async (data: StockRequestFormType) => {
    setStatus('saving');
    await fetch('/api/stock-request/draft', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    setStatus('saved');
  }, 1000);

  useEffect(() => {
    const subscription = methods.watch((data) => {
      if (methods.formState.isDirty) autoSave(data as StockRequestFormType);
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const onSubmit = async (values: StockRequestFormType) => {
    await fetch('/api/stock-request/submit', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    alert('Submitted successfully!');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <AutoSaveStatus status={status} />
        <SectionRequestInfo />
        <SectionItemList />
        <SectionApproval />

        <div className="text-right">
          <Button type="submit">🚀 Submit Request</Button>
        </div>
      </form>
    </FormProvider>
  );
}
