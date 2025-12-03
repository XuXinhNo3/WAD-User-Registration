import axios from 'axios';

const API_BASE_URL = 'https://associated-albertine-student-of-university-of-science-1ce08dac.koyeb.app/';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface RegisterUserData {
  email: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    email: string;
    createdAt: string;
  };
}

export interface LoginResponse {
  message: string;
  user: {
    email: string;
  };
}

export interface ApiError {
  message: string | string[];
  error?: string;
  statusCode?: number;
}

export const userApi = {
  register: async (data: RegisterUserData): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>('/user/register', data);
    return response.data;
  },
  login: async (data: LoginUserData): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/user/login', data);
    return response.data;
  },
};
