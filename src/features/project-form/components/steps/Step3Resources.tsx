'use client';

import { useFormContext, useFieldArray, useWatch } from 'react-hook-form';
import { EditableEmployeeGrid } from '@/shared/components/ui/EditableEmployeeGrid';
import EditableEmployeeGridWithNestedLogs from '@/shared/components/ui/EditableEmployeeGridWithNestedLogs';

export default function Step3Resources() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({ control, name: 'resources.skillMatrix' });

  const extendedEmployees =
    useWatch({
      control,
      name: 'resources.extendedEmployees',
    }) || [];

  const Label = ({
    children,
    tooltip,
  }: {
    children: string;
    tooltip?: string;
  }) => (
    <label className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1">
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
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          👥 Team & Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label tooltip="Number of individuals planned to be staffed on this project.">
              Team Size
            </Label>
            <Input
              type="number"
              {...register('resources.teamSize', { valueAsNumber: true })}
            />
            {errors?.resources?.teamSize?.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.resources.teamSize.message}
              </p>
            )}
          </div>

          <div>
            <Label tooltip="Comma-separated list of org departments participating.">
              Departments
            </Label>
            <Input
              placeholder="e.g. Engineering, Risk, Sales"
              {...register('resources.departments')}
            />
            {errors?.resources?.departments?.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.resources.departments.message}
              </p>
            )}
          </div>

          <div>
            <Label tooltip="Key functional roles required for this delivery.">
              Roles Required
            </Label>
            <Input
              placeholder="e.g. PM, QA Lead, DevOps"
              {...register('resources.roles')}
            />
            {errors?.resources?.roles?.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.resources.roles.message}
              </p>
            )}
          </div>

          <div>
            <Label tooltip="Estimated total cost (people, vendors, travel, tools).">
              Budget Estimate
            </Label>
            <Input
              placeholder="e.g. 150000 USD"
              {...register('resources.budget')}
            />
            {errors?.resources?.budget?.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.resources.budget.message}
              </p>
            )}
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              📊 Skill Coverage Matrix
            </h3>
            <button
              type="button"
              onClick={() =>
                appendSkill({ skill: '', required: 0, available: 0 })
              }
              className="text-sm text-blue-600 hover:underline"
            >
              ➕ Add Skill
            </button>
          </div>

          {skillFields.map((field, index) => (
            <div key={field.id} className="grid md:grid-cols-4 gap-4 items-end">
              <div>
                <Label>Skill</Label>
                <Input
                  placeholder="e.g. React, SAP"
                  {...register(`resources.skillMatrix.${index}.skill`)}
                />
                {errors?.resources?.skillMatrix?.[index]?.skill?.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.resources.skillMatrix[index].skill.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Required</Label>
                <Input
                  type="number"
                  {...register(`resources.skillMatrix.${index}.required`, {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div>
                <Label>Available</Label>
                <Input
                  type="number"
                  {...register(`resources.skillMatrix.${index}.available`, {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-red-600 hover:text-red-800 text-sm mt-6"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Extended Grid */}
        <div className="space-y-4 border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            🧑‍💻 Extended Employee Grid
          </h4>
          <EditableEmployeeGrid
            value={extendedEmployees}
            onChange={(rows) => setValue('resources.extendedEmployees', rows)}
          />
        </div>

        {/* Extended Employee Allocation */}
        <div className="space-y-4 border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            🧑‍💻 Extended Employee Allocation
          </h4>
          <EditableEmployeeGridWithNestedLogs />
        </div>
      </div>
    </section>
  );
}
