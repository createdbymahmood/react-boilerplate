import { FC } from 'react';
/* modules */
import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient({});

export const ReactQueryService: FC = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
