// src/app/employees-grid/page.tsx
import { EditableEmployeeGrid } from '@/shared/components/ui/EditableEmployeeGrid';

export default function EmployeesGridPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Update Employee Data</h1>
      <EditableEmployeeGrid />
    </main>
  );
}
