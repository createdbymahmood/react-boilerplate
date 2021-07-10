import { CSSProperties, withStyles } from '@material-ui/styles';
import React from 'react';

export const html: CSSProperties = {
    WebkitFontSmoothing: 'antialiased', // Antialiasing.
    MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: 'border-box',
};

export const a: CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
};

export const body = theme => ({
    color: theme.palette.text.primary,
    ...theme.typography.body2,
    backgroundColor: theme.palette.background.default,
    '@media print': {
        // Save printer ink.
        backgroundColor: theme.palette.common.white,
    },
});

export const styles = theme => ({
    '@global': {
        html,
        '*, *::before, *::after': {
            boxSizing: 'inherit',
        },
        'strong, b': {
            fontWeight: theme.typography.fontWeightBold,
        },
        body: {
            margin: 0, // Remove the margin in all browsers.
            ...body(theme),
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            '&::backdrop': {
                backgroundColor: theme.palette.background.default,
            },
        },
        a,
    },
});

function CssBaseline(props) {
    /* eslint-disable no-unused-vars */
    const { children = null, classes } = props;
    /* eslint-enable no-unused-vars */
    return <React.Fragment>{children}</React.Fragment>;
}

export default withStyles(styles, { name: 'CSSBaseline' })(CssBaseline);
