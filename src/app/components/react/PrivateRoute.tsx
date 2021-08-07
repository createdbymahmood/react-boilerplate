import { ComponentType, Fragment } from 'react';
/* Components */
import { Route, RouteProps } from 'react-router-dom';
/* Modules */
import { useCurrentUser } from '@hooks/api';
import { Redirect, RouteComponentProps } from 'react-router';
/* Helpers */
import { createRoute } from 'helpers/ts/createRoute';
/* Types */
import { History } from 'history';

type Props = RouteProps & {
    component?: ComponentType;
};

export function PrivateRoute({
    component: Component,
    ...rest
}: Props): JSX.Element {
    const { data, isLoading, isError } = useCurrentUser({
        options: {
            retry: false,
            staleTime: 10 * 60 * 1000, // 10 mins
        },
    });

    const UnauthorizedRedirectionConfig: History.LocationDescriptor = {
        pathname: createRoute('Index'),
        state: { from: rest.location },
    };

    if (isLoading) {
        return <div></div>;
    }

    if (isError) {
        return <Redirect to={UnauthorizedRedirectionConfig} />;
    }

    const authState = !isLoading && data;

    if (!authState) {
        return <Redirect to={UnauthorizedRedirectionConfig} />;
    }

    return <Route {...rest} />;
}
