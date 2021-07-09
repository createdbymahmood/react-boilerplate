import { AppRoutes } from 'constants/AppRoutes';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/routerService/RouteFactory';

/* pages */
const Index = lazyLoad(() => import('@pages/Index'));

export const routes: Route[] = [
    {
        path: AppRoutes.Index,
        component: Index,
        config: {
            private: false,
        },
    },
    {
        path: '*',
        to: AppRoutes.Index,
        config: {
            private: false,
        },
    },
];

export default routes;
