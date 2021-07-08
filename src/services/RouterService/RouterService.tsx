import { ReactNode } from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';

type RouterServiceProps = { children: ReactNode } & BrowserRouterProps;

export function RouterService({ children, ...props }: RouterServiceProps) {
    return <BrowserRouter {...props}>{children}</BrowserRouter>;
}
