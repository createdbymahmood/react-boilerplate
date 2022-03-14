import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';

const App = () => {
    const content = useRoutes(routes);
    return <React.Fragment>{content}</React.Fragment>;
};

export default App;
