import { FC } from 'react';
import { RouteFactory } from 'services/router/RouteFactory';
import { ROUTES_ARRAY } from 'constants/routesArray';

const App: FC = () => {
    return <RouteFactory routes={ROUTES_ARRAY} />;
};

export default App;
