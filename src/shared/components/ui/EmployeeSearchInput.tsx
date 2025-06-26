'use client';

import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

type Employee = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  phone: string;
  joiningDate: string;
  los: string;
  sbu: string;
  subSbu: string;
  competency: string;
};

type Props = {
  value?: Employee;
  onSelect: (emp: Employee) => void;
};

export function EmployeeSearchInput({ value, onSelect }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Employee[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchEmployees = debounce(async (q: string) => {
    if (!q) return setResults([]);
    const res = await fetch(
      `/api/employees/search?query=${encodeURIComponent(q)}`
    );
    const data = await res.json();
    setResults(data);
    setShowDropdown(true);
  }, 300);

  useEffect(() => {
    fetchEmployees(query);
    return () => fetchEmployees.cancel();
  }, [query]);

  const handleSelect = (emp: Employee) => {
    setQuery(emp.name);
    setShowDropdown(false);
    onSelect(emp);
  };

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
        placeholder="Search employee..."
        onFocus={() => query && setShowDropdown(true)}
      />
      {showDropdown && results.length > 0 && (
        <ul className="absolute z-50 bg-white border border-gray-300 rounded shadow mt-1 w-full max-h-40 overflow-y-auto">
          {results.map((emp) => (
            <li
              key={emp.id}
              onClick={() => handleSelect(emp)}
              className="px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm flex items-center gap-2"
            >
              <img
                src={emp.photoUrl}
                alt={emp.name}
                className="w-6 h-6 rounded-full"
              />
              {emp.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
