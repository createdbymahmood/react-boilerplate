import { ReactNode } from 'react';
import {
    ErrorBoundary as ReactErrorBoundary,
    FallbackProps,
} from 'react-error-boundary';

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
    return <div>OOPS! something went wrong!</div>;
}
