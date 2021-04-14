import axios from 'axios';

import { applyAuthInterceptor } from './interceptors/auth';

const xhrService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

applyAuthInterceptor(xhrService);

export * from 'axios';
export default xhrService;
