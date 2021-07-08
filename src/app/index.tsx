import RouteFactory from 'services/routerService/RouteFactory';
import Routes from 'services/routerService/routes';

export default function App() {
    return <RouteFactory routes={Routes} />;
}
