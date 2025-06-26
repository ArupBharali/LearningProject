// components/AuthWrapper.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/shared/store';
import { Spinner } from './ui/Spinner';

interface AuthWrapperProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export default function AuthWrapper({ allowedRoles, children }: AuthWrapperProps) {
  const router = useRouter();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/login');
    } else if (!allowedRoles.includes(user.role)) {
      router.push('/unauthorized');
    } else {
      setChecking(false);
    }
  }, [isAuthenticated, user, router, allowedRoles]);

  if (checking) {
    return <Spinner />;
  }

  return <>{children}</>;
}
