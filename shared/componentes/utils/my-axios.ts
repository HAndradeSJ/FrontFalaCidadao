/* import axios from 'axios'
import { BACKEND_URL } from '../constants/constants';

const API_URL = BACKEND_URL;

const api = axios.create ({
    baseURL: API_URL
})

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api; */