import { FC } from 'react';
import { Helmet, HelmetProps } from 'react-helmet-async';
import * as CONFIGS from 'constants/configs';

export const DocumentTitle: FC<HelmetProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <Helmet {...props}>
            <title>
                {title} | {CONFIGS.APP_TITLE}
            </title>
            {children}
        </Helmet>
    );
};
