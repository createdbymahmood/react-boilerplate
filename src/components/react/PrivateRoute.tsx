import { ComponentType, Fragment } from 'react';
/* Components */
import { Route, RouteProps } from 'react-router-dom';
/* Modules */
import { Navigate } from 'react-router';
/* Helpers */
import { createRoute } from 'helpers/ts/createRoute';
/* Types */
import { History } from 'history';
import { useAuthStore } from 'store/auth/AuthStore';

type Props = RouteProps & {
    component?: ComponentType;
};

export function PrivateRoute({
    component: Component,
    ...rest
}: Props): JSX.Element {
    const { isAuthenticated, isInitialized } = useAuthStore();

    console.log({ isAuthenticated, isInitialized });

    const UnauthorizedRedirectionConfig = {
        pathname: createRoute('Login'),
    };

    if (!isInitialized) return <Fragment></Fragment>;

    if (!isAuthenticated) {
        return <Navigate to={UnauthorizedRedirectionConfig} />;
    }

    return <Route {...rest} />;
}
