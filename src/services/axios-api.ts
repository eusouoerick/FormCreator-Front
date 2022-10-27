import Cookies from 'js-cookie';
import axios from 'axios';

export const AxiosApi = axios.create({
  baseURL: String(process.env.NEXT_PUBLIC_API_URL),
  headers: {
    Authorization: 'Bearer ' + Cookies.get('ACS_TOKEN'),
  },
});
