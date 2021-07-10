import React, { ReactNode } from 'react';
import { ThemeProvider as OriginalThemeProvider } from '@material-ui/styles';
import createTheme from './createTheme';
import CSSBaseline from './CSSBaseline';

const lightTheme = createTheme({});

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <OriginalThemeProvider theme={lightTheme}>
            <CSSBaseline />
            {children}
        </OriginalThemeProvider>
    );
}
