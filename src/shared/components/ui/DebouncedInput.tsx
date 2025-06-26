import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";
import { Column } from "@tanstack/react-table";
import { useEffect, useState } from "react";

export function DebouncedInput({ column }: { column: Column<any> }) {
  const [inputValue, setInputValue] = useState(
    (column.getFilterValue() ?? '') as string
  );
  const debouncedValue = useDebouncedValue(inputValue, 300);

  useEffect(() => {
    column.setFilterValue(debouncedValue);
  }, [debouncedValue, column]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
      className="mt-1 w-full px-2 py-1 text-sm border border-gray-300 rounded"
    />
  );
}
