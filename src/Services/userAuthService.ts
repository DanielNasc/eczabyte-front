import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

interface User {
  id: string;
  username: string;
  email: string;
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
    const userId = localStorage.getItem('id');

    if (!token) {
      throw new Error('Token not found!');
    }
  
    if (!userId) {
      throw new Error('User ID not found!');
    } 
    try {
      const response: AxiosResponse<UpdateUserResponse> = await axios.put(
        `${API_URL}/api/v1/users/${userId}`, // Usa o ID do usuário recuperado do localStorage
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to update user data!');
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
      return response.data;
    } catch (error) {
      throw new Error('Failed to check token!');
    }
  }
}

export default UserAuthService;
