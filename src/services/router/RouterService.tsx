import { createBrowserHistory } from 'history';
import * as React from 'react';
import { RouterProps } from 'react-router-dom';
import { Router } from './Router';

export const history = createBrowserHistory();

export const RouterService: React.FC<{}> = ({ children }) => {
    return <Router history={history} children={children} />;
};
