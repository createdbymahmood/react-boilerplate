import { PrivateRoute } from '@components';
import { map, uniqueId } from 'lodash/fp';
import { ComponentType } from 'react';
import { Switch, Redirect, Route as RouteComponent } from 'react-router-dom';

export type Route = {
    path: string;
    component?: ComponentType;
    to?: string;
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
    const { component: Component, path, to, config } = route;

    const key = uniqueId(`route-${path}`);

    if (to || !Component)
        return <Redirect key={key} from={path} to={to as string} />;

    if (config.private)
        return (
            <PrivateRoute key={key} path={path} component={Component} exact />
        );

    return <RouteComponent key={key} path={path} component={Component} exact />;
});
