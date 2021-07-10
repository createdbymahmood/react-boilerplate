import React, { ReactNode } from 'react';

/* Components */
import { ErrorBoundary } from '@components';

/* Services */
import { ReactQueryService } from 'services/ReactQuery';
import { HelmetService } from 'services/HelmetService';
import { RouterService } from 'services/routerService/RouterService';

/* Initialize languages */
import 'services/i18n/i18n';

type AppProvidersProps = {
    children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <HelmetService>
                    <ReactQueryService>
                        <RouterService>{children}</RouterService>
                    </ReactQueryService>
                </HelmetService>
            </ErrorBoundary>
        </React.StrictMode>
    );
}
