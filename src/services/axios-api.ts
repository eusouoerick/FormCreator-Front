import axios from 'axios';

export const AxiosApi = axios.create({
  baseURL: String(process.env.NEXT_PUBLIC_API_URL),
  headers: {
    Authorization: 'Bearer ' + String(process.env.NEXT_PUBLIC_TOKEN_TEST),
    // Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
  },
});
