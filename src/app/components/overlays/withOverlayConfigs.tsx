import { AppRoutesPath } from '@components/common';
import { createRoute } from 'helpers/ts/createRoute';
import { PropsWithChildren, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

export type InjectedOverlayProps = {
    onClose: () => void;
    open: boolean;
} & PropsWithChildren<unknown>;

type ConfigProps = {
    onCloseRedirectTo: AppRoutesPath;
    timeout: number;
};

export const withOverlayConfigs = ({
    onCloseRedirectTo,
    timeout,
}: ConfigProps) => {
    return function <BaseProps extends InjectedOverlayProps>(
        WrappedComponent: React.ComponentType<BaseProps>,
    ) {
        return (props: BaseProps): JSX.Element => {
            const history = useHistory();
            const [open, setOpen] = useState(false);

            /* Open modal on first mount */
            useEffectOnce(() => {
                setOpen(true);
            });

            const handleClose = () => {
                setOpen(false);
                setTimeout(() => {
                    history.push(createRoute(onCloseRedirectTo));
                }, timeout);
            };
            return (
                <WrappedComponent
                    {...props}
                    onClose={handleClose}
                    open={open}
                />
            );
        };
    };
};
