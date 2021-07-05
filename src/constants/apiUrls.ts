import { generatePath } from 'react-router-dom';

const API_URLS = {
    login: '/login',
    currentUser: '/posts/1',

    someUrlWithSomeParams: (someParam: string): string =>
        generatePath('/some-path/:someParam', { someParam }),
};

export default API_URLS;
