import {
    DefaultNamespace,
    KeyPrefix,
    Namespace,
    useTranslation,
    UseTranslationOptions,
} from 'react-i18next';

export function useLocales<
    N extends Namespace,
    TKPrefix extends KeyPrefix<N> = undefined,
>(ns?: N | Readonly<N>, options?: UseTranslationOptions<TKPrefix>) {
    const [__t] = useTranslation(ns, options);
    return { __t };
}
