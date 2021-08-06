import { ROUTE_URLS } from 'constants/routeUrls';
import { lazyLoad } from 'helpers/react/loadable';
import { Route } from 'services/router/RouteFactory';

/* pages */
import { QuestionsList, CreatePostModal } from '@components';
import { OfflineUsers } from '@components/lists/OfflineUsers';

const Index = lazyLoad(
    () => import('@pages/Index' /* webpackChunkName: "Index" */),
);

const Profile = lazyLoad(
    () => import('@pages/Profile' /* webpackChunkName: "Profile" */),
);

const Posts = lazyLoad(
    () => import('@pages/Posts' /* webpackChunkName: "Posts" */),
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
        path: ROUTE_URLS.Posts,
        component: Posts,
        exact: false,
        config: {
            private: false,
        },
        children: [
            {
                path: ROUTE_URLS.RecentPosts,
                component: QuestionsList,
                exact: false,
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
            {
                path: ROUTE_URLS.CreatePost,
                component: CreatePostModal,
                exact: false,
                config: {
                    private: false,
                },
                children: [
                    {
                        path: ROUTE_URLS.AllUsers,
                        component: OfflineUsers,
                        exact: true,
                        config: {
                            private: false,
                        },
                    },
                    {
                        path: ROUTE_URLS.OnlineUsers,
                        component: OfflineUsers,
                        exact: true,
                        config: {
                            private: false,
                        },
                    },
                    {
                        path: ROUTE_URLS.OfflineUsers,
                        component: OfflineUsers,
                        exact: true,
                        config: {
                            private: false,
                        },
                    },
                    {
                        path: ROUTE_URLS.CreatePost,
                        to: ROUTE_URLS.AllUsers,
                        config: {
                            private: false,
                        },
                    },
                ],
            },
        ],
    },
    {
        path: ROUTE_URLS.Profile,
        component: Profile,
        exact: true,
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
