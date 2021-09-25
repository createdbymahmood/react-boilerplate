import { LoginForm } from '@components';
import { LoginFormPreview } from '@components/auth/LoginForm/LoginFormPreview';
import { LoginFormView } from '@components/auth/LoginForm/LoginFormView';
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
            private: false,
        },
    },
    {
        path: ROUTE_URLS.Login,
        component: Login,
        exact: false,
        config: {
            private: false,
        },
        children: [
            {
                path: ROUTE_URLS.Login,
                component: LoginFormView,
                exact: true,
                config: {
                    private: false,
                },
            },

            {
                path: ROUTE_URLS.LoginPreview,
                component: LoginFormPreview,
                exact: true,
                config: {
                    private: false,
                },
            },
        ],
    },

    {
        path: '*',
        to: ROUTE_URLS.Index,
        config: {
            private: false,
        },
    },
];
