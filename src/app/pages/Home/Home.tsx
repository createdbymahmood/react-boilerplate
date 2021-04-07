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
import styles from './Home.module.scss';

/* types */

const Home: FC = () => {
    return <p className={styles.home}>Salam</p>;
};

export default Home;
