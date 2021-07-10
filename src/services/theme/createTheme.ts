import deepmerge from 'helpers/ts/deepmerge';
import createBreakpoints, {
    Breakpoints,
    BreakpointsOptions,
} from './createBreakpoints';
import createMixins, { Mixins, MixinsOptions } from './createMixins';
import createPalette, { Palette, PaletteOptions } from './createPalette';
import createTypography, {
    Typography,
    TypographyOptions,
} from './createTypography';
import shadows, { Shadows } from './shadows';
import shape, { Shape, ShapeOptions } from './shape';
import createSpacing, { Spacing, SpacingOptions } from './createSpacing';
import transitions, { Transitions, TransitionsOptions } from './transitions';
import zIndex, { ZIndexOptions } from './zIndex';

export type Direction = 'ltr' | 'rtl';

export interface ThemeOptions {
    shape?: ShapeOptions;
    breakpoints?: BreakpointsOptions;
    direction?: Direction;
    mixins?: MixinsOptions;
    palette?: PaletteOptions;
    shadows?: Shadows;
    spacing?: SpacingOptions;
    transitions?: TransitionsOptions;
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    zIndex?: ZIndexOptions;
}

export interface Theme {
    shape: Shape;
    breakpoints: Breakpoints;
    direction: Direction;
    mixins: Mixins;
    palette: Palette;
    shadows: Shadows;
    spacing: Spacing;
    transitions: Transitions;
    typography: Typography;
    zIndex: ZIndexOptions;
}

export default function createTheme(
    options: ThemeOptions = {},
    ...args: object[]
): Theme {
    const {
        breakpoints: breakpointsInput = {},
        mixins: mixinsInput = {},
        palette: paletteInput = {},
        spacing: spacingInput,
        typography: typographyInput = {},
        ...other
    } = options;

    const palette = createPalette(paletteInput);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);

    let muiTheme = deepmerge(
        {
            breakpoints,
            direction: 'ltr',
            mixins: createMixins(breakpoints, spacing, mixinsInput),
            palette,
            shadows,
            typography: createTypography(palette, typographyInput),
            spacing,
            shape,
            transitions,
            zIndex,
        },
        other,
    );

    muiTheme = args.reduce(
        (acc, argument) => deepmerge(acc, argument),
        muiTheme,
    );

    if (process.env.NODE_ENV !== 'production') {
        const pseudoClasses = [
            'checked',
            'disabled',
            'error',
            'focused',
            'focusVisible',
            'required',
            'expanded',
            'selected',
        ];
        const traverse = (
            node: Record<string, any>,
            parentKey?: string,
            depth: number = 1,
        ) => {
            let key;

            // eslint-disable-next-line guard-for-in, no-restricted-syntax
            for (key in node) {
                const child = node[key];
                if (depth === 1) {
                    if (key.indexOf('Mui') === 0 && child) {
                        traverse(child, key, depth + 1);
                    }
                } else if (
                    pseudoClasses.indexOf(key) !== -1 &&
                    Object.keys(child).length > 0
                ) {
                    if (process.env.NODE_ENV !== 'production') {
                        console.error(
                            [
                                `Material-UI: The \`${parentKey}\` component increases ` +
                                    `the CSS specificity of the \`${key}\` internal state.`,
                                'You can not override it like this: ',
                                JSON.stringify(node, null, 2),
                                '',
                                'Instead, you need to use the $ruleName syntax:',
                                JSON.stringify(
                                    {
                                        root: {
                                            [`&$${key}`]: child,
                                        },
                                    },
                                    null,
                                    2,
                                ),
                                '',
                                'https://material-ui.com/r/pseudo-classes-guide',
                            ].join('\n'),
                        );
                    }
                    // Remove the style to prevent global conflicts.
                    node[key] = {};
                }
            }
        };

        traverse(muiTheme.overrides);
    }

    return muiTheme;
}
