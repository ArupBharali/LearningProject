import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { login } from '@/shared/store/slices/authSlice';
// import { loginUser } from '@/features/login/api';
import { LoginSchemaType } from '../schema';
// import type { LoginSchemaType } from '@/features/login/schema';

export function useLogin() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (input: LoginSchemaType) => {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
      }

      return response.json();
    },
    onSuccess: (data) => {
      dispatch(login({ user: data.user, token: data.token }));
    },
  });
}

