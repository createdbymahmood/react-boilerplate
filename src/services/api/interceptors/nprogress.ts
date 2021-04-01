import {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    AxiosRequestConfig,
} from 'axios';
import { NProgress } from 'components/NProgress';

export const applyNprogress = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            NProgress.start();
            return config;
        },
        (error: AxiosError) => {
            NProgress.done();
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (res: AxiosResponse) => {
            NProgress.done();
            return res;
        },
        (error: AxiosError) => {
            NProgress.done();
            return Promise.reject(error);
        }
    );
};
