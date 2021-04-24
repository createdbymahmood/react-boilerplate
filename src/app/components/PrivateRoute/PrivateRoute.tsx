import { ComponentType } from 'react';
/* components */
import { Route } from '@components/Route';
import { Spinner } from '@components/Spinner';
/* modules */
import { useCurrentUser } from '@hooks/api';
import { Redirect, RouteComponentProps } from 'react-router';
/* helpers */
import { routeTo } from 'helpers/ts/routeTo';
/* assets */
/* services */
/* constants */
/* types */
import { $ElementProps } from '@entities/gobal';
import { History } from 'history';

type Props = $ElementProps<typeof Route> & {
    component: ComponentType;
};

export const PrivateRoute = ({ component: Component, ...rest }: Props) => {
    const { data, isLoading, isError } = useCurrentUser({
        retry: false,
        staleTime: 10 * 60 * 1000, // 10 mins
    });

    const UnauthorizedRedirectionConfig: History.LocationDescriptor = {
        pathname: routeTo('home'),
        state: { from: rest.location },
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <Redirect to={UnauthorizedRedirectionConfig} />;
    }

    const authState = !isLoading && data;

    const renderComponent = (props: RouteComponentProps) => {
        if (authState) {
            return <Component {...props} />;
        }
        return <Redirect to={UnauthorizedRedirectionConfig} />;
    };

    return <Route {...rest} render={renderComponent} />;
};
