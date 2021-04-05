/* components */
import { Route } from '@components/Route';
/* modules */
/* helpers */
import { routeTo } from 'helpers/ts/routeTo';
/* assets */
/* services */
/* constants */
/* types */
import { $ElementProps } from '@entities/gobal';
import { History } from 'history';
import { Redirect, RouteComponentProps } from 'react-router';
import { ComponentType } from 'react';

type Props = $ElementProps<typeof Route> & {
    authState: boolean;
    component: ComponentType;
};

export const PrivateRoute = ({
    component: Component,
    authState,
    ...rest
}: Props) => {
    const UnauthorizedRedirectionConfig: History.LocationDescriptor = {
        pathname: routeTo('error'),
        state: { from: rest.location },
    };

    const renderComponent = (props: RouteComponentProps) => {
        if (authState) {
            return <Component {...props} />;
        }
        return <Redirect to={UnauthorizedRedirectionConfig} />;
    };

    return <Route {...rest} render={renderComponent} />;
};
