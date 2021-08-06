import { AppLayout, Tabs } from '@components';
import { PropsWithChildren } from 'react';

export default function Posts(props: PropsWithChildren<unknown>) {
    return (
        <AppLayout>
            <Tabs />
            {props.children}
        </AppLayout>
    );
}
