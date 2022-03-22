import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/* constants */
import env from 'constants/env';
import { enTranslationJson } from './en';

export const translationsJson = {
    en: enTranslationJson,
} as const;

export const _i18n_instance = i18next
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector);

export const i18n = _i18n_instance.init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug: env.isDev,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});
