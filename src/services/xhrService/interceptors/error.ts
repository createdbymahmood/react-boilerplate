import { AxiosInstance, AxiosError } from 'axios';
import * as IServer from '@entities/server';

export const applyErrorInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.request.use(undefined, (err: AxiosError) => {
        throw err;
    });

    instance.interceptors.response.use(
        undefined,
        (err: AxiosError<IServer.Error>) => {
            throw err?.response?.data;
        },
    );
};
