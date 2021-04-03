import { generatePath } from 'react-router-dom';

const API_URLS = {
    login: '/login',
    teamSignal: (teamId: string): string =>
        generatePath('/team/:teamId/signal', { teamId }),
};

export default API_URLS;
