// src/app/users/[id]/page.tsx
import { notFound } from 'next/navigation';
import { fetchUserById } from '@/features/users/api';
import { parseUser } from '@/features/users/schema';
import { UserProfileCard } from '@/features/users/components/UserProfileCard';
import { UserMeta } from '@/features/users/components/UserMeta';
import { UserActions } from '@/features/users/components/UserActions';
import AuthWrapper from '@/shared/components/AuthWrapper';

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // console.log('UserDetailPage params', await params.id);
  const data = await fetchUserById(params.id)
    .then((res) => {
      // console.log('src/app/users/[id]/page.tsx UserDetailPage res', res);
      return res;
    })
    .catch((err) => console.error('fetchUserById error', err));

  if (!data) return notFound();

  const user = parseUser(data);

  return (
    <AuthWrapper allowedRoles={['admin']}>
      <main className="max-w-3xl mx-auto p-8">
        <UserProfileCard id={user.id} />
        <UserMeta
          id={user.id}
          createdAt={user.createdAt}
          updatedAt={user.updatedAt}
          isActive={user.isActive}
        />
        <UserActions />
      </main>
    </AuthWrapper>
  );
}
