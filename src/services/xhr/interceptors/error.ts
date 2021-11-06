import {
    AxiosInstance,
    AxiosError,
    AxiosInterceptorManager,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import * as IServer from 'types/server';

export const applyErrorInterceptor = (instance: AxiosInstance) => {
    return createErrorInterceptor(instance);
};

const createErrorInterceptor = (instance: AxiosInstance) => {
    const { request, response } = instance.interceptors;

    captureRequestExceptions(request);
    captureResponseExceptions(response);

    return instance;
};

const captureRequestExceptions = (
    req: AxiosInterceptorManager<AxiosRequestConfig>,
) => {
    req.use(undefined, (err: AxiosError) => {
        /*  Sentry.captureException(new Error(JSON.stringify(err)), {
            tags: {
                section: ERRORS.API_CALLS.REQUEST,
            },
        }); */
        throw err;
    });
};

const captureResponseExceptions = (
    res: AxiosInterceptorManager<AxiosResponse>,
) => {
    res.use(undefined, (err: AxiosError<IServer.Error>) => {
        /*   Sentry.captureException(new Error(JSON.stringify(err)), {
            tags: {
                section: ERRORS.API_CALLS.RESPONSE,
            },
        }); */
        throw err?.response?.data;
    });
};
