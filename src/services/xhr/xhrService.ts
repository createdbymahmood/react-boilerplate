import Axios, {
    AxiosError,
    AxiosInstance,
    AxiosInterceptorManager,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

export const xhrService = Axios.create({
    baseURL: process.env.REACT_APP_API_SERVICE_URL,
});

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
        return Promise.reject(err);
    });
};

const captureResponseExceptions = (
    res: AxiosInterceptorManager<AxiosResponse>,
) => {
    res.use(undefined, (error: AxiosError<any>) => {
        if (error.response) {
            return Promise.reject(error?.response?.data);
        }
        return Promise.reject(error);
    });
};

applyErrorInterceptor(xhrService);

export const xhrServiceInstance = <T>(
    config: AxiosRequestConfig,
): Promise<T> => {
    const source = Axios.CancelToken.source();
    const promise = xhrService({
        ...config,
        cancelToken: source.token,
    }).then(({ data }) => data);

    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled');
    };

    return promise;
};
