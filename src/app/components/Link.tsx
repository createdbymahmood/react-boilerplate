import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import { ExtractRouteParams } from 'react-router';
import { AppRoutes } from 'constants/appRoutes';
import { createRoute } from 'helpers/ts/createRoute';

type ExtractStringPropertyNames<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

const s = Object.values(AppRoutes).map(i => i);

type PATHS = typeof s[0];

export type Path = ExtractStringPropertyNames<typeof AppRoutes>;

// Object which has matching parameter keys for a path.
export type PathParams = ExtractRouteParams<PATHS>;

type TypedLinkProps<P extends Path> = {
    to: P;
    params?: PathParams;
} & LinkProps;

/**
 * Type-safe version of `react-router-dom/Link`.
 */
export const Link = <P extends Path>({
    to,
    params,
    ...props
}: TypedLinkProps<P>) => {
    return <ReactRouterLink to={createRoute(to, params)} {...props} />;
};
