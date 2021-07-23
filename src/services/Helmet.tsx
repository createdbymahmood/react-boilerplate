import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export function HelmetService({ children }: PropsWithChildren<{}>) {
    return <HelmetProvider>{children}</HelmetProvider>;
}
