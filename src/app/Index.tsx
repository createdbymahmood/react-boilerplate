import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';

const App = () => {
    const content = useRoutes(routes);
    return <Fragment>{content}</Fragment>;
};

export default App;
