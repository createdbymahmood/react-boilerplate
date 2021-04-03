/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
} from 'react-query';
// import _fp from 'lodash/fp';
/* services */
import apiService, { AxiosError } from 'services/apiService';
/* types */
import * as User from '@entities/user';
import * as Server from '@entities/server';
import * as G from '@entities/gobal';

type TData = User.Model;
type TError = AxiosError<Server.Error>;
type TVariables = User.LoginPayload;
type TContext = G.MutationContext;

async function fn(variables: TVariables): Promise<TData> {
    return (await apiService.post<TData>(API_URLS.login, variables)).data;
}

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>;
type TDefinedOptions = 'onMutate' | 'onError' | 'mutationKey' | 'onSuccess';
type TPrunedOptions = Omit<TOptions, TDefinedOptions>;

export function useLogin(
    options?: TPrunedOptions,
): UseMutationResult<TData, TError, TVariables, TContext> {
    return useMutation(API_URLS.login, fn, {
        onMutate: updateCache,
        onError: handleError,
        onSuccess: handleSuccess,
        ...options,
    });
}

function updateCache(vars: TVariables): TContext {
    return {
        rollback: () => {},
    };
}

function handleError(
    error: TError,
    variables: TVariables,
    context: TContext | undefined,
) {
    context?.rollback();
}

function handleSuccess() {}
