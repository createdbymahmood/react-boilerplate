import * as React from 'react';
import { Helmet as OriginalHelmet, HelmetProps } from 'react-helmet-async';
import * as helmet from 'constants/helmet';

export const Helmet: React.FC<HelmetProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <OriginalHelmet {...props}>
            <title>
                {title} | {helmet.title}
            </title>
            {children}
        </OriginalHelmet>
    );
};
