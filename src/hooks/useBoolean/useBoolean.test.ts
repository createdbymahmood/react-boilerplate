import { act, renderHook } from '@testing-library/react-hooks/native';
import useBoolean from './useBoolean';

describe('useBoolean()', () => {
    test('should use boolean', () => {
        const { result } = renderHook(() => useBoolean());
        expect(typeof result.current.value).toBe('boolean');
        expect(typeof result.current.setFalse).toBe('function');
        expect(typeof result.current.setTrue).toBe('function');
        expect(typeof result.current.toggle).toBe('function');
        expect(typeof result.current.setValue).toBe('function');
    });

    test('should default value works (1)', () => {
        const { result } = renderHook(() => useBoolean(true));
        expect(result.current.value).toEqual(true);
    });

    test('should default value works (2)', () => {});
    const { result } = renderHook(() => useBoolean(false));
    expect(result.current.value).toEqual(false);

    test('should set to true (1)', () => {
        const { result } = renderHook(() => useBoolean(false));
        act(() => {
            result.current.setTrue();
        });
        expect(result.current.value).toEqual(true);
    });

    test('should set to true (2)', () => {
        const { result } = renderHook(() => useBoolean(true));
        act(() => {
            result.current.setFalse();
        });
        expect(result.current.value).toEqual(false);
    });

    test('should set to false (1)', () => {
        const { result } = renderHook(() => useBoolean(false));
        act(() => {
            result.current.setFalse();
        });
        expect(result.current.value).toEqual(false);
    });

    test('should set to false (2)', () => {
        const { result } = renderHook(() => useBoolean(true));
        act(() => {
            result.current.setFalse();
        });
        expect(result.current.value).toEqual(false);
    });

    test('should toggle value', () => {
        const { result } = renderHook(() => useBoolean(true));
        act(() => {
            result.current.toggle();
        });
        expect(result.current.value).toEqual(false);
    });

    test('should toggle value from prev using setValue', () => {
        const { result } = renderHook(() => useBoolean(true));
        act(() => {
            result.current.setValue(false);
        });
        expect(result.current.value).toEqual(false);
    });
});

export {};
