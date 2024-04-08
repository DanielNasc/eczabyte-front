import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
  birthdate: string;
}

interface TokenCheckResponse {
  message: string;
}

interface UpdateUserResponse {
  message: string;
}

class UserAuthService {
  public static async updateUser(userData: Partial<User>): Promise<UpdateUserResponse> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found!');
    }

    try {
      const response: AxiosResponse<UpdateUserResponse> = await axios.put(
        `${API_URL}/api/v1/users/${userData.id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status < 200 || response.status >= 300) {
        throw new Error('Failed to update user data!');
      }

      return response.data;
    } catch (error: any) { // Especificando 'any' para o tipo de 'error'
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Failed to update user data!');
      }
    }
  }

  public static async checkToken(): Promise<TokenCheckResponse> {
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

      if (response.status < 200 || response.status >= 300) {
        throw new Error('Failed to check token!');
      }

      return response.data;
    } catch (error: any) { // Especificando 'any' para o tipo de 'error'
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Failed to check token!');
      }
    }
  }
}


export default UserAuthService;
