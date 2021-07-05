import { generatePath } from 'react-router-dom';
import { stringify } from 'qs';
import get from 'lodash/get';
import { AppRoutes } from 'constants/AppRoutes';

type PathType = keyof typeof AppRoutes;
type ParamsType = { [paramName: string]: string | number | boolean };

export const routeTo = (
    path: PathType,
    params?: ParamsType,
    queryString?: object,
) => {
    const url = generatePath(get(AppRoutes, path), params);
    return queryString ? `${url}?${stringify(queryString)}` : url;
};
