import { Components, Theme } from '@mui/material/styles';

export default function Button(
    theme: Theme,
): Record<'MuiButton', Components['MuiButton']> {
    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 9999,
                },
            },
        },
    };
}
