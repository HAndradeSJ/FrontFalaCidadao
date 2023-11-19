 import axios from 'axios'
import { BACKEND_URL_PROD,BACKEND_URL_lOCAL } from '../constants/constants';



const api = axios.create ({
    baseURL:"http://localhost:3080"
})



export default api;