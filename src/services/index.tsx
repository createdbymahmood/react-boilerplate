import React, { FC } from 'react';

/* Components */
import { ErrorBoundary } from '@components';

/* Services */
import { ReactQueryService } from 'services/reactQuery';
import { HelmetService } from 'services/helmet';
import { RouterService } from 'services/router/RouterService';
import { GraphqlService } from 'services/graphql';

/* Initialize languages */
import 'services/i18n/i18n';
import 'assets/styles/tw.css';

const AppProviders: FC = ({ children }) => {
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

export default AppProviders;
