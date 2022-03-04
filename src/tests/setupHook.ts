import { RenderHookResult, Renderer } from '@testing-library/react-hooks';

export type SetupHook<T extends (...args: any) => any, P> = (
    props?: P,
) => RenderHookResult<P, ReturnType<T>, Renderer<P>>;
