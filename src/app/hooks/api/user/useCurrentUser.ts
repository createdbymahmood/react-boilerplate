/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { useQuery, QueryOptions } from 'react-query';
/* services */
import xhrService from 'services/xhr';
/* types */
import * as User from '@entities/user';
import * as Server from '@entities/server';

type TData = User.Model;
type TError = Server.Error;

async function fn() {
    return (await xhrService.get(API_URLS.currentUser)).data;
}

type Props = {
    options?: QueryOptions<TData, TError>;
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
