import React from 'react';
import ReactDOM from 'react-dom';
/* main app file */
import Application from 'app';
/* services */
import reportWebVitals from 'reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryService } from 'services/reactQuery';

// Initialize languages
import 'locales/i18n';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <ReactQueryService>
                <BrowserRouter>
                    <Application />
                </BrowserRouter>
            </ReactQueryService>
        </HelmetProvider>
    </React.StrictMode>,
    MOUNT_NODE,
);

reportWebVitals();
