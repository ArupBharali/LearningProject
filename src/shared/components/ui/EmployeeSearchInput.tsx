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
    const res = await fetch(`/api/employees/search?query=${encodeURIComponent(q)}`);
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
        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-gray-900 
          text-gray-900 dark:text-gray-100 
          placeholder:text-gray-400 dark:placeholder:text-gray-500 
          rounded text-sm transition-colors"
        placeholder="Search employee..."
        onFocus={() => query && setShowDropdown(true)}
      />
      {showDropdown && results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full max-h-40 overflow-y-auto 
          border border-gray-300 dark:border-gray-700 
          bg-white dark:bg-gray-800 
          rounded shadow transition-colors">
          {results.map((emp) => (
            <li
              key={emp.id}
              onClick={() => handleSelect(emp)}
              className="px-2 py-1 cursor-pointer flex items-center gap-2 text-sm 
                hover:bg-gray-100 dark:hover:bg-gray-700 
                text-gray-800 dark:text-gray-100 transition-colors"
            >
              <img
                src={emp.photoUrl}
                alt={emp.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              {emp.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
