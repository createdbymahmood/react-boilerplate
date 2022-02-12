import {
    act,
    renderHook,
    RenderHookResult,
    Renderer,
} from '@testing-library/react-hooks';
import { useDidUpdate } from './useDidUpdate';

export type SetupHook<T extends (...args: any) => any, P> = (
    props?: P,
) => RenderHookResult<P, ReturnType<T>, Renderer<P>>;

interface HookProps {
    (cb: () => void, deps?: any[]);
}

const setupHook = (cb: (...args) => void, deps: any[]) =>
    renderHook(({ cb, deps }) => useDidUpdate(cb, deps), {
        initialProps: { cb, deps },
    });

describe('@mantine/hooks/use-did-update', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should not call the cb when there is no changes in deps', () => {
        const deps = [{ a: 1 }];
        const spy = jest.fn();
        const hook = setupHook(spy, deps);
        expect(spy).not.toBeCalled();
        hook.rerender({ cb: spy, deps });
        expect(spy).not.toBeCalled();
    });

    it('should call the callback when dependenceis change', () => {
        const spy = jest.fn();
        const hook = setupHook(spy, ['first']);
        expect(spy).not.toBeCalled();
        hook.rerender({ cb: spy, deps: ['second'] });
        expect(spy).toHaveBeenCalledTimes(1);
        hook.rerender({ cb: spy, deps: ['third'] });
        hook.rerender({ cb: spy, deps: ['third'] });
        hook.rerender({ cb: spy, deps: ['third'] });
        hook.rerender({ cb: spy, deps: ['third'] });
        hook.rerender({ cb: spy, deps: ['third'] });
        expect(spy).toHaveBeenCalledTimes(2);
        hook.rerender({ cb: spy, deps: ['forth'] });
        expect(spy).toHaveBeenCalledTimes(3);
    });
});
