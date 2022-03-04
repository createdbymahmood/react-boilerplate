import { FC } from 'react';
import { Helmet, HelmetProps } from 'react-helmet-async';
import * as configs from 'constants/configs';

export const DocumentTitle: FC<HelmetProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <Helmet {...props}>
            <title>
                {title} | {configs.appTitle}
            </title>
            {children}
        </Helmet>
    );
};
