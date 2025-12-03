import { useMutation } from '@tanstack/react-query';
import { userApi } from '../api/userApi';
import type { RegisterUserData, RegisterResponse, ApiError } from '../api/userApi';
import type { AxiosError } from 'axios';

export const useRegister = () => {
  return useMutation<RegisterResponse, AxiosError<ApiError>, RegisterUserData>({
    mutationFn: userApi.register,
  });
};
