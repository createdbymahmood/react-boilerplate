import { renderHook } from '@testing-library/react-hooks/native';
import useInterval from './useInterval';

let callback;

beforeEach(() => {
    jest.useFakeTimers();
    callback = jest.fn();
});

afterEach(() => {
    callback.mockRestore();
    jest.clearAllTimers();
});

afterAll(() => {
    jest.useRealTimers();
});

test('should fire the callback function (1)', () => {
    const timeout = 500;
    renderHook(() => useInterval(callback, timeout));
    jest.advanceTimersByTime(timeout);
    expect(callback).toBeCalled();
});

test('should fire the callback function (2)', () => {
    const timeout = 500;
    const earlyTimeout = 400;
    renderHook(() => useInterval(callback, timeout));
    jest.advanceTimersByTime(earlyTimeout);
    expect(callback).not.toHaveBeenCalled();
});

test('should call set interval on start', () => {
    const timeout = 1200;
    renderHook(() => useInterval(callback, timeout));
    jest.advanceTimersByTime(timeout);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), timeout);
});

it('should clear interval on unmount', () => {
    const { unmount } = renderHook(() => useInterval(callback, 200));
    expect(clearInterval).not.toHaveBeenCalled();
    unmount();
    expect(clearInterval).toHaveBeenCalledTimes(1);
});

export {};
