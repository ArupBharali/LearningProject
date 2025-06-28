'use client';

import { useFormContext } from 'react-hook-form';

export default function Step5Review() {
  const { getValues } = useFormContext();
  const data = getValues();

  const FieldGrid = ({
    label,
    value,
  }: {
    label: string;
    value: any;
  }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 py-1">
      <dt className="text-gray-500 dark:text-gray-400 font-medium">{label}</dt>
      <dd className="sm:col-span-2 text-gray-900 dark:text-white">{value || '—'}</dd>
    </div>
  );

  const ListItem = ({ label, list }: { label: string; list: string[] }) => (
    <div className="mt-2">
      <p className="text-gray-500 dark:text-gray-400 font-medium">{label}:</p>
      <ul className="list-disc pl-5 mt-1 text-gray-900 dark:text-white text-sm">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          📋 Final Review Before Submission
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Confirm all project information before finalizing.
        </p>
      </div>

      {data.generalInfo?.tags && (
        <div className="flex flex-wrap gap-2 text-xs">
          {data.generalInfo.tags.split(',').map((tag: string, idx: number) => (
            <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">
              🏷️ {tag.trim()}
            </span>
          ))}
        </div>
      )}

      {/* General Info */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 text-gray-800 dark:text-gray-200">
          🧾 General Information
        </h4>
        <dl>
          <FieldGrid label="Project Name" value={data.generalInfo.name} />
          <FieldGrid label="Type" value={data.generalInfo.type} />
          <FieldGrid label="Code" value={data.generalInfo.code} />
          <FieldGrid label="Business Unit" value={data.generalInfo.businessUnit} />
          <FieldGrid label="Confidentiality Level" value={data.generalInfo.confidentiality} />
          <FieldGrid label="Description" value={data.generalInfo.description} />
        </dl>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 text-gray-800 dark:text-gray-200">
          📆 Timeline & Milestones
        </h4>
        <dl>
          <FieldGrid label="Start Date" value={data.timeline.startDate} />
          <FieldGrid label="End Date" value={data.timeline.endDate} />
          <FieldGrid label="Kickoff Method" value={data.timeline.kickoffMethod} />
          <FieldGrid label="Delay Tolerance" value={`${data.timeline.delayTolerance} days`} />
        </dl>
        <ListItem
          label="Phases"
          list={data.timeline.phases.map((p: any) => `${p.label} (${p.from} → ${p.to})`)}
        />
        <ListItem
          label="Milestones"
          list={data.timeline.milestones.map((m: any) => `${m.title} — ${m.deadline} (${m.owner})`)}
        />
      </div>

      {/* Resources */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 text-gray-800 dark:text-gray-200">
          👥 Team & Resource Planning
        </h4>
        <dl>
          <FieldGrid label="Team Size" value={data.resources.teamSize} />
          <FieldGrid label="Departments" value={data.resources.departments} />
          <FieldGrid label="Roles" value={data.resources.roles} />
          <FieldGrid label="Budget Estimate" value={data.resources.budget} />
        </dl>
        <ListItem
          label="Skills Matrix"
          list={data.resources.skillMatrix.map(
            (s: any) =>
              `${s.skill} — Required: ${s.required}, Available: ${s.available}, Gap: ${s.required - s.available}`
          )}
        />

        {data.resources.employees?.length > 0 && (
  <>
    <h5 className="text-sm font-semibold mt-4 mb-1 text-gray-700 dark:text-gray-200">Employee Allocation</h5>
    <ul className="text-sm list-disc pl-5 text-gray-800 dark:text-white">
      {data.resources.employees.map((emp: any, idx: number) => (
        <li key={idx}>
          {emp.name} — {emp.role}, {emp.department} ({emp.allocation}%)
        </li>
      ))}
    </ul>
  </>
)}

      </div>

      {/* Requirements */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 text-gray-800 dark:text-gray-200">
          🔐 Requirements & Integrations
        </h4>
        <dl>
          <FieldGrid label="Compliance Required" value={data.requirements.complianceNeeds ? 'Yes' : 'No'} />
          {data.requirements.complianceNeeds && (
            <>
              <FieldGrid label="Framework" value={data.requirements.complianceFramework} />
              <FieldGrid label="Security Level" value={data.requirements.securityLevel} />
              <FieldGrid label="Storage Policy" value={data.requirements.storagePolicy} />
            </>
          )}
          <FieldGrid label="Integrations" value={data.requirements.integrationTypes.join(', ') || 'None'} />
          {data.requirements.integrationTypes.some((t: string) =>
            t.toLowerCase().includes('cloud')
          ) && (
            <>
              <FieldGrid label="Cloud Provider" value={data.requirements.cloudProvider} />
              <FieldGrid label="Region" value={data.requirements.cloudRegion} />
              <FieldGrid label="Estimated Monthly Cost" value={`$${data.requirements.cloudCost}`} />
            </>
          )}
        </dl>
      </div>

      {/* Warnings */}
      <div className="text-red-600 dark:text-red-400 text-sm space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700 mt-6">
        {data.resources.skillMatrix.some((s: any) => s.required > s.available) && (
          <p>⚠️ Skill gap detected — consider rebalancing resource allocation.</p>
        )}
        {data.requirements.complianceNeeds && !data.requirements.storagePolicy && (
          <p>⚠️ Storage policy missing — required for compliance tagging.</p>
        )}
      </div>
    </section>
  );
}
