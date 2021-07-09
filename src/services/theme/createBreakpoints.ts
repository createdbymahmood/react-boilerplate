export type OverridableStringUnion<T, U = {}> = GenerateStringUnion<
    Overwrite<T, U>
>;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = Omit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
    {
        [Key in keyof T]: true extends T[Key] ? Key : never;
    }[keyof T],
    string
>;

export type BreakpointDefaults = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', true>;
export interface BreakpointOverrides {}

export type Breakpoint = OverridableStringUnion<
    BreakpointDefaults,
    BreakpointOverrides
>;
export type BreakpointValues = { [key in Breakpoint]: number };

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
export const keys: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export interface Breakpoints {
    keys: Breakpoint[];
    values: BreakpointValues;
    up: (key: Breakpoint | number) => string;
    down: (key: Breakpoint | number) => string;
    between: (start: Breakpoint | number, end: Breakpoint | number) => string;
    only: (key: Breakpoint) => string;
    /**
     * @deprecated
     * Use the `values` prop instead
     */
    width: (key: Breakpoint) => number;
}

export type BreakpointsOptions = Partial<
    {
        unit: string;
        step: number;
    } & Breakpoints
>;

// Keep in mind that @media is inclusive by the CSS specification.
export default function createBreakpoints(
    breakpoints: BreakpointsOptions,
): Breakpoints {
    const {
        // The breakpoint **start** at this value.
        // For instance with the first breakpoint xs: [xs, sm[.
        values = {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
        unit = 'px',
        step = 5,
        ...other
    } = breakpoints;

    function up(key) {
        const value = typeof values[key] === 'number' ? values[key] : key;
        return `@media (min-width:${value}${unit})`;
    }

    function down(key) {
        const endIndex = keys.indexOf(key) + 1;
        const upperbound = values[keys[endIndex]];

        if (endIndex === keys.length) {
            // xl down applies to all sizes
            return up('xs');
        }

        const value =
            typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
        return `@media (max-width:${value - step / 100}${unit})`;
    }

    function between(start, end) {
        const endIndex = keys.indexOf(end);

        if (endIndex === keys.length - 1) {
            return up(start);
        }

        return (
            `@media (min-width:${
                typeof values[start] === 'number' ? values[start] : start
            }${unit}) and ` +
            `(max-width:${
                (endIndex !== -1 &&
                typeof values[keys[endIndex + 1]] === 'number'
                    ? values[keys[endIndex + 1]]
                    : end) -
                step / 100
            }${unit})`
        );
    }

    function only(key) {
        return between(key, key);
    }

    let warnedOnce = false;

    function width(key) {
        if (process.env.NODE_ENV !== 'production') {
            if (!warnedOnce) {
                warnedOnce = true;
                console.warn(
                    [
                        "Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.",
                        'Use the `theme.breakpoints.values` instead.',
                    ].join('\n'),
                );
            }
        }

        return values[key];
    }

    return {
        keys,
        values,
        up,
        down,
        between,
        only,
        width,
        ...other,
    };
}
