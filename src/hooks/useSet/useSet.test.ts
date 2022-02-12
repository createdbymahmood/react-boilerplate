import {
    renderHook,
    RenderHookResult,
    act,
} from '@testing-library/react-hooks/native';
import useSet from './useSet';

function setupHook<K>(initialValue = new Set<K>()) {
    return renderHook(() => useSet(initialValue));
}

describe('', () => {
    it('should memoized its utils methods', () => {
        const useSetHookResult = setupHook();
        const [, fns] = useSetHookResult.result.current;
        expect(typeof fns.add).toBe('function');
        expect(typeof fns.has).toBe('function');
        expect(typeof fns.remove).toBe('function');
        expect(typeof fns.reset).toBe('function');
        expect(typeof fns.toggle).toBe('function');
    });

    it('should init set and utils', () => {});

    it('should init empty set if no initial set provided', () => {
        const useSetHookResult = setupHook();
        const [set] = useSetHookResult.result.current;
        expect(set.size).toBe(0);
    });

    it('should have an initially provided key', () => {
        const useSetHookResult = setupHook(new Set(['foo']));
        const [set] = useSetHookResult.result.current;

        let value;
        act(() => {
            value = set.has('foo');
        });
        expect(value).toBe(true);
    });

    it('should have an added key', () => {
        const useSetHookResult = setupHook();
        const [set] = useSetHookResult.result.current;

        act(() => {
            set.add('foo');
        });
        let value;

        act(() => {
            value = set.has('foo');
        });
        expect(value).toBe(true);
    });

    it('should get false for non-existing key', () => {
        const useSetHookResult = setupHook(new Set(['foo', 'bar', 'baz']));
        const [set] = useSetHookResult.result.current;
        let value;
        act(() => {
            value = set.has('qux');
        });
        expect(value).toBe(false);
    });

    it('should add a new key', () => {
        const useSetHookResult = setupHook(new Set(['foo', 'bar', 'baz']));
        const [set] = useSetHookResult.result.current;
        act(() => {
            set.add('qux');
        });
        let value;

        act(() => {
            value = set.has('qux');
        });
        expect(value).toBe(true);
    });

    it('should remove existing key', () => {
        const useSetHookResult = setupHook(new Set(['foo', 'bar', 'baz']));
        const [set] = useSetHookResult.result.current;
        act(() => {
            set.delete('bar');
        });
        let value;

        act(() => {
            value = set.has('bar');
        });
        expect(value).toBe(false);
    });

    it('should do nothing if removing non-existing key', () => {});

    it('should reset to initial set provided', () => {
        const useSetHookResult = setupHook(new Set([1, 2, 3]));
        const [set, fns] = useSetHookResult.result.current;
        act(() => {
            fns.add(4);
            fns.add(5);
            fns.add(6);
        });

        act(() => {
            fns.reset();
        });
        expect(set).toEqual(new Set([1, 2, 3]));
    });
});

export {};
