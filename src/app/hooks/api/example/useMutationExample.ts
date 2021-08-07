/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { useMutation, UseMutationOptions } from 'react-query';
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

async function fn(variables: TVariables) {
    return (await xhrService.post(API_URLS.login, variables)).data;
}

type Props = {
    options?: UseMutationOptions<TData, TError, TVariables, TContext>;
};

export function useLogin({ options }: Props) {
    return useMutation(API_URLS.login, fn, {
        onMutate,
        onError,
        onSuccess,
        ...options,
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

function onSuccess(data: TData, variables: TVariables, context?: TContext) {
    queryClient.invalidateQueries('');
}
