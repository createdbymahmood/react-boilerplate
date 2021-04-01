import React from 'react';
import ReactDOM from 'react-dom';
/* main app file */
import App from 'app';
/* services */
import reportWebVitals from 'reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// Initialize languages
import 'locales/i18n';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
    MOUNT_NODE,
);

reportWebVitals();
