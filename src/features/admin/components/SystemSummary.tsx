export function SystemSummary() {
  return (
    <section className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 tracking-tight">System Configuration</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
        <li>
          <strong className="font-medium text-gray-800 dark:text-gray-200">Region:</strong> US East (N. Virginia)
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-gray-200">Environment:</strong> Production
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-gray-200">Database:</strong> PostgreSQL 14
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-gray-200">Audit Retention:</strong> 90 days
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-gray-200">Services Online:</strong> 27
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-gray-200">Active Alerts:</strong> 0
        </li>
      </ul>
    </section>
  );
}
