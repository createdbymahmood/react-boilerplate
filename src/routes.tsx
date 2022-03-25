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
        children: [
            {
                path: paths.home,
                element: <Home />,
            },
        ],
    },
    {
        element: <NonAuthGuard />,
        children: [
            {
                path: paths.auth.login,
                element: <Login />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={paths.home} />,
    },
];

export default routes;
