import { ReactNode } from 'react';
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

type ThemeServiceProps = {
    children: ReactNode;
};

const themeOptions = createTheme({
    palette,
    shape,
    typography,
    breakpoints,
});

export default function ThemeService({ children }: ThemeServiceProps) {
    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
