import { act, renderHook } from '@testing-library/react-hooks';
import { SetupHook } from 'helpers/test/setupHook';
import { useClipboard } from './useClipboard';

type HookProps = {
    timeout: number;
};

const defaultProps = { timeout: 0 };

const setupHook: SetupHook<typeof useClipboard, HookProps> = ({
    timeout,
} = defaultProps) => renderHook(() => useClipboard({ timeout }));

const originalNavigatorClipboard = { ...navigator.clipboard };
const textToCopy = 'Hello World!';
const mockExceptionValue = 'fake input causing exception in copy to clipboard';

describe('@mantine/hooks/use-clipboard', () => {
    afterAll(() => {
        jest.useRealTimers();
    });

    beforeEach(() => {
        jest.useFakeTimers();

        /* @ts-ignore */
        navigator.clipboard = {
            writeText: jest.fn().mockImplementation(value => {
                if (value === mockExceptionValue) {
                    return Promise.reject(value);
                }
                return Promise.resolve(true);
            }),
            readText: jest.fn().mockImplementation(() => textToCopy),
        };
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.resetAllMocks();

        // @ts-ignore
        global.navigator.clipboard = originalNavigatorClipboard;
    });

    it('inititalize useClipboard', () => {
        const { result } = setupHook();

        expect(typeof result.current.copied).toBe('boolean');
        expect(typeof result.current.copy).toBe('function');
        expect(typeof result.current.error).toBe('object');
        expect(typeof result.current.reset).toBe('function');
    });

    it('copy text to clipboard', () => {
        const { result } = setupHook({ timeout: 2000 });
        const { copy, error } = result.current;
        act(() => copy(textToCopy));

        expect(navigator.clipboard.writeText).toBeCalledTimes(1);
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(textToCopy);
        expect(error).toBe(null);
    });

    it('throw error', () => {});
});
