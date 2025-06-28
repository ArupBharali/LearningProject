'use client';

import { useEffect, useState } from 'react';
import { EmployeeRecord, NewGridRow } from '@/shared/types/employeeTypes';
import { EmployeeSearchInput } from './EmployeeSearchInput';
import { DropdownCascader } from './DropdownCascader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuid } from 'uuid';
import { Button } from './Button';
import React from 'react';

export function EditableEmployeeGrid() {
  const [rows, setRows] = useState<NewGridRow[]>([]);
  const [relations, setRelations] = useState<any>();
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) =>
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));

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
          <col className="w-80" />
          <col className="w-80" />
          <col className="w-80" />
          <col className="w-80" />
          <col className="w-80" />
          <col className="w-80" />
          <col className="w-32" />
          <col className="w-40" />
          <col className="w-64" />
        </colgroup>

        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <th className="px-2 py-2 border-r dark:border-gray-700">
              Allocation History
            </th>
            <th className="px-2 py-2 border-r dark:border-gray-700">
              Employee
            </th>
            <th className="px-2 py-2 border-r dark:border-gray-700">LOS</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">SBU</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">SubSBU</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">
              Competency
            </th>
            <th className="px-2 py-2 border-r dark:border-gray-700">Phone</th>
            <th className="px-2 py-2 border-r dark:border-gray-700">
              Joining Date
            </th>
            <th className="px-2 py-2">Comment</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          {rows.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr
                key={row.id}
                className="border-t border-gray-200 dark:border-gray-800"
              >
                <td className="p-1 cursor-pointer text-blue-600 hover:underline">
                  <span onClick={() => toggleExpanded(row.id)}>
                    {/* {row.id.slice(0, 6)}... */}
                    {'View'}
                  </span>
                </td>
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
                    onChange={(e) =>
                      updateRow(row.id, { phone: e.target.value })
                    }
                    className="w-32 px-1 py-0.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded"
                  />
                </td>
                <td className="p-1">
                  <DatePicker
                    selected={
                      row.joiningDate ? new Date(row.joiningDate) : null
                    }
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

              {expandedRows[row.id] && (
                <tr>
                  <td
                    colSpan={8}
                    className="bg-gray-50 dark:bg-gray-900 px-4 py-2"
                  >
                    <div className="text-sm text-gray-700 dark:text-gray-200 font-medium mb-2">
                      📜 Allocation History
                    </div>
                    <table className="w-full text-xs border rounded overflow-hidden">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="px-2 py-1 text-left">Timestamp</th>
                          <th className="px-2 py-1 text-left">Phase</th>
                          <th className="px-2 py-1 text-left">Allocation</th>
                          <th className="px-2 py-1 text-left">Status</th>
                          <th className="px-2 py-1 text-left">Reviewer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {row.allocationLogs?.map((log, i) => (
                          <tr
                            key={i}
                            className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800"
                          >
                            <td className="px-2 py-1">
                              {new Date(log.timestamp).toLocaleString()}
                            </td>
                            <td className="px-2 py-1">{log.phase}</td>
                            <td className="px-2 py-1">{log.allocation}%</td>
                            <td className="px-2 py-1">{log.status}</td>
                            <td className="px-2 py-1">{log.reviewer}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex gap-2">

        <button
          type="button"
          onClick={addRow}
          className="text-sm text-blue-600 hover:underline"
        >
          ➕ Add Employee
        </button>
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
