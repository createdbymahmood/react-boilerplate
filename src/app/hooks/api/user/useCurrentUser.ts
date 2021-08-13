/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { useQuery, QueryObserverOptions } from 'react-query';
/* services */
import xhrService from 'services/xhr';
/* types */
import type * as User from '@entities/user';
import type * as Server from '@entities/server';

type TData = User.Model;
type TError = Server.Error;

async function fn() {
    return (await xhrService.get(API_URLS.currentUser)).data;
}

type Props = {
    options?: QueryObserverOptions<TData, TError>;
};

export function useCurrentUser({ options }: Props) {
    return useQuery(API_URLS.currentUser, fn, {
        onError,
        onSuccess,
        ...options,
    });
}

function onError(e: TError) {}

function onSuccess(d: TData) {}
