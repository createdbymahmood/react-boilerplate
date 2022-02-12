import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { lazyLoad } from 'helpers/react/lazyload';

const Home = lazyLoad(() => import('pages/Home'));

import { paths } from 'constants/paths';

const Profile = () => {
    return (
        <div>
            Profile
            <Outlet />
        </div>
    );
};

const EditProfile = () => {
    return (
        <div>
            edit profile
            <Outlet />
        </div>
    );
};

const EditProfileSettings = () => {
    return <div>edit profile settings</div>;
};

const routes: RouteObject[] = [
    {
        path: paths.home,
        element: <Home />,
    },

    {
        path: paths.profile,
        element: <Profile />,
        children: [
            {
                path: paths.editProfile,
                element: <EditProfile />,
                children: [
                    {
                        path: paths.editProfileSettings,
                        element: <EditProfileSettings />,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={paths.home} />,
    },
];

export default routes;
