/* Constants */
import API_URLS from 'constants/apiUrls';

/* Modules */
import { useMutation, UseMutationOptions } from 'react-query';

/* Services */
import xhrService, { AxiosError } from 'services/xhr';

/* Types */
import type * as User from 'types/user';
import type * as Server from 'types/server';
import type * as Api from 'types/api';

type TData = User.Model;
type TError = AxiosError<Server.Error>;
type TVariables = User.LoginPayload;
type TContext = Api.MutationContext;

async function fn(variables: TVariables) {
    const { data } = await xhrService.post(API_URLS.login, variables);
    return data;
}

type Props = {
    options?: UseMutationOptions<TData, TError, TVariables, TContext>;
};

export const useLogin = ({ options }: Props) => useMutation(fn);

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
