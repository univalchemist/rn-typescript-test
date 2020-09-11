import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';
const get = async (endpoint: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: endpoint,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return {
      networkError: JSON.stringify(error),
    };
  }
};

const Api = {
  getUsers: async () => {
    return await get(`${URL}/users`);
  },
  getUser: async (id: number) => {
    return await get(`${URL}/users/${id}`);
  },
};

export default Api;
