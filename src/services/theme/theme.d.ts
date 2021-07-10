// import original module declarations
import '@material-ui/styles';
import { Theme } from './createTheme';

// and extend them!
declare module '@material-ui/styles' {
    export interface DefaultTheme extends Theme {}
}
