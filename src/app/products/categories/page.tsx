import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';

export default async function ProductCategories() {
  const session = await auth();
  if (!session) redirect('/login');
  return (
    <>
      <h1>Product Categories</h1>
    </>
  );
}
