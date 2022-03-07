import { useLocales } from 'hooks/useLocales';
import React from 'react';

export default function Home() {
    const { __t } = useLocales();

    return <div>Home</div>;
}
