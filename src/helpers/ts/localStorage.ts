export let _isSSR = false;

/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
export function setSSR(isEnabled: boolean): void {
    _isSSR = isEnabled;
}

let _window: Window | undefined = undefined;

// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
} catch (e) {
    /* no-op */
}

/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
export function getWindow(rootElement?: Element | null): Window | undefined {
    if (_isSSR || typeof _window === 'undefined') {
        return undefined;
    } else {
        const el = rootElement as Element;

        return el && el.ownerDocument && el.ownerDocument.defaultView
            ? el.ownerDocument.defaultView
            : _window;
    }
}

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
export function getItem(key: string): string | null {
    let result = null;
    try {
        const win = getWindow();
        result = win ? win.localStorage.getItem(key) : null;
    } catch (e) {
        /* Eat the exception */
    }
    return result;
}

/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
export function setItem(key: string, data: string): void {
    try {
        const win = getWindow();

        win && win.localStorage.setItem(key, data);
    } catch (e) {
        /* Eat the exception */
    }
}

/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 */
export function removeItem(key: string): void {
    try {
        const win = getWindow();

        win && win.localStorage.removeItem(key);
    } catch (e) {
        /* Eat the exception */
    }
}

export const clearLocalStorage = (): void => {
    try {
        localStorage.clear();
    } catch (e) {
        /* Eat the exception */
    }
};
