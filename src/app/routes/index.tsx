import { Redirect, Switch } from 'react-router-dom';
import { Route as RouteComponent } from '@components/Route';

/* helpers */
import { map, uniqueId } from 'lodash/fp';
import { routes, Route } from './routes';

export default function RouteFactory() {
    return <Switch>{mapRoutes(routes)}</Switch>;
}

const mapRoutes = map<Route, JSX.Element>(route => {
    const { component: Component, path, to } = route;

    const key = uniqueId(`route-${path}`);

    if (to) {
        return <Redirect key={key} from={path} to={to} />;
    }

    return <RouteComponent key={key} path={path} component={Component} exact />;
});
