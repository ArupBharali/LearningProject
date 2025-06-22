// src/features/users/components/UserMeta.tsx
interface UserMetaProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export function UserMeta({ id, createdAt, updatedAt, isActive }: UserMetaProps) {
  return (
    <section className="space-y-2">
      <MetaItem label="Account Status" value={isActive ? 'Active' : 'Inactive'} />
      <MetaItem label="User ID" value={id} />
      <MetaItem label="Created" value={new Date(createdAt).toLocaleString()} />
      <MetaItem label="Last Updated" value={new Date(updatedAt).toLocaleString()} />
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-500">{label}</h2>
      <p>{value}</p>
    </div>
  );
}
