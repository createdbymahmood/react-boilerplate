import React, { PropsWithChildren } from 'react';
import { Helmet, HelmetProps } from 'react-helmet-async';
import * as CONFIGS from 'constants/configs';

export function DocumentTitle({
    title,
    children,
    ...props
}: PropsWithChildren<HelmetProps>) {
    return (
        <Helmet {...props}>
            <title>
                {title} | {CONFIGS.APP_TITLE}
            </title>

            {children}
        </Helmet>
    );
}
