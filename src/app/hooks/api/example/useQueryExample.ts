/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { UseQueryResult, useQuery } from 'react-query';
/* services */
import xhrService, { AxiosError } from 'services/xhrService';
import { queryClient } from 'services/ReactQuery';
/* types */
import * as User from '@entities/user';
import * as Server from '@entities/server';

type TData = User.Model;
type TError = AxiosError<Server.Error>;

async function fn(): Promise<TData> {
    return (await xhrService.get<TData>(API_URLS.login)).data;
}

export function useData(): UseQueryResult<TData, TError> {
    return useQuery(API_URLS.login, fn, {
        onError,
        onSuccess,
    });
}

function onError(e: TError) {}

function onSuccess(d: TData) {
    /* revalidate data */
    queryClient.invalidateQueries('');
}
