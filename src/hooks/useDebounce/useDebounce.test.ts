import { renderHook } from '@testing-library/react-hooks/native';
import useDebounce from './useDebounce';

describe('first', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should return debounce value', () => {
        const value = 'value';
        const { result } = renderHook(() => useDebounce(value));
        const debouncedValue = result.current;
        expect(value).toBe(debouncedValue);
    });

    test('should debounce with default debounce 500 ms', () => {
        renderHook(() => useDebounce('value'));
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
    });

    test('should call clearTimeout on unmount', () => {
        const { unmount } = renderHook(() => useDebounce('value'));
        unmount();
        expect(clearTimeout).toHaveBeenCalledTimes(1);
    });
});

export {};
