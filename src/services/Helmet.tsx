import { ReactNode } from 'react';
import { Helmet, HelmetProps, HelmetProvider } from 'react-helmet-async';

export function HelmetService({
    children,
    ...props
}: HelmetProps & { children: ReactNode }) {
    return (
        <HelmetProvider>
            <Helmet {...props} />
            {children}
        </HelmetProvider>
    );
}
