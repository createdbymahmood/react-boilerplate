import { AppRoutes } from 'constants/appRoutes';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/router/RouteFactory';

/* pages */
const Index = lazyLoad(
    () => import('@pages/Index' /* webpackChunkName: "Index" */),
);

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
