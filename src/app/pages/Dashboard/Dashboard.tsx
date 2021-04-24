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
import s from './Dashboard.module.scss';
/* types */

const Dashboard: FC = () => {
    const { t } = useTranslation();

    return <div className={s.dashboard}>asd</div>;
};

export default Dashboard;
