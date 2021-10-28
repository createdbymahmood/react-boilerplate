import { useMediaQuery } from '@mui/material';
import { Components, Theme } from '@mui/material/styles';

export default function Button(
    theme: Theme,
): Record<'MuiButton', Components['MuiButton']> {
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                fullWidth: isSmDown ? true : false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 9999,
                },
            },
        },
    };
}
