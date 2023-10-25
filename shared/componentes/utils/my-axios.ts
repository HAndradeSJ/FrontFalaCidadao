 import axios from 'axios'
import { BACKEND_URL_PROD,BACKEND_URL_lOCAL } from '../constants/constants';



const api = axios.create ({
    baseURL:"http://10.10.0.217:3080"
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

export default api;