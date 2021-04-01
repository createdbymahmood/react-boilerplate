import { ComponentType } from 'react';
import { ROUTES } from 'constants/routes';

/* pages */
import Home from '@pages/Home';
import Error from '@pages/Error';

export type Route = {
    path: string;
    exact: boolean;
    component?: ComponentType;
    to?: string;
    config: {
        private: boolean;
    };
};

export const routes: Route[] = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        config: {
            private: false,
        },
    },

    {
        path: '/',
        to: ROUTES.home,
        exact: true,
        config: {
            private: false,
        },
    },
    {
        path: '*',
        component: Error,
        exact: true,
        to: ROUTES.error,
        config: {
            private: false,
        },
    },
];
