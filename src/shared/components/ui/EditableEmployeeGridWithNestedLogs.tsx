'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import NestedAllocationLogs from './NestedAllocationLogs';
import React from 'react';

export default function EditableEmployeeGridWithNestedLogs() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const {
    fields: employeeFields,
    append: appendEmployee,
  } = useFieldArray({
    control,
    name: 'resources.extendedEmployees',
  });

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (index: number) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  // Auto-add first employee if empty on mount
  useEffect(() => {
    if (employeeFields.length === 0) {
      appendEmployee({
        id: Date.now().toString(),
        name: '',
        phone: '',
        joiningDate: '',
        comment: '',
        los: '',
        sbu: '',
        subSbu: '',
        competency: '',
        allocationLogs: [],
      });
    }
  }, [employeeFields, appendEmployee]);

  return (
    <div className="space-y-6 overflow-x-auto">
      <table className="min-w-[1000px] table-fixed border border-gray-200 dark:border-gray-700 text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="w-48 px-2 py-2">Name</th>
            <th className="w-32 px-2 py-2">Phone</th>
            <th className="w-40 px-2 py-2">Joining Date</th>
            <th className="w-56 px-2 py-2">Comment</th>
            <th className="w-20 px-2 py-2">Logs</th>
          </tr>
        </thead>
        <tbody>
          {employeeFields.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr className="border-t border-gray-300 dark:border-gray-700">
                <td className="px-2 py-1">
                  <input
                    {...register(`resources.extendedEmployees.${index}.name`)}
                    className="input w-full"
                  />
                </td>
                <td className="px-2 py-1">
                  <input
                    {...register(`resources.extendedEmployees.${index}.phone`)}
                    className="input w-full"
                  />
                </td>
                <td className="px-2 py-1">
                  <input
                    type="date"
                    {...register(`resources.extendedEmployees.${index}.joiningDate`)}
                    className="input w-full"
                  />
                </td>
                <td className="px-2 py-1">
                  <input
                    {...register(`resources.extendedEmployees.${index}.comment`)}
                    className="input w-full"
                  />
                </td>
                <td className="px-2 py-1 text-center">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {expanded[index] ? 'Hide' : 'Show'}
                  </button>
                </td>
              </tr>

              {expanded[index] && (
                <tr>
                  <td colSpan={5}>
                    <NestedAllocationLogs index={index} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button
          type="button"
          onClick={() =>
            appendEmployee({
              id: Date.now().toString(),
              name: '',
              phone: '',
              joiningDate: '',
              comment: '',
              los: '',
              sbu: '',
              subSbu: '',
              competency: '',
              allocationLogs: [],
            })
          }
          className="text-sm text-blue-600 hover:underline"
        >
          ➕ Add Employee
        </button>
      </div>
    </div>
  );
}
