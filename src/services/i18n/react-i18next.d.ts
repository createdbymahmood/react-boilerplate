import 'react-i18next';
import common from './en/common.json';
import home from './en/home.json';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface Resources {
        common: typeof common;
        home: typeof home;
    }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom namespace type if you changed it
        defaultNS: 'commmon';
        // custom resources type
        resources: {
            common: typeof common;
            home: typeof home;
        };
    }
}
