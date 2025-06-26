export function SystemSummary() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">System Configuration</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
        <li><strong>Region:</strong> US East (N. Virginia)</li>
        <li><strong>Environment:</strong> Production</li>
        <li><strong>Database:</strong> PostgreSQL 14</li>
        <li><strong>Audit Retention:</strong> 90 days</li>
        <li><strong>Services Online:</strong> 27</li>
        <li><strong>Active Alerts:</strong> 0</li>
      </ul>
    </section>
  );
}
