import { act, renderHook } from '@testing-library/react-hooks/native';
import useCounter from './useCounter';

describe('useCounter()', () => {
    test('should use counter', () => {
        const { result } = renderHook(() => useCounter());
        expect(typeof result.current.count).toBe('number');
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        expect(typeof result.current.setCount).toBe('function');
    });

    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter(10));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(9);
    });

    test('should default value works', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.count).toBe(initialValue);
    });

    test('should reset counter', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.reset();
        });
        expect(result.current.count).toBe(initialValue);
    });

    test('should set counter', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.setCount(10);
        });
        expect(result.current.count).toBe(10);
    });

    test('should set counter with prev value', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.setCount(v => v + 20);
        });
        expect(result.current.count).toBe(initialValue + 20);
    });
});

export {};
