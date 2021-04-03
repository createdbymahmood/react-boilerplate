import API_URLS from 'constants/apiUrls';
import { useMutation, UseMutationResult } from 'react-query';
import apiService, { AxiosError } from 'services/apiService';
import type * as User from '@entities/user';
import type * as Server from '@entities/server';
import * as TGlboal from '@entities/gobal';

const fn = async (dto: User.LoginPayload): Promise<User.Model> =>
    await (await apiService.post<User.Model>(API_URLS.login, dto)).data;

export const useLogin = (): UseMutationResult<
    User.Model,
    AxiosError<Server.Error>,
    User.LoginPayload,
    TGlboal.MutationContext
> =>
    useMutation(fn, {
        onMutate: () => {
            return {
                rollback: () => {
                    console.log('rollback call');
                },
            };
        },
        onError: (err, variables, ctx) => {
            ctx?.rollback();
        },
    });
