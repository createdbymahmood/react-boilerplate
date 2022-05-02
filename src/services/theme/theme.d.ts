import { CustomThemeProps } from './custom';

declare module '@mui/material/styles/createTheme' {
    interface Theme extends CustomThemeProps {}
    interface ThemeOptions extends CustomThemeProps {}
}
