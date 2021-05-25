import React from 'react';
import ReactDOM from 'react-dom';

/* PWA setup */
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';

/* main app file */
import Application from 'app';

/* services */
import reportWebVitals from 'reportWebVitals';
import AppProviders from 'services/AppProviders';

/* Initialize languages */
import 'services/i18n/i18n';

/* styles */
import 'assets/styles/tw.css';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <React.StrictMode>
        <AppProviders>
            <Application />
        </AppProviders>
    </React.StrictMode>,
    MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
