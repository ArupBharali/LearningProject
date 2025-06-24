import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { login } from '@/shared/store/slices/authSlice';
import { loginUser } from '@/features/login/api';
import type { LoginSchemaType } from '@/features/login/schema';

export function useLogin() {
  const dispatch = useDispatch();
  
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(login({ user: data.user, token: data.token }));
    },
  });
}
