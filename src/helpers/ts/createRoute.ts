import { find } from 'lodash';
import generatePath, { ParamMap } from 'urlcat';
import { flattenRoutes } from 'helpers/router/flattenRoutes';
import routes from 'routes';

export const createRoute = (name: string, params: ParamMap = {}) => {
    const flattened = flattenRoutes(routes);
    const findedRoute = find(flattened, { name });
    if (findedRoute) return generatePath(findedRoute.path, params);
    throw new Error('path not found!');
};
