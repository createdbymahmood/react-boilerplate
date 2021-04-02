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
import s from './Pkg.module.scss';
/* types */

const Pkg: FC = () => {
    const { t } = useTranslation();

    return <div className={s.pkg}>Pkg</div>;
};

export default Pkg;
