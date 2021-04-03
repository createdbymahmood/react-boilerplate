import { FC } from 'react';
/* components */
/* modules */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
/* helpers */
import { translations } from 'locales/translations';
/* assets */
/* services */
/* constants */
/* styles */
import s from './Home.module.scss';
import { useLogin } from '@hooks/api';
/* types */

const Home: FC = () => {
    const { t } = useTranslation();
    const { mutate } = useLogin();

    const handleSubmitForm = () => mutate({ username: '', password: '' });

    return (
        <div className={s.home} onClick={handleSubmitForm}>
            Home
        </div>
    );
};

export default Home;
