import React, { PropsWithChildren } from 'react';

import { AppLayout } from '@components';

export default function Index(props: PropsWithChildren<unknown>) {
    return <AppLayout>{props.children}</AppLayout>;
}
