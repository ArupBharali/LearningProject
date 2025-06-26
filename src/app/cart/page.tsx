import AuthWrapper from '@/shared/components/AuthWrapper';

function Cart1() {
  return <h2>Under Development</h2>;
}

export default function Cart() {
  return (
    <AuthWrapper allowedRoles={['admin', 'manager', 'user']}>
      <Cart1 />
    </AuthWrapper>
  );
}
