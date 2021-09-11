import { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const HelmetService: FC = ({ children }) => (
    <HelmetProvider>{children}</HelmetProvider>
);
