import ReactDOM from 'react-dom';

/* PWA setup */
import * as serviceWorkerRegistration from 'services/serviceWorker/serviceWorkerRegistration';

/* main app file */
import Application from 'App';

/* services */
import reportWebVitals from 'services/webVitals/reportWebVitals';
import ServiceProviders from 'services/ServiceProviders';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(
    <ServiceProviders>
        <Application />
    </ServiceProviders>,
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
