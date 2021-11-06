import * as React from 'react';
import { useAuthStore } from 'store/auth/AuthStore';
import { Navigate } from 'react-router-dom';
import { createRoute } from 'helpers/ts';

export const AuthGuard: React.FC = ({ children }) => {
    const { isAuthenticated, isInitialized } = useAuthStore();

    const UnauthorizedRedirectionConfig = {
        pathname: createRoute('login'),
    };

    if (!isInitialized) return <React.Fragment>Loading...</React.Fragment>;

    if (!isAuthenticated) {
        return <Navigate to={UnauthorizedRedirectionConfig} />;
    }

    return <React.Fragment>{children}</React.Fragment>;
};
