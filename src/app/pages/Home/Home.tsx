import { FC } from 'react';
/* components */
/* modules */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
/* helpers */
import { translations } from 'services/i18n/translations';
/* assets */
/* services */
/* constants */
/* styles */
import s from './Home.module.scss';
import { useData, useLogin } from '@hooks/api';
import { queryInvalidationPipe } from 'helpers/reactQuery/queryInvalidationPipe';
import API_URLS from 'constants/apiUrls';
/* types */

const Home: FC = () => {
    const { t } = useTranslation();
    const { mutate } = useLogin();
    const { data } = useData();

    const handleSuccessfulLogin = () => {
        queryInvalidationPipe(
            API_URLS.login,
            API_URLS.login,
            API_URLS.login,
            API_URLS.login,
            API_URLS.login,
        );
    };

    return (
        <div className={s.home} onClick={handleSuccessfulLogin}>
            Home
        </div>
    );
};

export default Home;
