import axios from 'axios';
import { compose } from 'lodash/fp';

import { applyAuthInterceptor } from './interceptors/auth';
import { applyErrorInterceptor } from './interceptors/error';

const xhrService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

compose(applyAuthInterceptor, applyErrorInterceptor)(xhrService);

export * from 'axios';
export default xhrService;
