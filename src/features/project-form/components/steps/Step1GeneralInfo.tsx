'use client';

import { useFormContext } from 'react-hook-form';

export default function Step1GeneralInfo() {
console.log('src/features/project-form/components/steps/Step1GeneralInfo.tsx/Step1GeneralInfo');

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const Field = ({
    label,
    name,
    placeholder,
    tooltip,
    type = 'text',
    isTextArea = false,
  }: {
    label: string;
    name: string;
    placeholder?: string;
    tooltip?: string;
    type?: string;
    isTextArea?: boolean;
  }) => (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
        {label}
        {tooltip && (
          <span className="text-xs text-gray-400" title={tooltip}>
            ⓘ
          </span>
        )}
      </label>
      {isTextArea ? (
        <textarea
          {...register(name)}
          rows={4}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      )}
      {errors?.[name.split('.')?.[1]] && (
        <p className="text-xs text-red-500 mt-1">{(errors as any)[name.split('.')?.[1]]?.message}</p>
      )}
    </div>
  );

  return (
    <section className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          🧾 Project Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <Field
            name="generalInfo.name"
            label="Project Name"
            placeholder="e.g. Market Expansion"
            tooltip="Formal name used in dashboards, briefs, or invoices."
          />
          <Field
            name="generalInfo.sponsor"
            label="Sponsor"
            placeholder="e.g. Priya Mehta"
            tooltip="Person accountable for project success or funding."
          />
          <Field
            name="generalInfo.code"
            label="Project Code"
            placeholder="e.g. PROJ-2025-019"
            tooltip="Unique identifier used for tracking."
          />
          <Field
            name="generalInfo.businessUnit"
            label="Business Unit"
            placeholder="e.g. Strategy, Risk Advisory"
            tooltip="Org division that owns this initiative."
          />
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1 mb-1">
              Project Type <span title="Client-facing = External, Internal = in-house">ⓘ</span>
            </label>
            <select
              {...register('generalInfo.type')}
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Internal">Internal</option>
              <option value="External">External</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1 mb-1">
              Confidentiality Level <span title="Access classification of project data.">ⓘ</span>
            </label>
            <select
              {...register('generalInfo.confidentiality')}
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Public">Public</option>
              <option value="Internal">Internal</option>
              <option value="Restricted">Restricted</option>
            </select>
          </div>
          <Field
            name="generalInfo.relatedProjects"
            label="Related Projects"
            placeholder="e.g. Compliance Revamp, Innovation Pathway"
            tooltip="Names or codes of initiatives this connects with."
          />
          <Field
            name="generalInfo.tags"
            label="Tags"
            placeholder="e.g. ESG, Internal Ops, AI"
            tooltip="Comma-separated keywords for discoverability."
          />
        </div>

        <Field
          name="generalInfo.description"
          label="Project Description"
          isTextArea
          placeholder="Write a concise summary of objectives, scope, and intended value..."
          tooltip="Give context in ~2–4 sentences for stakeholders and reviewers."
        />
      </div>
    </section>
  );
}
