import { useLocales } from 'hooks/useLocales';

export default function Home() {
    const { __t } = useLocales();

    return <div>Home</div>;
}
