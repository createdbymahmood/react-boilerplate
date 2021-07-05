import { AppRoutes } from 'constants/AppRoutes';
import { Route } from 'services/RouterService/RouteFactory';

/* pages */
import Index from '@pages/Index';

export const routes: Route[] = [
    {
        path: AppRoutes.index,
        component: Index,
        config: {
            private: false,
        },
    },

    {
        path: '*',
        to: AppRoutes.index,
        config: {
            private: false,
        },
    },
];
