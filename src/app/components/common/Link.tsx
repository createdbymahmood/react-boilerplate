import { NavLink as ReactRouterLink, NavLinkProps } from 'react-router-dom';
import { ExtractRouteParams } from 'react-router';
import { createRoute } from 'helpers/ts/createRoute';
import { ROUTE_URLS } from 'constants/routeUrls';

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

/**
 * Type-safe version of `react-router-dom/Link`.
 */
export const Link = <P extends AppRoutesPath>({
    to,
    params,
    ...props
}: TypedLinkProps<P>) => {
    return <ReactRouterLink to={createRoute(to, params)} {...props} />;
};
