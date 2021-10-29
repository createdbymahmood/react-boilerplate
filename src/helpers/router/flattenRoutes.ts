import { RouteObject } from 'react-router-dom';

declare module 'react-router-dom' {
    export interface RouteObject {
        caseSensitive?: boolean;
        children?: RouteObject[];
        element?: React.ReactNode;
        index?: boolean;
        path?: string;
        name?: string;
    }
}

interface RouteBranch {
    path: string;
    routesMeta: RouteMeta[];
    name: string;
}

interface RouteMeta {
    relativePath: string;
    caseSensitive: boolean;
    childrenIndex: number;
}

function invariant(cond: any, message: string): asserts cond {
    if (!cond) throw new Error(message);
}

const joinPaths = (paths: string[]): string =>
    paths.join('/').replace(/\/\/+/g, '/');

export function flattenRoutes(
    routes: RouteObject[],
    branches: RouteBranch[] = [],
    parentsMeta: RouteMeta[] = [],
    parentPath = '',
): RouteBranch[] {
    routes.forEach((route, index) => {
        let meta: RouteMeta = {
            relativePath: route.path || '',
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
        };

        if (meta.relativePath.startsWith('/')) {
            invariant(
                meta.relativePath.startsWith(parentPath),
                `Absolute route path "${meta.relativePath}" nested under path ` +
                    `"${parentPath}" is not valid. An absolute child route path ` +
                    `must start with the combined path of all its parent routes.`,
            );

            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }

        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);

        // Add the children before adding this route to the array so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            invariant(
                route.index !== true,
                `Index routes must not have child routes. Please remove ` +
                    `all child routes from route path "${path}".`,
            );

            flattenRoutes(route.children, branches, routesMeta, path);
        }

        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) {
            return;
        }

        branches.push({
            path,
            name: route.name as string,
            routesMeta,
        });
    });

    return branches;
}
