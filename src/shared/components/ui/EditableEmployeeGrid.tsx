'use client';

import { useEffect, useState } from 'react';
import { EmployeeRecord, NewGridRow } from '@/shared/types/employeeTypes';
import { EmployeeSearchInput } from './EmployeeSearchInput';
import { DropdownCascader } from './DropdownCascader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuid } from 'uuid';

export function EditableEmployeeGrid() {
  const [rows, setRows] = useState<NewGridRow[]>([]);
  const [relations, setRelations] = useState<any>();

  useEffect(() => {
    fetch('/api/employees/relations')
      .then(res => res.json())
      .then(setRelations);
  }, []);

  const updateRow = (id: string, updates: Partial<NewGridRow>) => {
    setRows(prev => prev.map(r => (r.id === id ? { ...r, ...updates } : r)));
  };

  const addRow = () => setRows(prev => [...prev, { id: uuid() }]);

  const saveRows = async () => {
    const res = await fetch('/api/employees/bulkUpdate', {
      method: 'POST',
      body: JSON.stringify(rows),
      headers: { 'Content-Type': 'application/json' },
    });
    alert((await res.json()).message);
  };

  return (
    <div>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th>Employee</th>
            <th>LOS</th>
            <th>SBU</th>
            <th>SubSBU</th>
            <th>Competency</th>
            <th>Phone</th>
            <th>Joining Date</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id} className="border-t">
              <td>
                <EmployeeSearchInput
                  value={row.employee}
                  onSelect={(emp) => {
  // First update parent values
  updateRow(row.id, {
    employee: emp,
    los: emp.los,
    sbu: emp.sbu,
    phone: emp.phone,
    joiningDate: emp.joiningDate,
    comment: emp.comment,
  });

  // Then defer subSbu + competency until parent renders settle
  setTimeout(() => {
    updateRow(row.id, {
      subSbu: emp.subSbu,
      competency: emp.competency,
    });
  }, 0);
}}

                />
              </td>
              <td colSpan={4}>
                {relations && (
                  <DropdownCascader
                    data={relations}
                    value={row}
                    onChange={(val) => updateRow(row.id, val)}
                  />
                )}
              </td>
              <td>
                <input
                  value={row.phone ?? ''}
                  onChange={e => updateRow(row.id, { phone: e.target.value })}
                  className="w-32 px-1 py-0.5 border"
                />
              </td>
              <td>
                <DatePicker
                  selected={row.joiningDate ? new Date(row.joiningDate) : null}
                  onChange={date => updateRow(row.id, { joiningDate: date?.toISOString() })}
                  dateFormat="yyyy-MM-dd"
                  className="w-32 px-1 py-0.5 border"
                />
              </td>
              <td>
                <input
                  value={row.comment ?? ''}
                  onChange={e => updateRow(row.id, { comment: e.target.value })}
                  className="w-48 px-1 py-0.5 border"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex gap-2">
        <button onClick={addRow} className="px-3 py-1 bg-blue-600 text-white rounded">Add Row</button>
        <button onClick={saveRows} className="px-3 py-1 bg-green-600 text-white rounded">Save All</button>
      </div>
    </div>
  );
}
