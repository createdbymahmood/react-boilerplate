import * as React from 'react';

/* Modules */
import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            useErrorBoundary: true,
        },
    },
});

export const ReactQueryService: React.FC = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
