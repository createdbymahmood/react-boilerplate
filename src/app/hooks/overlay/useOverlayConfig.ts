import { AppRoutesPath } from '@components';
import { createRoute } from 'helpers/ts/createRoute';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

type Props = {
    onCloseRedirectTo: AppRoutesPath;
    timeout: number;
};

export function useOverlayConfig({ onCloseRedirectTo, timeout }: Props) {
    const history = useHistory();
    const [open, setOpen] = useState(false);

    /* Open modal on first mount */
    useEffectOnce(() => {
        setOpen(true);
    });

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => history.push(createRoute(onCloseRedirectTo)), timeout);
    };

    return [open, handleClose];
}
