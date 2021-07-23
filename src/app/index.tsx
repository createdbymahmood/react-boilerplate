import RouteFactory from 'services/router/RouteFactory';
import Routes from 'services/router/routes';

export default function App() {
    return <RouteFactory routes={Routes} />;
}
