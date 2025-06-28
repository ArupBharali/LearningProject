'use client';

import { useFormContext, useFieldArray, useWatch } from 'react-hook-form';

export default function Step4Requirements() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const complianceNeeds = useWatch({ control, name: 'requirements.complianceNeeds' });
  const integrationTypes = useWatch({ control, name: 'requirements.integrationTypes' });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'requirements.integrationTypes',
  });

  const Label = ({ children, tooltip }: { children: string; tooltip?: string }) => (
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
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          🔐 Compliance & Integrations
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Declare any security, audit, or integration needs for this project.
        </p>

        {/* Compliance Toggle */}
        <div className="space-y-2">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <input type="checkbox" {...register('requirements.complianceNeeds')} />
            This project has compliance or audit obligations?
          </label>
        </div>

        {/* Compliance Fields */}
        {complianceNeeds && (
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div>
              <Label tooltip="Frameworks or standards to follow (e.g. SOX, ISO, GDPR)">Compliance Framework</Label>
              <Input
                placeholder="e.g. ISO 27001, GDPR"
                {...register('requirements.complianceFramework')}
              />
              {errors?.requirements?.complianceFramework?.message && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.requirements.complianceFramework.message}
                </p>
              )}
            </div>

            <div>
              <Label tooltip="Level of data privacy/sensitivity involved">Security Classification</Label>
              <select
                {...register('requirements.securityLevel')}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="PII">PII</option>
                <option value="PCI">PCI</option>
                <option value="GDPR">GDPR</option>
                <option value="None">None</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <Label tooltip="Describe encryption policies, residency, backups, etc.">Data Storage Policy</Label>
              <Input
                placeholder="e.g. Encrypted at rest, Region locked"
                {...register('requirements.storagePolicy')}
              />
              {errors?.requirements?.storagePolicy?.message && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.requirements.storagePolicy.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Integrations */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              🔌 Integration Types Required
            </h3>
            <button
              type="button"
              onClick={() => append('')}
              className="text-sm text-blue-600 hover:underline"
            >
              ➕ Add Integration
            </button>
          </div>

          {fields.map((field, idx) => (
            <div key={field.id} className="flex items-end gap-4">
              <div className="flex-1">
                <Label>Integration</Label>
                <Input
                  placeholder="e.g. Salesforce, Jira, SAP"
                  {...register(`requirements.integrationTypes.${idx}`)}
                />
                {errors?.requirements?.integrationTypes?.[idx]?.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.requirements.integrationTypes[idx].message}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => remove(idx)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                ✕ Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cloud Subsection */}
        {integrationTypes?.some((t: string) => t.toLowerCase().includes('cloud')) && (
          <div className="bg-gray-50 dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-lg p-5 space-y-4 mt-4">
            <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300">
              ☁️ Cloud Integration Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>Cloud Provider</Label>
                <Input
                  placeholder="e.g. AWS, Azure, GCP"
                  {...register('requirements.cloudProvider')}
                />
              </div>

              <div>
                <Label>Region</Label>
                <Input
                  placeholder="e.g. ap-south-1"
                  {...register('requirements.cloudRegion')}
                />
              </div>

              <div className="md:col-span-2">
                <Label>Estimated Monthly Cost ($)</Label>
                <Input
                  type="number"
                  {...register('requirements.cloudCost', { valueAsNumber: true })}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
