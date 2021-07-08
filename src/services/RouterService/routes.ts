import { AppRoutes } from 'constants/AppRoutes';
import { Route } from 'services/routerService/RouteFactory';

/* pages */
import Index from '@pages/Index';

const routes: Route[] = [
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

export default routes;
