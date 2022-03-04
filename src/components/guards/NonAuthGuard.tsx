import * as React from 'react';
import { useAuthStore } from 'store/auth/AuthStore';
import { Navigate, Outlet } from 'react-router-dom';
import { createRoute } from 'helpers';
import { Loading } from 'components';

export const NonAuthGuard: React.FC = ({ children }) => {
    const { isAuthenticated, isInitialized } = useAuthStore();

    const UnauthorizedRedirectionConfig = {
        pathname: createRoute('home'),
    };

    if (!isInitialized) return <Loading />;

    if (isAuthenticated) {
        return <Navigate to={UnauthorizedRedirectionConfig} />;
    }

    return <Outlet />;
};
