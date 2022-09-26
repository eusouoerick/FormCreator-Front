import axios from 'axios';

axios.defaults.baseURL = 'Bearer ' + String(process.env.NEXT_PUBLIC_TOKEN_TEST);
axios.defaults.headers.common['Authorization'] = String(
  process.env.NEXT_PUBLIC_TOKEN_TEST
);
