import { useDebouncedValue } from '@/shared/hooks/useDebouncedValue';
import { Column } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

type DebouncedInputProps<T> = {
  column?: Column<T, unknown>; //optional if used outside react-table
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  debounceMs?: number;
  onDebounceTransform?: (raw: string) => string;
};

export function DebouncedInput<T>({
  column,
  value,
  onChange,
  placeholder = 'Search...',
  debounceMs = 300,
  onDebounceTransform,
}: DebouncedInputProps<T>) {
  const [inputValue, setInputValue] = useState(
    value ?? ((column?.getFilterValue() ?? '') as string) ?? ''
  );

  const debouncedValue = useDebouncedValue(inputValue, debounceMs);

  useEffect(() => {
    const cleaned = onDebounceTransform
      ? onDebounceTransform(debouncedValue)
      : debouncedValue;

    const prevValue = column?.getFilterValue() ?? '';

    if (column && cleaned !== prevValue) column.setFilterValue(cleaned);
    else if (!column && onChange) {
      onChange?.(cleaned);
    }
  }, [debouncedValue, column, onChange, onDebounceTransform]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      className="mt-1 w-full px-2 py-1 text-sm border border-gray-300 rounded"
    />
  );
}
