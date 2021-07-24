import React, { ReactNode } from 'react';

/* Components */
import { ErrorBoundary } from '@components';

/* Services */
import { ReactQueryService } from 'services/ReactQuery';
import { HelmetService } from 'services/Helmet';
import { RouterService } from 'services/router/RouterService';

/* Initialize languages */
import 'services/i18n/i18n';

type ServiceProvidersProps = {
    children: ReactNode;
};

export default function ServiceProviders({ children }: ServiceProvidersProps) {
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
