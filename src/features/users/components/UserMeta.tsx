// src/features/users/components/UserMeta.tsx
interface UserMetaProps {
  id: string;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  isActive: boolean;
}

export function UserMeta({
  id,
  createdAt,
  updatedAt,
  isActive,
}: UserMetaProps) {

  const formatDate = (date?: string) => {
    return date? new Date(date).toLocaleString() : '-';
  }

  return (
    <section className="space-y-2">
      <MetaItem
        label="Account Status"
        value={isActive ? 'Active' : 'Inactive'}
      />
      <MetaItem label="User ID" value={id} />
      <MetaItem label="Created" value={formatDate(createdAt)} />
      <MetaItem
        label="Last Updated"
        value={formatDate(updatedAt)}
      />
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
