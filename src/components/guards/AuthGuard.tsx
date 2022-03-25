import * as React from 'react';
import { useAuthStore } from 'store/auth/AuthStore';
import { Navigate, Outlet } from 'react-router-dom';
import { createRoute } from 'helpers';
import { Loading } from 'components';

export const AuthGuard: React.VFC = ({}) => {
    const { isAuthenticated, isInitialized } = useAuthStore();

    const UnauthorizedRedirectionConfig = {
        pathname: createRoute('auth.login'),
    };

    if (!isInitialized) return <Loading />;

    if (!isAuthenticated) {
        return <Navigate to={UnauthorizedRedirectionConfig} />;
    }

    return <Outlet />;
};
