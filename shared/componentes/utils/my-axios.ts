 import axios from 'axios'
import { BACKEND_URL_PROD,BACKEND_URL_lOCAL } from '../constants/constants';



const api = axios.create ({
    baseURL:"http://10.10.0.217:3080"
})



export default api;