/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { useQuery, QueryObserverOptions } from 'react-query';
/* services */
import xhrService, { AxiosError } from 'services/xhr';
/* types */
import * as User from '@entities/user';
import * as Server from '@entities/server';

type TData = User.Model;
type TError = AxiosError<Server.Error>;

async function fn() {
    return (await xhrService.get(API_URLS.login)).data;
}

type Props = {
    options: QueryObserverOptions<TData, TError, TData>;
};

export function useData({ options }: Props) {
    return useQuery(API_URLS.login, fn, {
        onError,
        onSuccess,
        ...options,
    });
}

function onError(e: TError) {}

function onSuccess(d: TData) {
    /* revalidate data */
}
