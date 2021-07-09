import { CSSProperties } from 'react';
import { Breakpoints } from './createBreakpoints';
import { Spacing } from './createSpacing';

export interface Mixins {
    gutters: (styles?: CSSProperties) => CSSProperties;
    toolbar: CSSProperties;
}

export interface MixinsOptions extends Partial<Mixins> {
    // ... use interface declaration merging to add custom mixin options
}

export default function createMixins(
    breakpoints: Breakpoints,
    spacing: Spacing,
    mixins: MixinsOptions,
) {
    return {
        gutters: (styles = {}) => {
            console.warn(
                [
                    'Material-UI: theme.mixins.gutters() is deprecated.',
                    'You can use the source of the mixin directly:',
                    `
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
        `,
                ].join('\n'),
            );

            return {
                paddingLeft: spacing(2),
                paddingRight: spacing(2),
                ...styles,
                [breakpoints.up('sm')]: {
                    paddingLeft: spacing(3),
                    paddingRight: spacing(3),
                    ...styles[breakpoints.up('sm')],
                },
            };
        },
        toolbar: {
            minHeight: 56,
            [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
                minHeight: 48,
            },
            [breakpoints.up('sm')]: {
                minHeight: 64,
            },
        },
        ...mixins,
    };
}
