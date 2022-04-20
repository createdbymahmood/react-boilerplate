import { useEventCallback } from '@mui/material';

/**
 * 
 * @param fns array of fns
 * @returns merged callback
 * @example const callback = useMergedEventCallbacks(
    () => console.log('1'),
    () => console.log('2'),
    () => console.log('3'),
    );
 */
export function useMergedEventCallbacks<Args extends unknown[]>(
    ...fns: ((...args: Args) => void)[]
) {
    return useEventCallback((...args: Args) => {
        fns.forEach(fn => {
            fn?.(...args);
        });
    });
}
