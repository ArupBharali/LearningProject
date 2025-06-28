'use client';

import { useFormContext } from 'react-hook-form';
import { InputField } from '@/shared/components/ui/InputField';

export default function SectionApproval() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">✅ Approval Details</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Approver Name"
          placeholder="e.g. John Doe"
          {...register('approval.approver')}
          error={errors?.approval?.approver?.message}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Priority
          </label>
          <select
            {...register('approval.priority')}
            className="rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors?.approval?.priority?.message && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.approval.priority.message}
            </p>
          )}
        </div>
      </div>

      <InputField
        label="Comments (Optional)"
        placeholder="Any special instructions..."
        {...register('approval.comments')}
        error={errors?.approval?.comments?.message}
      />
    </section>
  );
}
