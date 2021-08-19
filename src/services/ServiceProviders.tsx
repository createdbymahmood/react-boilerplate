import React, { FC, PropsWithChildren } from 'react';

/* Components */
import { ErrorBoundary } from '@components';

/* Services */
import { ReactQueryService } from 'services/ReactQuery';
import { HelmetService } from 'services/Helmet';
import { RouterService } from 'services/router/RouterService';

/* Initialize languages */
import 'services/i18n/i18n';
import 'assets/styles/tw.css';
import { GraphqlService } from './graphql/GraphqlService';

type ServiceProvidersProps = PropsWithChildren<{}>;

const ServiceProviders: FC = ({ children }: ServiceProvidersProps) => {
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <HelmetService>
                    <ReactQueryService>
                        <GraphqlService>
                            <RouterService>{children}</RouterService>
                        </GraphqlService>
                    </ReactQueryService>
                </HelmetService>
            </ErrorBoundary>
        </React.StrictMode>
    );
};

export default ServiceProviders;
