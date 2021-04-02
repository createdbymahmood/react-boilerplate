import { ComponentType } from 'react';
import { ROUTES } from 'constants/routes';

/* pages */
import Home from '@pages/Home';

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
        path: ROUTES.root,
        to: ROUTES.home,
        config: {
            private: false,
        },
    },
];
