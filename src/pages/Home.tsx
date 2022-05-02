import { Theme } from '@mui/material/styles/createTheme';
import { useTheme } from '@mui/system';
import { useLocales } from 'hooks/useLocales';

export default function Home() {
    const { __t } = useLocales();

    const theme = useTheme() as Theme;

    return <div>Home</div>;
}
