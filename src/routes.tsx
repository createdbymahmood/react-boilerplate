import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { lazyLoad } from 'helpers/react/lazyload';

const Home = lazyLoad(() => import('pages/Home'));

import { paths } from 'constants/paths';
import { RouterCan as Can } from 'services/abac';

const routes: RouteObject[] = [
    {
        path: paths.home,
        element: (
            <Can do='view' on='Home' to={paths.home}>
                <Home />
            </Can>
        ),
    },

    {
        path: '*',
        element: <Navigate to={paths.home} />,
    },
];

export default routes;
