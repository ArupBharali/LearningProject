'use client';

import { useEffect, useState } from 'react';
import { EmployeeRecord, NewGridRow } from '@/shared/types/employeeTypes';
import { EmployeeSearchInput } from './EmployeeSearchInput';
import { DropdownCascader } from './DropdownCascader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuid } from 'uuid';
import { Button } from './Button';

export function EditableEmployeeGrid() {
  const [rows, setRows] = useState<NewGridRow[]>([]);
  const [relations, setRelations] = useState<any>();

  useEffect(() => {
    fetch('/api/employees/relations')
      .then((res) => res.json())
      .then(setRelations);
  }, []);

  const updateRow = (id: string, updates: Partial<NewGridRow>) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updates } : r))
    );
  };

  const addRow = () => setRows((prev) => [...prev, { id: uuid() }]);

  const saveRows = async () => {
    const res = await fetch('/api/employees/bulkUpdate', {
      method: 'POST',
      body: JSON.stringify(rows),
      headers: { 'Content-Type': 'application/json' },
    });
    alert((await res.json()).message);
  };

  return (
    <div className="w-full overflow-x-auto overflow-visible">
      <table className="min-w-[1200px] table-fixed text-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <colgroup>
          <col className="w-80" /> {/* Employee */}
          <col className="w-80" /> {/* LOS */}
          <col className="w-80" /> {/* SBU */}
          <col className="w-80" /> {/* SubSBU */}
          <col className="w-80" /> {/* Competency */}
          <col className="w-32" /> {/* Phone */}
          <col className="w-40" /> {/* Joining Date */}
          <col className="w-64" /> {/* Comment */}
        </colgroup>
        
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <th className="px-2 py-2 border-r dark:border-gray-700">Employee</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">LOS</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">SBU</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">SubSBU</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">Competency</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">Phone</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">Joining Date</th>
            <th className="px-2 py-2">Comment</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-gray-200 dark:border-gray-800">
              <td className="p-1">
                <EmployeeSearchInput
                  value={row.employee}
                  onSelect={(emp) => {
                    updateRow(row.id, {
                      employee: emp,
                      los: emp.los,
                      sbu: emp.sbu,
                      phone: emp.phone,
                      joiningDate: emp.joiningDate,
                      comment: emp.comment,
                    });
                    setTimeout(() => {
                      updateRow(row.id, {
                        subSbu: emp.subSbu,
                        competency: emp.competency,
                      });
                    }, 0);
                  }}
                />
              </td>
              <td colSpan={4} className="p-1">
                {relations && (
                  <DropdownCascader
                    data={relations}
                    value={row}
                    onChange={(val) => updateRow(row.id, val)}
                  />
                )}
              </td>
              <td className="p-1">
                <input
                  value={row.phone ?? ''}
                  onChange={(e) => updateRow(row.id, { phone: e.target.value })}
                  className="w-32 px-1 py-0.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded"
                />
              </td>
              <td className="p-1">
                <DatePicker
                  selected={row.joiningDate ? new Date(row.joiningDate) : null}
                  onChange={(date) =>
                    updateRow(row.id, { joiningDate: date?.toISOString() })
                  }
                  dateFormat="yyyy-MM-dd"
                  className="w-32 px-1 py-0.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded"
                />
              </td>
              <td className="p-1">
                <input
                  value={row.comment ?? ''}
                  onChange={(e) =>
                    updateRow(row.id, { comment: e.target.value })
                  }
                  className="w-48 px-1 py-0.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex gap-2">
        <Button
          size="sm"
          onClick={addRow}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
        >
          Add Row
        </Button>
        <Button
          size="sm"
          onClick={saveRows}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
        >
          Save All
        </Button>
      </div>
    </div>
  );
}
