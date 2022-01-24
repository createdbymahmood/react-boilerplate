import { Navigate, RouteObject } from 'react-router-dom';

// guards
import { AuthGuard, AuthLayout } from 'components';

// auth

// main
import Home from 'pages/Home';

const routes: RouteObject[] = [
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
