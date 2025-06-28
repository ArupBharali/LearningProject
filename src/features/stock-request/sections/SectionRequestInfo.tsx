'use client';

import { useFormContext } from 'react-hook-form';
import { InputField } from '@/shared/components/ui/InputField';

export default function SectionRequestInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">📋 Request Details</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Requester Name"
          placeholder="Jane Smith"
          {...register('requester')}
          error={errors.requester?.message}
        />

        <InputField
          label="Department"
          placeholder="Finance / Tech Consulting"
          {...register('department')}
          error={errors.department?.message}
        />
      </div>

      <InputField
        label="Request Date"
        type="datetime-local"
        {...register('requestDate')}
        error={errors.requestDate?.message}
      />
    </section>
  );
}
