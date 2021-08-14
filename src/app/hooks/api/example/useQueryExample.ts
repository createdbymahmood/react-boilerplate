/* Constants */
import API_URLS from 'constants/apiUrls';

/* Modules */
import { useQuery, QueryObserverOptions } from 'react-query';

/* Services */
import xhrService, { AxiosError } from 'services/xhr';

/* Types */
import type * as User from '@entities/user';
import type * as Server from '@entities/server';

async function fn() {
    const { data } = await xhrService.get(API_URLS.login);
    return data;
}

type Props = {
    options: QueryObserverOptions<
        User.Model,
        AxiosError<Server.Error>,
        User.Model
    >;
};

export function useData({ options }: Props) {
    return useQuery({
        queryKey: API_URLS.login,
        queryFn: fn,
        ...options,
    });
}
