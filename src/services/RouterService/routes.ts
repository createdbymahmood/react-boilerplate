import { AppRoutes } from 'constants/AppRoutes';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/routerService/RouteFactory';

/* pages */
const Index = lazyLoad(() => import('@pages/Index'));

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

export default routes;
