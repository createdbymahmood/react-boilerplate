import React, { useEffect } from 'react';

export default function Home() {
    return <div>Home</div>;
}

const noop = () => 0;

export function useInterval(
    callback: (...args: unknown[]) => void = noop,
    delay: number = 0,
) {
    useEffect(() => {
        const interval = setInterval(() => callback(), delay);
        return () => clearInterval(interval);
    }, [delay]);

    return undefined;
}
