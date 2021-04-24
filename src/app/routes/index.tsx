import { Redirect, Switch } from 'react-router-dom';
import { Route as RouteComponent, PrivateRoute } from '@components';
/* helpers */
import { map, uniqueId } from 'lodash/fp';
import { Route, routes } from './routes';

export default function RouteFactory() {
    const mapRoutes = map<Route, JSX.Element>(route => {
        const { component: Component, path, to, config } = route;

        const key = uniqueId(`route-${path}`);

        if (to || !Component) {
            return <Redirect key={key} from={path} to={to as string} />;
        }

        if (config.private) {
            return (
                <PrivateRoute
                    key={key}
                    path={path}
                    component={Component}
                    exact
                />
            );
        }

        return (
            <RouteComponent key={key} path={path} component={Component} exact />
        );
    });

    return <Switch>{mapRoutes(routes)}</Switch>;
}
