import * as React from 'react';

export function withSuspense<T extends {}>(
    fallback: React.SuspenseProps['fallback'],
) {
    return (
        WrappedComponent: React.ComponentType<T>,
    ): React.ComponentType<T> => {
        return (props: T) => {
            return (
                <React.Suspense fallback={fallback}>
                    <WrappedComponent {...props} />
                </React.Suspense>
            );
        };
    };
}
