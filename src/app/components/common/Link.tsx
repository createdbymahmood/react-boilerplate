import {
    NavLink as ReactRouterLink,
    NavLinkProps,
    matchPath,
} from 'react-router-dom';
import { ExtractRouteParams } from 'react-router';
import { createRoute } from 'helpers/ts/createRoute';
import { ROUTE_URLS } from 'constants/routeUrls';
import { ReactNode } from 'react';
import { useLocation } from 'react-use';
import { isFunction } from 'lodash';

type ExtractStringPropertyNames<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

const s = Object.values(ROUTE_URLS).map(i => i);

type PATHS = typeof s[0];

export type AppRoutesPath = ExtractStringPropertyNames<typeof ROUTE_URLS>;

// Object which has matching parameter keys for a path.
export type PathParams = ExtractRouteParams<PATHS>;

type TypedLinkProps<P extends AppRoutesPath> = {
    to: P;
    params?: PathParams;
} & NavLinkProps;

type TypedLinkPropsWithChildrenFunction<P extends AppRoutesPath> = {
    to: P;
    params?: PathParams;
    children: (isActive: boolean) => ReactNode;
} & Omit<NavLinkProps, 'children'>;

export function Link<P extends AppRoutesPath>({
    to,
    params,
    children,
    ...props
}: TypedLinkProps<P>);

export function Link<P extends AppRoutesPath>({
    to,
    params,
    children,
    ...props
}: TypedLinkPropsWithChildrenFunction<P>);

export function Link<P extends AppRoutesPath>(props: TypedLinkProps<P>) {
    const { to, params, children, ...restProps } = props;

    const isActive = getIsActive(props);

    if (isFunction(children)) {
        return (
            <ReactRouterLink to={createRoute(to, params)} {...restProps}>
                {children(isActive)}
            </ReactRouterLink>
        );
    }

    return (
        <ReactRouterLink to={createRoute(to, params)} {...restProps}>
            {children}
        </ReactRouterLink>
    );
}

function getIsActive<P extends AppRoutesPath>(props: TypedLinkProps<P>) {
    const location = useLocation();

    const match = matchPath(createRoute(props.to, props.params), {
        path: location.pathname,
        exact: props.exact,
    });

    if (match) return true;

    return false;
}
