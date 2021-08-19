import { useEffect, useState } from 'react';
import { isBrowser, getId, createElement } from 'helpers/ts';

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
