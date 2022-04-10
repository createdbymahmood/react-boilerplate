import * as React from 'react';
import { History } from 'history';

import { Router as OriginalRouter } from 'react-router-dom';

type Props = { history: History; children?: React.ReactNode };

export const Router = ({ children, history }: Props) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <OriginalRouter
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};
