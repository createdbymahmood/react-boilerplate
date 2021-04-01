import { Redirect, Switch } from 'react-router-dom';
import { uniqId } from 'helpers/ts/uniqId';
import { Route as RouteComponent } from '@components/Route';

/* helpers */
import { map } from 'lodash/fp';
import { routes, Route } from './routes';

export default function RouteFactory() {
    return <Switch>{mapRoutes(routes)}</Switch>;
}

const mapRoutes = map<Route, JSX.Element>(route => {
    const { component: Component, exact, path, to } = route;

    if (to) {
        return <Redirect from={path} to={to} />;
    }

    return (
        <RouteComponent
            key={uniqId()}
            path={path}
            exact={exact}
            component={Component}
        />
    );
});
