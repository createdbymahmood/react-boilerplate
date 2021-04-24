import { ComponentType } from 'react';
import { ROUTES } from 'constants/routes';

/* pages */
import Home from '@pages/Home';
import Dashboard from '@pages/Dashboard';

export type Route = {
    path: string;
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
        config: {
            private: false,
        },
    },
    {
        path: ROUTES.dashboard,
        component: Dashboard,
        config: {
            private: true,
        },
    },
    {
        path: '*',
        to: ROUTES.dashboard,
        config: {
            private: false,
        },
    },
];
