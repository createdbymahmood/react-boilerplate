import * as React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import { Button, Stack, Typography } from '@mui/material';

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
    return (
        <Stack alignItems='center' p={5} spacing={2}>
            <Typography>Something went wrong</Typography>
            <Button
                size='small'
                variant='contained'
                onClick={resetErrorBoundary}
            >
                retry
            </Button>
        </Stack>
    );
}

export function withQueryErrorBoundary<T extends {}>(
    fallback: React.ComponentType<FallbackProps> = ErrorFallback,
) {
    return (WrappedComponent: React.ComponentType<T>) => {
        return (props: T) => (
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} FallbackComponent={fallback}>
                        <WrappedComponent {...props} />
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        );
    };
}
