import RouteFactory from 'services/routerService/RouteFactory';
import Routes from '@app/routes/routes';

export default function App() {
    return <RouteFactory routes={Routes} />;
}
