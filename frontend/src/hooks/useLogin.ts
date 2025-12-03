import { useMutation } from '@tanstack/react-query';
import { userApi } from '../api/userApi';
import type { LoginUserData, LoginResponse, ApiError } from '../api/userApi';
import type { AxiosError } from 'axios';

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiError>, LoginUserData>({
    mutationFn: userApi.login,
  });
};
