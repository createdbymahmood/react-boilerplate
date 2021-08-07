import { PrivateRoute } from '@components';
import { Maybe } from '@entities/gobal';
import { isEmpty } from 'lodash';
import { map, uniqueId } from 'lodash/fp';
import { ComponentType } from 'react';
import { Switch, Redirect, Route as ReactRouterRoute } from 'react-router-dom';

export type Route = {
    path: string;
    component?: ComponentType<any>;
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

export const RouteFactory = ({ routes }: RouteFactoryProps) => {
    return <Switch>{renderRoutes(routes)}</Switch>;
};

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

    if (to || !Component) {
        return <Redirect key={key} from={path} to={to as string} />;
    }

    const routeProps = {
        exact,
        path,
        key,
    };

    const component = renderComponent(Component, children, exact, path);
    if (config.private) {
        return <PrivateRoute {...routeProps}>{component}</PrivateRoute>;
    }

    return <ReactRouterRoute {...routeProps}>{component}</ReactRouterRoute>;
});

const validateChildrenRoutesPath = (path: string) => (children: Route[]) => {
    return !children.some(child => child.path.startsWith(`${path}/`));
};

const renderChildren = (
    children: Route[],
    exact: boolean,
    path: string,
): Maybe<JSX.Element[]> => {
    /*  */
    if (isEmpty(children)) return;

    /* Makes sure that all children path names are started with parent path name */
    if (validateChildrenRoutesPath(path)(children))
        throw new Error(
            `Children path must be started with parent path! [${path}]`,
        );

    if (exact)
        throw new Error(
            `Routes with children must NOT have property exact of true! [${path}]`,
        );

    return renderRoutes(children);
};

const renderComponent = (
    Component: ComponentType<any>,
    children: Route[],
    exact: boolean,
    path: string,
) => {
    return <Component>{renderChildren(children, exact, path)}</Component>;
};
