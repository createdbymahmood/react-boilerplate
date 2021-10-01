import { ROUTE_URLS } from 'constants/routeUrls';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/router/RouteFactory';

/* pages */
const Index = lazyLoad(
    () => import('@pages/Index' /* webpackChunkName: "Index" */),
);
const Login = lazyLoad(
    () => import('@pages/auth/Login' /* webpackChunkName: "Login" */),
);

export const ROUTES_ARRAY: Route[] = [
    {
        path: ROUTE_URLS.Index,
        component: Index,
        exact: true,
        config: {
            private: true,
        },
    },
    {
        path: ROUTE_URLS.Login,
        component: Login,
        exact: true,
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
