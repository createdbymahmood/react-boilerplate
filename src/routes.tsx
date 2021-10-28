import { Navigate, RouteObject } from 'react-router-dom';

// guards
import { AuthGuard, AuthLayout } from '@components';

// auth
import Login from '@pages/auth/Login';

// main
import Home from '@pages/Home';

const routes: RouteObject[] = [
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '',
                element: <Navigate to='/auth/login' />,
            },
            {
                name: 'login',
                path: 'login',
                element: <Login />,
            },
            {
                path: '*',
                element: <Navigate to='/auth/login' />,
            },
        ],
    },
    {
        path: 'home',
        name: 'home',
        element: (
            <AuthGuard>
                <Home />
            </AuthGuard>
        ),
    },
    {
        path: '*',
        element: <Navigate to='home' />,
    },
];

export default routes;
