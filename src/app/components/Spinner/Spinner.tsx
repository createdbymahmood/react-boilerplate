import { FC, ComponentPropsWithoutRef } from 'react';
/* components */
/* modules */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
/* helpers */
import { translations } from 'services/i18n/translations';
/* assets */
/* services */
/* constants */
import s from './Spinner.module.scss';
/* types */

export type CommonProps = {};

export type Props = Omit<ComponentPropsWithoutRef<'div'>, keyof CommonProps> &
    CommonProps;

export const Spinner: FC<Props> = ({ className, ...restProps }) => {
    const { t } = useTranslation();

    return <div className={clsx(className)}>Loading...</div>;
};
