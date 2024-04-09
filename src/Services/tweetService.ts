import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

const TweetService = {
  getTweets: async (): Promise<any> => {
    const id = localStorage.getItem('id');
    if (!id) {
      throw new Error('Token not found!');
    }

    try {
      const response: AxiosResponse<any> = await axios.get(
        `${API_URL}/tweets/${id}`
      );
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  },
};

export default TweetService;
