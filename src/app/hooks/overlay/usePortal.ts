import { useEffect, useState } from 'react';

export const getId = () => {
    return Math.random().toString(32).slice(2, 10);
};

const isBrowser = (): boolean => {
    return Boolean(
        typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement,
    );
};

export type SSRState = {
    isBrowser: boolean;
    isServer: boolean;
};

const useSSR = (): SSRState => {
    const [browser, setBrowser] = useState<boolean>(false);
    useEffect(() => {
        setBrowser(isBrowser());
    }, []);

    return {
        isBrowser: browser,
        isServer: !browser,
    };
};

const createElement = (id: string): HTMLElement => {
    const el = document.createElement('div');
    el.setAttribute('id', id);
    return el;
};

const usePortal = (
    selectId: string = getId(),
    getContainer?: () => HTMLElement | null,
): HTMLElement | null => {
    const id = `app-portal-${selectId}`;
    const { isBrowser } = useSSR();
    const [elSnapshot, setElSnapshot] = useState<HTMLElement | null>(
        isBrowser ? createElement(id) : null,
    );

    useEffect(() => {
        const customContainer = getContainer ? getContainer() : null;
        const parentElement = customContainer || document.body;
        const hasElement = parentElement.querySelector<HTMLElement>(`#${id}`);
        const el = hasElement || createElement(id);

        if (!hasElement) {
            parentElement.appendChild(el);
        }
        setElSnapshot(el);
    }, []);

    return elSnapshot;
};

export default usePortal;