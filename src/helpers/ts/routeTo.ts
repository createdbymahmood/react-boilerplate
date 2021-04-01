import { generatePath } from 'react-router-dom';
import { stringify } from 'qs';
import get from 'lodash/get';
import { ROUTES } from 'constants/routes';

type PathType = keyof typeof ROUTES;
type ParamsType = { [paramName: string]: string | number | boolean };

export const routeTo = (
    path: PathType,
    params?: ParamsType,
    queryString?: object,
) => {
    const url = generatePath(get(ROUTES, path), params);
    return queryString ? `${url}?${stringify(queryString)}` : url;
};
