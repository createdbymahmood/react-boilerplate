import { generatePath } from 'react-router-dom';
import { stringify } from 'query-string';
import { get } from 'lodash';
import { ROUTE_URLS } from 'constants/routeUrls';

type PathType = keyof typeof ROUTE_URLS;
type ParamsType = { [paramName: string]: string | number | boolean };

export function createRoute(path: PathType, params?: ParamsType, qs?: object) {
    const url = generatePath(get(ROUTE_URLS, path), params);

    if (qs) {
        return `${url}?${stringify(qs)}`;
    }

    return url;
}
