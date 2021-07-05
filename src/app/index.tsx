import RouteFactory from 'services/routerService/RouteFactory';
import { routes } from '@app/routes/routes';

export default function App() {
    return <RouteFactory routes={routes} />;
}
