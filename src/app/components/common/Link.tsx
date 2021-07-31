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
} & Omit<NavLinkProps, 'children'> & {
        children: (isActive: boolean) => ReactNode;
    };

/**
 * Type-safe version of `react-router-dom/Link`.
 */
export const Link = <P extends AppRoutesPath>({
    to,
    params,
    children,
    ...props
}: TypedLinkProps<P>) => {
    const location = useLocation();

    const getActive = () => {
        const match = matchPath(createRoute(to, params), {
            path: location.pathname,
            exact: props.exact,
        });

        if (match) return true;

        return false;
    };

    const isActive = getActive();

    return (
        <ReactRouterLink to={createRoute(to, params)} {...props}>
            {children(isActive)}
        </ReactRouterLink>
    );
};
