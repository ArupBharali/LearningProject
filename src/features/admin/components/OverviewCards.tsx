import { MdShield, MdPeople, MdReceipt, MdSpeed } from 'react-icons/md';

export function OverviewCards() {
  const cards = [
    { label: 'Active Roles', value: 12, icon: <MdShield /> },
    { label: 'Users Online', value: 238, icon: <MdPeople /> },
    { label: 'Open Access Requests', value: 6, icon: <MdReceipt /> },
    { label: 'System Health', value: 'Good', icon: <MdSpeed /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map(({ label, value, icon }) => (
        <div
          key={label}
          className="p-4 rounded shadow-md bg-white dark:bg-gray-800 transition-colors duration-300 flex items-center gap-4"
        >
          <div className="text-3xl text-blue-600 dark:text-blue-400">{icon}</div>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
