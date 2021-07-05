import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

/* Services */
import { ReactQueryService } from 'services/ReactQuery';

/* Initialize languages */
import 'services/i18n/i18n';

type AppProvidersProps = {
    children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <React.StrictMode>
            <HelmetProvider>
                <ReactQueryService>
                    <BrowserRouter>{children}</BrowserRouter>
                </ReactQueryService>
            </HelmetProvider>
        </React.StrictMode>
    );
}
