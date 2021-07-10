import { Breakpoint, keys as breakpointKeys } from './createBreakpoints';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useTheme, getThemeProps } from '@material-ui/styles';
import useMediaQuery from '@hooks/useMediaQuery';

const useEnhancedEffect =
    typeof window === 'undefined' ? useEffect : useLayoutEffect;

export const isWidthUp = (
    breakpoint: Breakpoint,
    width: Breakpoint,
    inclusive: boolean = true,
) => {
    if (inclusive) {
        return (
            breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width)
        );
    }
    return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
};

export const isWidthDown = (
    breakpoint: Breakpoint,
    width: Breakpoint,
    inclusive: boolean = true,
) => {
    if (inclusive) {
        return (
            breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint)
        );
    }
    return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};

export interface WithWidthOptions {
    withTheme?: boolean;
    noSSR?: boolean;
    initialWidth?: Breakpoint;
    resizeInterval?: number;
}
export interface WithWidth {
    width: Breakpoint;
}

export interface WithWidthProps extends Partial<WithWidth> {
    innerRef?: React.Ref<any>;
}

const withWidth =
    (options: WithWidthOptions = {}) =>
    Component => {
        const {
            withTheme: withThemeOption = false,
            noSSR = false,
            initialWidth: initialWidthOption,
        } = options;

        function WithWidth(props) {
            const contextTheme = useTheme();
            const theme = props.theme || contextTheme;
            const { initialWidth, width, ...other } = getThemeProps({
                theme,
                name: '',
                props: { ...props },
            });

            const [mountedState, setMountedState] = useState(false);
            useEnhancedEffect(() => {
                setMountedState(true);
            }, []);

            /**
             * innerWidth |xs      sm      md      lg      xl
             *            |-------|-------|-------|-------|------>
             * width      |  xs   |  sm   |  md   |  lg   |  xl
             */
            const keys = theme.breakpoints.keys.slice().reverse();
            const widthComputed = keys.reduce((output, key) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const matches = useMediaQuery(theme.breakpoints.up(key));
                return !output && matches ? key : output;
            }, null);

            const more = {
                width:
                    width ||
                    (mountedState || noSSR ? widthComputed : undefined) ||
                    initialWidth ||
                    initialWidthOption,
                ...(withThemeOption ? { theme } : {}),
                ...other,
            };

            // When rendering the component on the server,
            // we have no idea about the client browser screen width.
            // In order to prevent blinks and help the reconciliation of the React tree
            // we are not rendering the child component.
            //
            // An alternative is to use the `initialWidth` property.
            if (more.width === undefined) {
                return null;
            }

            return <Component {...more} />;
        }

        hoistNonReactStatics(WithWidth, Component);

        return WithWidth;
    };

export default withWidth;
