/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { UseQueryResult, useQuery, QueryObserverOptions } from 'react-query';
/* services */
import xhrService from 'services/xhrService';
/* types */
import * as User from '@entities/user';
import * as Server from '@entities/server';

type TData = User.Model;
type TError = Server.Error;

async function fn(): Promise<TData> {
    return (await xhrService.get<TData>(API_URLS.currentUser)).data;
}

export function useCurrentUser(
    options?: QueryObserverOptions<TData, TError>,
): UseQueryResult<TData, TError> {
    return useQuery(API_URLS.currentUser, fn, {
        onError,
        onSuccess,
        ...options,
    });
}

function onError(e: TError) {
    console.log(e);
}

function onSuccess(d: TData) {}
