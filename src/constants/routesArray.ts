import { ROUTE_URLS } from 'constants/routeUrls';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/router/RouteFactory';

/* pages */
const Index = lazyLoad(
    () => import('@pages/Index' /* webpackChunkName: "Index" */),
);

export const ROUTES_ARRAY: Route[] = [
    {
        path: ROUTE_URLS.Index,
        component: Index,
        config: {
            private: false,
        },
    },
    {
        path: '*',
        to: ROUTE_URLS.Index,
        config: {
            private: false,
        },
    },
];