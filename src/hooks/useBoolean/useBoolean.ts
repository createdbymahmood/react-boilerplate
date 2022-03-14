import * as React from 'react';

interface UseBooleanHookResult {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}

export default function useBoolean(
    initialValue: boolean = false,
): UseBooleanHookResult {
    const [value, setValue] = React.useState(initialValue);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    const toggle = () => setValue(v => !v);

    return { value, setValue, setTrue, setFalse, toggle } as const;
}
