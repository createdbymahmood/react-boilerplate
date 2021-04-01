import axios from 'axios';

import { applyAuthInterceptor } from './interceptors/auth';

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

applyAuthInterceptor(apiService);

export * from 'axios';
export default apiService;
