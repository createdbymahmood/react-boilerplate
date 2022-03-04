import { Navigate, RouteObject } from 'react-router-dom';
import { paths } from 'constants/paths';
import { lazyLoad } from 'helpers';
import { AuthGuard, NonAuthGuard } from 'components';

const Home = lazyLoad(() => import('pages/Home'));

/* Auth */
const Login = lazyLoad(() => import('pages/auth/Login'));

const routes: RouteObject[] = [
    {
        element: <AuthGuard />,
        path: paths.home,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        element: <NonAuthGuard />,
        path: paths.auth.login,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={paths.auth.login} />,
    },
];

export default routes;
