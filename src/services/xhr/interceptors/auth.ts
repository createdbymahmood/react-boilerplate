import { AxiosRequestConfig, AxiosInstance } from 'axios';
import * as localStorage from 'helpers/ts/localStorage';
interface AuthRequestConfig {
    /**
     * @default true
     */
    shouldAuthenticate?: boolean;
}

declare module 'axios' {
    interface AxiosRequestConfig extends AuthRequestConfig {}
}

export const createAuthInterceptor = (
    instance: AxiosInstance,
    onAuthenticate: (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>,
) => {
    return instance.interceptors.request.use(config => {
        const { shouldAuthenticate = true } = config;

        if (shouldAuthenticate) {
            return onAuthenticate(config);
        }
        return config;
    });
};

export const applyAuthInterceptor = (instance: AxiosInstance) =>
    createAuthInterceptor(instance, async config => {
        if (config.headers) {
            config.headers['authorization'] = `Bearer ${localStorage.getItem(
                'token',
            )}`;
        }

        return config;
    });
