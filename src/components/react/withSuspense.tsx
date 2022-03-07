import { ComponentType, Suspense } from 'react';

export function withSuspense<T extends {}>(
    fallback: React.SuspenseProps['fallback'],
) {
    return (WrappedComponent: ComponentType<T>): ComponentType<T> => {
        return (props: T) => {
            return (
                <Suspense fallback={fallback}>
                    <WrappedComponent {...props} />
                </Suspense>
            );
        };
    };
}
