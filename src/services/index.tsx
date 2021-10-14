import React, { FC } from 'react';

/* Components */
import { ErrorBoundary } from '@components';

/* Services */
import { ReactQueryService } from 'services/reactQuery';
import { HelmetService } from 'services/helmet';
import { RouterService } from 'services/router/RouterService';
import { GraphqlService } from 'services/graphql';
import ThemeService from './theme';

/* Initialize languages */
import 'services/i18n/i18n';
// import 'assets/styles/tw.css';
import AuthProvider from '@store/auth/AuthProvider';

const AppProviders: FC = ({ children }) => {
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <HelmetService>
                    <ReactQueryService>
                        <GraphqlService>
                            <RouterService>
                                <ThemeService>
                                    <AuthProvider>{children}</AuthProvider>
                                </ThemeService>
                            </RouterService>
                        </GraphqlService>
                    </ReactQueryService>
                </HelmetService>
            </ErrorBoundary>
        </React.StrictMode>
    );
};

export default AppProviders;
