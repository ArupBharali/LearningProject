'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';

export default function Step2Timeline() {
console.log('src/features/project-form/components/steps/Step1GeneralInfo.tsx/Step2Timeline');

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields: phaseFields, append: appendPhase, remove: removePhase } = useFieldArray({
    control,
    name: 'timeline.phases',
  });

  const { fields: milestoneFields, append: appendMilestone, remove: removeMilestone } = useFieldArray({
    control,
    name: 'timeline.milestones',
  });

  const Label = ({
    children,
    tooltip,
  }: {
    children: string;
    tooltip?: string;
  }) => (
    <label className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
      {children}
      {tooltip && (
        <span className="text-xs text-gray-400 cursor-help" title={tooltip}>
          ⓘ
        </span>
      )}
    </label>
  );

  const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      {...props}
      className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  );

  return (
    <section className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          📆 Project Timeline
        </h2>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label tooltip="Planned project commencement date.">Start Date</Label>
            <Input type="date" {...register('timeline.startDate')} />
            {errors?.timeline?.startDate?.message && (
              <p className="text-xs text-red-500 mt-1">{errors.timeline.startDate.message}</p>
            )}
          </div>

          <div>
            <Label tooltip="Target date for final delivery or closure.">End Date</Label>
            <Input type="date" {...register('timeline.endDate')} />
            {errors?.timeline?.endDate?.message && (
              <p className="text-xs text-red-500 mt-1">{errors.timeline.endDate.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label tooltip="Number of acceptable buffer days if delays occur.">Delay Tolerance (Days)</Label>
            <Input type="number" {...register('timeline.delayTolerance', { valueAsNumber: true })} />
            {errors?.timeline?.delayTolerance?.message && (
              <p className="text-xs text-red-500 mt-1">{errors.timeline.delayTolerance.message}</p>
            )}
          </div>

          <div>
            <Label tooltip="Preferred format for initial project initiation.">Kickoff Method</Label>
            <select
              {...register('timeline.kickoffMethod')}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="In-person">In-person</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {errors?.timeline?.kickoffMethod?.message && (
              <p className="text-xs text-red-500 mt-1">{errors.timeline.kickoffMethod.message}</p>
            )}
          </div>
        </div>

        {/* Project Phases */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">📊 Project Phases</h3>
            <button
              type="button"
              onClick={() => appendPhase({ label: '', from: '', to: '' })}
              className="text-sm text-blue-600 hover:underline"
            >
              ➕ Add Phase
            </button>
          </div>

          {phaseFields.map((field, index) => (
            <div key={field.id} className="grid md:grid-cols-4 gap-4 items-end">
              <div>
                <Label>Phase</Label>
                <Input
                  placeholder="e.g. Discovery"
                  {...register(`timeline.phases.${index}.label`)}
                />
              </div>
              <div>
                <Label>From</Label>
                <Input
                  type="date"
                  {...register(`timeline.phases.${index}.from`)}
                />
              </div>
              <div>
                <Label>To</Label>
                <Input
                  type="date"
                  {...register(`timeline.phases.${index}.to`)}
                />
              </div>
              <button
                type="button"
                onClick={() => removePhase(index)}
                className="text-red-600 hover:text-red-800 text-sm mt-6"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">🗓️ Milestones</h3>
            <button
              type="button"
              onClick={() => appendMilestone({ title: '', deadline: '', owner: '' })}
              className="text-sm text-blue-600 hover:underline"
            >
              ➕ Add Milestone
            </button>
          </div>

          {milestoneFields.map((field, index) => (
            <div key={field.id} className="grid md:grid-cols-4 gap-4 items-end">
              <div>
                <Label>Title</Label>
                <Input
                  placeholder="e.g. Phase 1 Handoff"
                  {...register(`timeline.milestones.${index}.title`)}
                />
              </div>
              <div>
                <Label>Deadline</Label>
                <Input
                  type="date"
                  {...register(`timeline.milestones.${index}.deadline`)}
                />
              </div>
              <div>
                <Label>Owner</Label>
                <Input
                  placeholder="e.g. PMO, Lead Dev"
                  {...register(`timeline.milestones.${index}.owner`)}
                />
              </div>
              <button
                type="button"
                onClick={() => removeMilestone(index)}
                className="text-red-600 hover:text-red-800 text-sm mt-6"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
