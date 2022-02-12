import { Fragment, ReactNode } from 'react';
import {
    ErrorBoundary as ReactErrorBoundary,
    FallbackProps,
} from 'react-error-boundary';

const reload = () => window.location.reload();
export function ErrorBoundary(props: { children: ReactNode }): JSX.Element {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // reset the state of your app so the error doesn't happen again
            }}
        >
            {props.children}
        </ReactErrorBoundary>
    );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    if (error.name === 'ChunkLoadError') {
        reload();
        return <Fragment />;
    }

    return <div>OOPS! something went wrong!</div>;
}
