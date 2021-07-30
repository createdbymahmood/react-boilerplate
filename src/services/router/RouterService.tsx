import { PropsWithChildren } from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';

export function RouterService(props: PropsWithChildren<BrowserRouterProps>) {
    return <BrowserRouter {...props} />;
}
