import { generatePath } from 'react-router-dom';
import { stringify } from 'query-string';
import { AppRoutes } from 'constants/AppRoutes';
import { get } from 'lodash';

type PathType = keyof typeof AppRoutes;
type ParamsType = { [paramName: string]: string | number | boolean };

export function routeTo(
    path: PathType,
    params?: ParamsType,
    queryString?: object,
) {
    const url = generatePath(get(AppRoutes, path), params);

    if (queryString) {
        return `${url}?${stringify(queryString)}`;
    }

    return url;
}
