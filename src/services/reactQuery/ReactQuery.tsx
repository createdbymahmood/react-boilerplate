import { FC } from 'react';

/* Modules */
import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient({});

export const ReactQueryService: FC = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
