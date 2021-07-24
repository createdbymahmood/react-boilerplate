import { RouteFactory } from 'services/router/RouteFactory';
import { ROUTES_ARRAY } from 'constants/routesArray';

export default function App() {
    return <RouteFactory routes={ROUTES_ARRAY} />;
}
