import { auth } from '@/lib/auth/auth';
import AuthWrapper from '@/shared/components/AuthWrapper';
import { redirect } from 'next/navigation';

function Cart1() {
  return <h2>Under Development</h2>;
}

export default async function Cart() {
  const session = await auth();
  if (!session) redirect('/login');

  return (
    <AuthWrapper allowedRoles={['admin', 'manager', 'user']}>
      <Cart1 />
    </AuthWrapper>
  );
}
