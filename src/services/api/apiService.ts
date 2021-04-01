import axios from 'axios';

import { applyAuthInterceptor } from './interceptors/auth';
import { applyNprogress } from './interceptors/nprogress';

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

applyAuthInterceptor(apiService);
applyNprogress(apiService);

export * from 'axios';
export default apiService;
