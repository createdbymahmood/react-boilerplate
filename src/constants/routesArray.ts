import { ROUTE_URLS } from 'constants/routeUrls';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/router/RouteFactory';

/* pages */
import { QuestionsList } from '@components';

const Index = lazyLoad(
    () => import('@pages/Index' /* webpackChunkName: "Index" */),
);

export const ROUTES_ARRAY: Route[] = [
    {
        path: ROUTE_URLS.Index,
        component: Index,
        exact: false,
        config: {
            private: false,
        },
        children: [
            {
                path: ROUTE_URLS.RecentPosts,
                component: QuestionsList,
                exact: true,
                config: {
                    private: false,
                },
            },
            {
                path: ROUTE_URLS.MostLikedPosts,
                component: QuestionsList,
                exact: true,
                config: {
                    private: false,
                },
            },
            {
                path: ROUTE_URLS.MostAnswers,
                component: QuestionsList,
                exact: true,
                config: {
                    private: false,
                },
            },
        ],
    },
    {
        path: '*',
        to: ROUTE_URLS.RecentPosts,
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
