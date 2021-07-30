import { PrivateRoute } from '@components';
import { isEmpty } from 'lodash';
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
    children?: Route[];
};

type RouteFactoryProps = {
    routes: Route[];
};

export function RouteFactory({ routes }: RouteFactoryProps) {
    return <Switch>{renderRoutes(routes)}</Switch>;
}

const renderRoutes = map<Route, JSX.Element>(route => {
    const {
        component: Component,
        path,
        to,
        config,
        children = [],
        exact = true,
    } = route;

    const key = uniqueId(`route-${path}`);

    if (to || !Component)
        return <Redirect key={key} from={path} to={to as string} />;

    const routeProps = {
        exact,
        path,
        key,
    };

    const componentC = (
        <Component>{renderChildren(children, exact, path)}</Component>
    );

    if (config.private) {
        return <PrivateRoute {...routeProps}>{componentC}</PrivateRoute>;
    }

    return <RouteComponent {...routeProps}>{componentC}</RouteComponent>;
});

const renderChildren = (children: Route[], exact: boolean, path: string) => {
    if (isEmpty(children)) return;

    if (exact)
        throw new Error(
            `Routes with children must NOT have property exact of true! [${path}]`,
        );

    return renderRoutes(children);
};
