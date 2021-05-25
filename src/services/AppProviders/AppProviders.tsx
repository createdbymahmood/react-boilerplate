import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryService } from 'services/reactQuery';

type AppProvidersProps = {
    children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <HelmetProvider>
            <ReactQueryService>
                <BrowserRouter>{children}</BrowserRouter>
            </ReactQueryService>
        </HelmetProvider>
    );
}
