import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const HelmetService: React.FC = ({ children }) => (
    <HelmetProvider>{children}</HelmetProvider>
);
