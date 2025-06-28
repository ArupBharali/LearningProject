'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';

export default function NestedAllocationLogs({ index }: { index: number }) {
  const { control, register } = useFormContext();

  const {
    fields: logs,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `resources.extendedEmployees.${index}.allocationLogs`,
  });

  return (
    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg space-y-3 bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          📝 Allocation Logs for Employee {index + 1}
        </span>
        <button
          type="button"
          onClick={() =>
            append({
              timestamp: new Date().toISOString(),
              phase: '',
              allocation: 0,
              status: 'Planned',
              reviewer: '',
            })
          }
          className="text-sm text-blue-600 hover:underline"
        >
          ➕ Add Log
        </button>
      </div>

      {logs.map((log, logIndex) => (
        <div key={log.id} className="grid md:grid-cols-5 gap-4 items-end">
          <input
            type="text"
            placeholder="Phase"
            {...register(`resources.extendedEmployees.${index}.allocationLogs.${logIndex}.phase`)}
            className="input"
          />
          <input
            type="number"
            placeholder="%"
            {...register(`resources.extendedEmployees.${index}.allocationLogs.${logIndex}.allocation`, {
              valueAsNumber: true,
            })}
            className="input"
          />
          <select
            {...register(`resources.extendedEmployees.${index}.allocationLogs.${logIndex}.status`)}
            className="input"
          >
            <option value="">Status</option>
            <option value="Planned">Planned</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input
            type="text"
            placeholder="Reviewer"
            {...register(`resources.extendedEmployees.${index}.allocationLogs.${logIndex}.reviewer`)}
            className="input"
          />
          <button
            type="button"
            onClick={() => remove(logIndex)}
            className="text-sm text-red-600 hover:text-red-800"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
