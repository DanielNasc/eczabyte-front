import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

interface LoginResponse {
  token: string;
}

interface CreateUserResponse {
  username: string;
  email: string;
  password: string;
}

interface TokenCheckResponse {
  message: string;
}

const AuthService = {
  createUser: async (
    username: string,
    password: string,
    email: string
  ): Promise<CreateUserResponse> => {
    try {
      const response: AxiosResponse<CreateUserResponse> = await axios.post(
        `${API_URL}/api/v1/users`,
        { username, email, password }
      );
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  },
  login: async (username: string, password: string): Promise<LoginResponse> => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(
        `${API_URL}/api/auth/login`,
        { username, password }
      );
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw new Error('Login failed!');
    }
  },
  logout: (): void => {
    localStorage.removeItem('token');
  },
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },
  checkToken: async (): Promise<TokenCheckResponse> => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found!');
    }

    try {
      const response: AxiosResponse<TokenCheckResponse> = await axios.get(
        `${API_URL}/api/auth/check-token`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to check token!');
    }
  },
  getProtectedData: async <T>(url: string): Promise<T> => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found!');
    }

    try {
      const response: AxiosResponse<T> = await axios.get(`${API_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch protected data!');
    }
  },
};

export default AuthService;
