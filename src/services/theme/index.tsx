import * as React from 'react';
import { CssBaseline } from '@mui/material';
import {
    createTheme,
    ThemeProvider,
    StyledEngineProvider,
} from '@mui/material/styles';
import shape from './shape';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import palette from './palette';
import { assignIn } from 'lodash';

type ThemeServiceProps = {
    children: React.ReactNode;
};

const themeOptions = createTheme({
    palette,
    shape,
    typography,
    breakpoints,
});

export default function ThemeService({ children }: ThemeServiceProps) {
    const theme = createTheme(themeOptions);
    assignIn(theme, { components: componentsOverride(theme) });

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
