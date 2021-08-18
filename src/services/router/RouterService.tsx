import { FC } from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';

export const RouterService: FC<BrowserRouterProps> = props => (
    <BrowserRouter {...props} />
);
