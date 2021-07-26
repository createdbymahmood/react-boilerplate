import { PrivateRoute } from '@components';
import { map, uniqueId } from 'lodash/fp';
import { ComponentType } from 'react';
import { Switch, Redirect, Route as RouteComponent } from 'react-router-dom';

export type Route = {
    path: string;
    component?: ComponentType;
    to?: string;
    exact?: boolean;
    config: {
        private: boolean;
    };
};

type RouteFactoryProps = {
    routes: Route[];
};

export function RouteFactory({ routes }: RouteFactoryProps) {
    return <Switch>{renderRoutes(routes)}</Switch>;
}

const renderRoutes = map<Route, JSX.Element>(route => {
    const { component: Component, path, to, config, exact = true } = route;

    const key = uniqueId(`route-${path}`);

    if (to || !Component)
        return <Redirect key={key} from={path} to={to as string} />;

    const routeProps = {
        component: Component,
        exact,
        path,
        key,
    };

    if (config.private) return <PrivateRoute {...routeProps} />;

    return <RouteComponent {...routeProps} />;
});
