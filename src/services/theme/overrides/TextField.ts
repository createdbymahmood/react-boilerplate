import { Components, Theme } from '@mui/material/styles';

export default function TextField(
    theme: Theme,
): Record<'MuiTextField', Components['MuiTextField']> {
    return {
        MuiTextField: {
            defaultProps: {},

            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                    },
                },
            },
        },
    };
}
