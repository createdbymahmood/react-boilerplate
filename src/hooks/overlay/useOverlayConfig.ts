import { useState } from 'react';
import {} from 'react-router-dom';
import { useEffectOnce } from 'react-use';

type Props = {
    timeout: number;
};

export function useOverlayConfig({ timeout }: Props) {
    const [open, setOpen] = useState(false);

    /* Open modal on first mount */
    useEffectOnce(() => setOpen(true));

    const handleClose = () => {
        setOpen(false);
        /*  setTimeout(history.goBack, timeout); */
    };

    return [open, handleClose] as const;
}
