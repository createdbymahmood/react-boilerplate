import * as React from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';

export const RouterService: React.FC<BrowserRouterProps> = props => (
    <BrowserRouter {...props} />
);
