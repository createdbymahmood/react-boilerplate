import React, { lazy, Suspense } from 'react';
import { retry } from 'helpers';

interface Opts {
    fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

type ImportFunc<U> = () => Promise<{ default: U }>;

export const lazyLoad = <
    T extends Promise<any>,
    U extends React.ComponentType<any>,
>(
    importFunc: () => T,
    selectorFunc?: (s: Unpromisify<T>) => U,
    opts: Opts = { fallback: null },
) => {
    let lazyFactory: ImportFunc<U> = () => retry<{ default: U }>(importFunc);

    if (selectorFunc) {
        lazyFactory = () =>
            importFunc().then(module => ({ default: selectorFunc(module) }));
    }

    const LazyComponent = lazy(lazyFactory);

    return (props: React.ComponentProps<U>): JSX.Element => (
        <Suspense fallback={opts.fallback!}>
            <LazyComponent {...props} />
        </Suspense>
    );
};
