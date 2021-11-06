/* Constants */
import API_URLS from 'constants/apiUrls';

/* Modules */
import { useQuery, QueryObserverOptions } from 'react-query';

/* Services */
import xhrService, { AxiosError } from 'services/xhr';

/* Types */
import type * as User from 'types/user';
import type * as Server from 'types/server';

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

export const useData = ({ options }: Props) =>
    useQuery(API_URLS.login, fn, options);
