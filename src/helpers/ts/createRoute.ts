import { find } from 'lodash';
import generatePath from 'urlcat';
import routes from 'routes';
import { flattenRoutes } from 'helpers/router/flattenRoutes';

export declare type Params<Key extends string = string> = {
    readonly [key in Key]: string | undefined;
};

export const createRoute = (name: string, params: Params = {}) => {
    const flattened = flattenRoutes(routes);
    const findedRoute = find(flattened, { name });
    if (findedRoute) return generatePath(findedRoute.path, params);
    throw new Error('path not found!');
};
