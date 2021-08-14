/* Constants */
import API_URLS from 'constants/apiUrls';

/* Modules */
import { useMutation, UseMutationOptions } from 'react-query';

/* Services */
import xhrService, { AxiosError } from 'services/xhr';

/* Types */
import type * as User from '@entities/user';
import type * as Server from '@entities/server';
import type * as Api from '@entities/api';

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
    return useMutation({
        mutationKey: API_URLS.login,
        mutationFn: fn,
        onError,
        onMutate,
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
    /* queryClient.invalidateQueries(''); */
}
