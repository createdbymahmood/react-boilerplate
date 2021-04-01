import { FC } from 'react';

/* modules */
import { QueryClientProvider, QueryClient } from 'react-query';

export const client = new QueryClient({});

export const ReactQueryService: FC = ({ children }) => {
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};
