'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/shared/store/slices/authSlice';

export function HydrateAuth() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      dispatch(login({ user: session.user }));
    }
  }, [session, status, dispatch]);

  return null; // just hydrates Redux in the background
}
