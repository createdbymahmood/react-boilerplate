import { renderHook } from '@testing-library/react-hooks/native';
import useDebounce from './useDebounce';

describe('first', () => {
    test('should return debounce value', () => {
        const value = 'value';
        const { result } = renderHook(() => useDebounce(value));
        const debouncedValue = result.current;
        expect(value).toBe(debouncedValue);
    });

    test('should debounce with default debounce 500 ms', () => {
        mockSetTimeout();
        renderHook(() => useDebounce('value'));
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
    });

    test('should call clearTimeout on unmount', () => {
        mockClearTimeout();
        const { unmount } = renderHook(() => useDebounce('value'));
        unmount();
        expect(clearTimeout).toHaveBeenCalledTimes(1);
    });
});

function mockSetTimeout() {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
}

function mockClearTimeout() {
    jest.useFakeTimers();
    jest.spyOn(global, 'clearTimeout');
}

export {};
