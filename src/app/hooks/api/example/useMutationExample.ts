/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { useMutation, UseMutationResult } from 'react-query';
/* services */
import xhrService, { AxiosError } from 'services/xhr';
import { queryClient } from 'services/ReactQuery';
/* types */
import * as User from '@entities/user';
import * as Server from '@entities/server';
import * as Api from '@entities/api';

type TData = User.Model;
type TError = AxiosError<Server.Error>;
type TVariables = User.LoginPayload;
type TContext = Api.MutationContext;

async function fn(variables: TVariables): Promise<TData> {
    return (await xhrService.post<TData>(API_URLS.login, variables)).data;
}

export function useLogin(): UseMutationResult<
    TData,
    TError,
    TVariables,
    TContext
> {
    return useMutation(API_URLS.login, fn, {
        onMutate,
        onError,
        onSuccess,
    });
}

function onMutate(v: TVariables): TContext {
    return {
        rollback: () => {},
    };
}

function onError(e: TError, v: TVariables, context?: TContext) {
    context?.rollback();
}

function onSuccess(d: TData, v: TVariables, context?: TContext) {
    /* revalidate data */
    queryClient.invalidateQueries('');
}
